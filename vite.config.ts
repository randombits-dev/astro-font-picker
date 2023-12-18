import {defineConfig} from 'vite';
import {resolve} from 'path';

export default defineConfig({
  build: {
    lib: {
      name: 'astro-font-picker',
      entry: [
        resolve(__dirname, 'lib/index.ts'),
        resolve(__dirname, 'lib/astroFontPicker.ts'),
      ]
    }
  }
});
