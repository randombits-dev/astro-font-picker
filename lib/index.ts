import type {AstroIntegration} from "astro";

export default function createAstroFontPickerIntegration(): AstroIntegration {
  return {
    name: "astro-font-picker",
    hooks: {
      "astro:config:setup": ({addDevToolbarApp}) => {
        const url = import.meta.url;
        const path = url.substring(0, url.lastIndexOf("/"));
        addDevToolbarApp(path + "/astroFontPicker.js");
      },
      "astro:server:setup": ({server}) => {

        server.ws.on("astro-dev-toolbar:astro-tunnel:initialized", async () => {
          // Send the tunnel URL to the client when the app is initialized
          // server.ws.send("astro-font-picker:tunnel-url", {
          //   url: await tunnel?.getURL(),
          // });
        });

        server.ws.on("astro-font-picker:install", async (config) => {
          console.log('do something', config);
        });
      },
    },
  };
}
