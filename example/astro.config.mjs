import {defineConfig} from 'astro/config';
import astroFontPicker from 'astro-font-picker';

// https://astro.build/config
export default defineConfig({
  integrations: [astroFontPicker()],
  devToolbar: {
    enabled: true,
    open: true
  }
});
