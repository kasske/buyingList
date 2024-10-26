// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Buying List App PWA',
        short_name: 'BL PWA',
        description: 'My awesome buying list Progressive Web App!',
        theme_color: '#ffffff',
        icons: [
          {
            src: '/icon512_maskable.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/icon512_rounded.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
      },
    }),
  ],
});
