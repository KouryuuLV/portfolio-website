/**
 * Cloudflare Worker - Routes subdomain requests to correct people pages
 * 
 * juris.lukstins.eu → /dist/people/juris/index.html
 * jtemplate.lukstins.eu → /dist/people/jtemplate/index.html
 * lukstins.eu → /dist/index.html (main carousel)
 */

const PEOPLE = ['juris', 'jurisseniors', 'karlis', 'valdis', 'peteris'];

export default {
  async fetch(request: Request): Promise<Response> {
    const url = new URL(request.url);
    const hostname = url.hostname;

    // Extract subdomain (e.g., "juris" from "juris.lukstins.eu")
    const subdomain = hostname.split('.')[0];

    // Determine which page to serve
    let pagePath = 'index.html'; // Default to main carousel

    if (PEOPLE.includes(subdomain)) {
      // Serve the person's page
      pagePath = `people/${subdomain}/index.html`;
    } else if (hostname === 'lukstins.eu' || hostname === 'www.lukstins.eu') {
      // Main domain serves the carousel landing page
      pagePath = 'index.html';
    }

    // Fetch the static asset from your R2 or Workers KV
    // If using Wrangler static assets, they're automatically served
    // Otherwise, configure your asset bindings below
    try {
      const response = await fetch(new URL(pagePath, url.origin).href, {
        method: request.method,
        headers: request.headers,
        body: request.body,
      });

      // For development/testing, return the response as-is
      // For production, you may want to add caching headers
      const newResponse = new Response(response.body, response);
      newResponse.headers.set('Cache-Control', 'public, max-age=3600');
      return newResponse;
    } catch (error) {
      // Fallback to index.html for client-side routing
      return fetch(new URL('index.html', url.origin).href, {
        method: 'GET',
        headers: request.headers,
      });
    }
  },
};
