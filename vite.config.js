import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src',
  publicDir: 'assets',
  build: {
    outDir: '../public'
  },
  css: {
    postcss: {
      plugins: [
        require('autoprefixer')
      ]
    }
  }
});
