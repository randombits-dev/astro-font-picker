import {defineConfig} from 'astro/config';
import astroFontPicker from '../dist/index.js';

// https://astro.build/config
export default defineConfig({
  integrations: [astroFontPicker()],
  devToolbar: {
    enabled: true,
    open: true
  }
});
