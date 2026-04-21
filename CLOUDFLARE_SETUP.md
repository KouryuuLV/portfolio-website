# Quick Start: Cloudflare Deployment

## Local Development (Default)

```bash
npm install
npm run dev
```

Then visit:
- `http://localhost:5173/` - Main carousel
- `http://localhost:5173/people/juris/` - Juris's portfolio
- `http://localhost:5173/people/jtemplate/` - Template portfolio

Navigation links are automatically path-based.

---

## Production Deployment to Cloudflare

### 1. One-time Setup

```bash
# Install Wrangler globally
npm install -g @cloudflare/wrangler

# Authenticate with Cloudflare
wrangler login
```

### 2. Configure wrangler.toml

Get your credentials from [Cloudflare Dashboard](https://dash.cloudflare.com):

```bash
# In wrangler.toml, update:
account_id = "your_account_id"     # From Cloudflare dashboard
zone_id = "your_zone_id"            # From domain settings
zone_name = "lukstins.eu"           # Your domain
```

Also add your KV namespace ID if using:
```bash
id = "your_kv_namespace_id_here"
```

### 3. Deploy

```bash
npm run deploy:cloudflare
```

Or manually:
```bash
npm run build:worker
wrangler publish
```

### 4. DNS Setup

In Cloudflare DNS settings, add CNAME records:

```
juris.lukstins.eu    CNAME    lukstins.eu
jtemplate.lukstins.eu CNAME   lukstins.eu
```

Or use wildcard (handles all people automatically):
```
*.lukstins.eu        CNAME    lukstins.eu
```

---

## How It Works

**Local:** Path-based routing
```
localhost:5173/people/juris/ → /people/juris/index.html
```

**Production:** Subdomain routing via Cloudflare Worker
```
juris.lukstins.eu → Worker extracts "juris" → /people/juris/index.html
```

The same React app runs in both environments. Navigation links are generated dynamically:
- Dev: `<a href="/people/juris/">` 
- Prod: `<a href="https://juris.lukstins.eu/">`

---

## Adding a New Person

### 1. Create page
```bash
mkdir -p people/alice
cp people/juris/index.html people/alice/index.html
```

### 2. Update vite.config.ts
```typescript
input: {
  main: resolve(__dirname, 'index.html'),
  juris: resolve(__dirname, 'people/juris/index.html'),
  jtemplate: resolve(__dirname, 'people/jtemplate/index.html'),
  alice: resolve(__dirname, 'people/alice/index.html'),  // ← Add this
}
```

### 3. Update src/worker.ts
```typescript
const PEOPLE = ['juris', 'jtemplate', 'alice'];  // ← Add 'alice'
```

### 4. Update wrangler.toml
```toml
routes = [
  { pattern = "juris.lukstins.eu/*", zone_name = "lukstins.eu" },
  { pattern = "jtemplate.lukstins.eu/*", zone_name = "lukstins.eu" },
  { pattern = "alice.lukstins.eu/*", zone_name = "lukstins.eu" },  // ← Add this
  { pattern = "lukstins.eu/*", zone_name = "lukstins.eu" }
]
```

### 5. Update index.html carousel
Add new person to the landing page carousel.

### 6. Deploy
```bash
npm run deploy:cloudflare
```

---

## Environment Variables

### Development (.env.development)
```
VITE_ENVIRONMENT=development
VITE_BASE_URL=/
```

### Production (.env.production)
```
VITE_ENVIRONMENT=production
VITE_BASE_URL=https://lukstins.eu/
```

Add EmailJS credentials to both if needed.

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Deploy fails with "not authenticated" | Run `wrangler login` |
| Subdomain returns 404 | Check DNS CNAME records, verify worker route in wrangler.toml |
| Wrong page served | Verify `PEOPLE` array in `src/worker.ts` includes subdomain |
| Links point to wrong URL | Check `src/config/deployment.ts` environment detection |

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed configuration.
