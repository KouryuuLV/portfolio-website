# Deployment Configuration Guide

This guide explains how the portfolio website handles both local development (path-based routing) and Cloudflare production deployment (subdomain-based routing).

## Overview

- **Local Development**: Uses file path routing
  - `localhost:5173/` → Main carousel page
  - `localhost:5173/people/juris/` → Juris's portfolio
  - `localhost:5173/people/jtemplate/` → Template person's portfolio

- **Cloudflare Production**: Uses subdomain routing
  - `lukstins.eu` → Main carousel page
  - `juris.lukstins.eu` → Juris's portfolio
  - `jtemplate.lukstins.eu` → Template person's portfolio

## Architecture

### Files

1. **`src/config/deployment.ts`**
   - Centralizes environment-based configuration
   - `getDeploymentConfig()` returns environment-specific URLs
   - Used in React components to generate correct links

2. **`src/worker.ts`**
   - Cloudflare Worker that routes subdomains to correct pages
   - Extracts subdomain from request hostname
   - Routes to appropriate `/people/{personId}/` directory

3. **`wrangler.toml`**
   - Cloudflare Workers configuration
   - Defines routes for subdomains (*.lukstins.eu)
   - Specifies KV namespaces and build settings

4. **`.env.development` / `.env.production`**
   - Environment-specific variables
   - Used by Vite build process
   - Configured for each deployment target

## Local Development

### Setup

```bash
npm install
npm run dev
```

The app runs at `localhost:5173` with path-based routing:
- Main carousel: `http://localhost:5173/`
- Juris page: `http://localhost:5173/people/juris/`
- Template page: `http://localhost:5173/people/jtemplate/`

**Environment**: Uses `.env.development`

### Navigation

Navigation links are generated using `getDeploymentConfig()`:
```typescript
const config = getDeploymentConfig();
const personUrl = config.getPersonPageUrl('juris'); // Returns '/people/juris/'
const homeUrl = config.getHomeUrl(); // Returns '/'
```

## Cloudflare Production Deployment

### Prerequisites

1. **Cloudflare Account**
   - Domain: `lukstins.eu`
   - Active zone configuration

2. **Wrangler CLI**
   ```bash
   npm install -g wrangler
   ```

3. **Authentication**
   ```bash
   wrangler login
   ```

4. **Environment Setup**
   ```bash
   # Copy wrangler.toml and update:
   # - zone_id (found in Cloudflare dashboard)
   # - account_id (found in Cloudflare dashboard)
   ```

### Deployment Steps

1. **Update wrangler.toml**
   - Replace `your_kv_namespace_id_here` with actual KV ID (if using KV storage)
   - Update `zone_name` to your domain
   - Add your Cloudflare `account_id`

2. **Configure Production Environment**
   ```bash
   # .env.production is already configured
   # Update if needed for your EmailJS or other services
   ```

3. **Build and Deploy**
   ```bash
   # Option A: Build static pages + Worker
   npm run build:worker
   npm run deploy:cloudflare

   # Option B: Manual steps
   npm run build
   esbuild src/worker.ts --bundle --platform=neutral --format=esm --outfile=dist/worker.js
   wrangler publish
   ```

### How Subdomain Routing Works

When a user visits `juris.lukstins.eu`:

1. Request hits Cloudflare Worker (defined in `wrangler.toml`)
2. Worker reads hostname: `juris.lukstins.eu`
3. Extracts subdomain: `juris`
4. Routes to: `/dist/people/juris/index.html`
5. React app serves with production URL configuration

### DNS Configuration

In Cloudflare DNS, create records for each person:

```
juris.lukstins.eu    CNAME    lukstins.eu
jtemplate.lukstins.eu CNAME   lukstins.eu
```

Or use:
```
*.lukstins.eu        CNAME    lukstins.eu
```

## Adding New People

To add a new person to the portfolio:

### 1. Create Page Structure
```bash
mkdir -p people/{new_person_id}
cp people/juris/index.html people/{new_person_id}/index.html
# Optionally update content
```

### 2. Update Vite Config
In `vite.config.ts`, add to `rollupOptions.input`:
```typescript
{
  main: resolve(__dirname, 'index.html'),
  juris: resolve(__dirname, 'people/juris/index.html'),
  jtemplate: resolve(__dirname, 'people/jtemplate/index.html'),
  new_person_id: resolve(__dirname, 'people/new_person_id/index.html'), // Add this
}
```

### 3. Update Worker Routes
In `src/worker.ts`, update `PEOPLE` array:
```typescript
const PEOPLE = ['juris', 'jtemplate', 'new_person_id'];
```

### 4. Update wrangler.toml
Add route for new subdomain:
```toml
routes = [
  { pattern = "juris.lukstins.eu/*", zone_name = "lukstins.eu" },
  { pattern = "jtemplate.lukstins.eu/*", zone_name = "lukstins.eu" },
  { pattern = "new_person_id.lukstins.eu/*", zone_name = "lukstins.eu" },
  { pattern = "lukstins.eu/*", zone_name = "lukstins.eu" }
]
```

### 5. Update Carousel
Edit `index.html` to add new person to the carousel landing page.

### 6. Deploy
```bash
npm run deploy:cloudflare
```

## Environment Detection

The app detects its environment using Vite's `import.meta.env.DEV`:

```typescript
function getEnvironment(): Environment {
  return import.meta.env.DEV ? 'development' : 'production';
}
```

- **Development** (`npm run dev`): `import.meta.env.DEV` = `true`
- **Production** (`npm run build`): `import.meta.env.DEV` = `false`

## Testing Deployment Locally

### Simulate Production Build
```bash
npm run build
npm run preview
```

Then visit:
- `http://localhost:4173/` (main page)
- `http://localhost:4173/people/juris/` (person page)

### Test with Local DNS (Optional)
Edit `C:\Windows\System32\drivers\etc\hosts`:
```
127.0.0.1 juris.local
127.0.0.1 lukstins.local
```

Run a local server on port 443 (requires admin) or modify Worker to handle localhost.

## Troubleshooting

### Subdomain Not Resolving
- Check Cloudflare DNS records
- Verify worker routes in `wrangler.toml`
- Ensure nameservers point to Cloudflare

### Wrong Page Served
- Check `src/worker.ts` subdomain extraction logic
- Verify file exists at expected path in `dist/`
- Check `PEOPLE` array includes the subdomain

### Build Errors
- Run `npm run build` locally to identify issues
- Check TypeScript errors: `npm run lint`
- Verify `.env.production` is loaded

### EmailJS Not Working in Production
- Verify `VITE_EMAILJS_*` environment variables in `.env.production`
- Check Cloudflare environment variables if using Workers secrets
- Test ContactMe form in development first

## Security Considerations

1. **Environment Variables**
   - Store sensitive keys in Cloudflare Secrets (not in wrangler.toml)
   - Use `.env.production` for public config only

2. **CORS**
   - Verify EmailJS origin restrictions allow subdomains
   - Add wildcard rules if needed: `*.lukstins.eu`

3. **Caching**
   - Worker adds `Cache-Control: public, max-age=3600` headers
   - Adjust in `src/worker.ts` if needed

## References

- [Cloudflare Workers Documentation](https://developers.cloudflare.com/workers/)
- [Wrangler CLI Guide](https://developers.cloudflare.com/workers/wrangler/install-and-update/)
- [Vite Environment Variables](https://vitejs.dev/guide/env-and-modes.html)
