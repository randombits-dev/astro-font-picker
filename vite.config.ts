import {defineConfig} from 'vite';
import {resolve} from 'path';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [dts()],
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
