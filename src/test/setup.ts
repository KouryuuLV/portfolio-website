import '@testing-library/jest-dom';

// Define Vite env types for tests
declare global {
  interface ImportMetaEnv {
    VITE_EMAILJS_SERVICE_ID: string;
    VITE_EMAILJS_TEMPLATE_ID: string;
    VITE_EMAILJS_PUBLIC_KEY: string;
  }
}
