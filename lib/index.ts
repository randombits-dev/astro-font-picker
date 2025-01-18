import type {AstroIntegration} from "astro";
import {ICON} from "./icon.js";

export default function createAstroFontPickerIntegration(): AstroIntegration {
  return {
    name: "astro-font-picker",
    hooks: {
      "astro:config:setup": ({addDevToolbarApp}) => {
        const url = import.meta.url;
        const path = url.substring(0, url.lastIndexOf("/"));
        addDevToolbarApp({
          id: "astro-font-picker",
          name: "Font Picker",
          icon: ICON,
          entrypoint: path + "/astroFontPicker.js"
        });
      }
    },
  };
}
