import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import svgr from 'vite-plugin-svgr';

import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  plugins: [
    solidPlugin(),
    svgr({ svgrOptions: { icon: true } }),
  ],
  server: {
    port: 3000,
    proxy: {
      '/sanctum':  { target: 'http://localhost:8000', changeOrigin: true, secure: false },
      '/login':    { target: 'http://localhost:8000', changeOrigin: true, secure: false },
      '/logout':   { target: 'http://localhost:8000', changeOrigin: true, secure: false },
      '/register': { target: 'http://localhost:8000', changeOrigin: true, secure: false },
      '/me':       { target: 'http://localhost:8000', changeOrigin: true, secure: false },
      '/api':      { target: 'http://localhost:8000', changeOrigin: true, secure: false },
    },
  },
  build: { target: 'ESNext' },
  resolve: {
    alias: { '@': resolve(__dirname, 'src') },
  },
});
