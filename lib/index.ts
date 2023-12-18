import type {AstroIntegration} from "astro";

export default function createAstroFontPickerIntegration(): AstroIntegration {
  return {
    name: "astro-font-picker",
    hooks: {
      "astro:config:setup": ({addDevToolbarApp}) => {
        const url = import.meta.url;
        const path = url.substring(0, url.lastIndexOf("/"));
        addDevToolbarApp(path + "/astroFontPicker.js");
      }
    },
  };
}
