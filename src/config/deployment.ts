/**
 * Environment configuration for local dev vs Cloudflare production
 * 
 * Local: Uses file paths (localhost:5173/people/juris/)
 * Cloudflare: Uses subdomains (juris.lukstins.eu)
 */

export type Environment = 'development' | 'production';

export interface DeploymentConfig {
  environment: Environment;
  baseUrl: string;
  getPersonPageUrl: (personId: string) => string;
  getHomeUrl: () => string;
}

/**
 * Get current environment from import.meta.env
 */
export function getEnvironment(): Environment {
  return import.meta.env.DEV ? 'development' : 'production';
}

/**
 * Get deployment configuration based on environment
 */
export function getDeploymentConfig(): DeploymentConfig {
  const env = getEnvironment();

  if (env === 'development') {
    // Local development: uses file paths
    return {
      environment: 'development',
      baseUrl: '/',
      getPersonPageUrl: (personId: string) => `/people/${personId}/`,
      getHomeUrl: () => '/',
    };
  } else {
    // Production on Cloudflare: uses subdomains
    // Assumes we're already on the correct subdomain
    return {
      environment: 'production',
      baseUrl: `${window.location.protocol}//${window.location.hostname}/`,
      getPersonPageUrl: (personId: string) => {
        // When on juris.lukstins.eu, this returns juris.lukstins.eu/
        const domain = window.location.hostname.replace(/\.lukstins\.eu$/, '');
        if (domain && domain !== 'lukstins.eu' && domain !== 'www') {
          return `${window.location.protocol}//${personId}.lukstins.eu/`;
        }
        return `${window.location.protocol}//lukstins.eu/people/${personId}/`;
      },
      getHomeUrl: () => `${window.location.protocol}//lukstins.eu/`,
    };
  }
}

/**
 * Get person page URL safely (handles server-side rendering)
 */
export function getPersonPageUrlSafe(personId: string): string {
  if (typeof window === 'undefined') {
    // Server-side: default to path-based
    return `/people/${personId}/`;
  }
  return getDeploymentConfig().getPersonPageUrl(personId);
}
