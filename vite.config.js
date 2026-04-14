import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        product: resolve(__dirname, 'product.html'),
        ethos: resolve(__dirname, 'ethos.html'),
        archive: resolve(__dirname, 'archive.html'),
        magazine: resolve(__dirname, 'magazine.html'),
      },
    },
  },
});
