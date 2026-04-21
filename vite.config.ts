import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    open: true,
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        juris: resolve(__dirname, 'people/juris/index.html'),
        jtemplate: resolve(__dirname, 'people/jtemplate/index.html'),
        anna: resolve(__dirname, 'people/anna/index.html'),
        marta: resolve(__dirname, 'people/marta/index.html'),
      },
    },
  },
});
