// vite.config.js
import { defineConfig } from 'vite';
import { fileURLToPath } from 'node:url';
import { dirname, resolve, join } from 'node:path';
import autoprefixer from 'autoprefixer';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        'ncids-minimal': resolve(__dirname, 'entrypoints/ncids-minimal.scss'),
        'ncids': resolve(__dirname, 'entrypoints/ncids.scss'),
        'ncids-full': resolve(__dirname, 'entrypoints/ncids-full.scss'),
      },
      output: {
        assetFileNames: '[name].min.css',
      },
    },
    cssMinify: true,
  },
  css: {
    preprocessorOptions: {
      scss: {
        quietDeps: true,
        includePaths: [
          join(__dirname, 'packages'),
          join(__dirname, 'uswds-packages'),
        ],
      },
    },
    postcss: {
      plugins: [
        autoprefixer,
      ],
    },
  },
  assetsInlineLimit: 0, // inline all assets as base64
});
