import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [react(), tailwindcss()],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    build: {
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, 'index.html'),
          dashboard: path.resolve(__dirname, 'dashboard.html'),
          learn: path.resolve(__dirname, 'learn.html'),
          tracker: path.resolve(__dirname, 'tracker.html'),
          community: path.resolve(__dirname, 'community.html'),
          ovulation: path.resolve(__dirname, 'ovulation.html'),
          period: path.resolve(__dirname, 'period.html'),
          pregnancy: path.resolve(__dirname, 'pregnancy.html'),
          privacy: path.resolve(__dirname, 'privacy.html'),
          settings: path.resolve(__dirname, 'settings.html'),
        },
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
