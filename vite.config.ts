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
        jurisseniors: resolve(__dirname, 'people/jurisseniors/index.html'),
        karlis: resolve(__dirname, 'people/karlis/index.html'),
        valdis: resolve(__dirname, 'people/valdis/index.html'),
        peteris: resolve(__dirname, 'people/peteris/index.html'),
      },
    },
  },
});
