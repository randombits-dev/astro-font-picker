import type {DevToolbarApp} from "astro";

import * as WebFont from 'webfontloader';
import {DevOverlayToggle} from "astro/client/dev-overlay/ui-library/index.js";
import {TEMPLATE} from "./template.js";
import {getFontCSS, getFontLink, getFontOptions, getFontStyle, getGoogleLink, getGroupOptions} from "./utils.js";
import {ICON} from "./icon.js";


const appName = "Font Picker";
const STORAGE_KEY = 'astro:dev-overlay:font-picker';

export default ({
  id: "astro-font-picker",
  name: appName,
  icon: ICON,
  init(canvas, eventTarget) {
    const settings = JSON.parse(sessionStorage.getItem(STORAGE_KEY)) || {enabled: true, override: false};
    const updateSetting = (key: string, value: any) => {
      settings[key] = value;
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
    };

    const updateNotification = () => {
      eventTarget.dispatchEvent(
          new CustomEvent('toggle-notification', {
            detail: {
              state: !!settings.font && settings.enabled,
            },
          })
      );
    };

    const style = document.createElement('style');
    style.setAttribute('id', 'astro-font-picker');

    const windowElement = document.createElement("astro-dev-toolbar-window");
    windowElement.innerHTML = TEMPLATE;

    const instr1 = windowElement.querySelector("#instr1") as HTMLDivElement;
    const instr2 = windowElement.querySelector("#instr2") as HTMLDivElement;
    const googleLink = windowElement.querySelector("#google-link") as HTMLAnchorElement;

    const toggle = windowElement.querySelector("#toggle") as DevOverlayToggle;
    toggle.input.checked = settings.enabled ?? true;
    toggle.input.addEventListener("change", () => {
      updateSetting('enabled', toggle.input.checked);
      if (toggle.input.checked) {
        loadFont(settings.font);
      } else {
        document.querySelector('#astro-font-picker').remove();
        updateNotification();
      }
    });

    const override = windowElement.querySelector("#override") as DevOverlayToggle;
    override.input.checked = settings.override ?? true;
    override.input.addEventListener("change", () => {
      updateSetting('override', override.input.checked);
      if (settings.enabled) {
        loadFont(settings.font);
      }
    });

    const loadFont = (font: string) => {
      updateSetting('font', font);
      updateNotification();
      if (font && settings.enabled) {
        WebFont.load({
          google: {
            families: [font]
          },
          active: () => {
            style.textContent = getFontStyle(font, settings.override);
            googleLink.href = getGoogleLink(font);
            instr1.innerText = getFontLink(font);
            instr2.innerText = getFontCSS(font);
            googleLink.style.visibility = 'visible';
            instr1.style.visibility = 'visible';
            instr2.style.visibility = 'visible';
          }
        });
        if (!document.querySelector('#astro-font-picker')) {
          document.head.appendChild(style);
        }
      } else {
        style.textContent = '';
        googleLink.style.visibility = 'hidden';
        instr1.style.visibility = 'hidden';
        instr2.style.visibility = 'hidden';
      }
    };

    if (settings.enabled) {
      loadFont(settings.font);
    }

    const writeSelect = (selectedGroup: string) => {
      select.innerHTML = getFontOptions(selectedGroup, settings.font).join('');
      if (!select.querySelector('option[selected]')) {
        loadFont('');
      }
    };

    const groupSelect = windowElement.querySelector("#group-select") as HTMLSelectElement;
    groupSelect.innerHTML = getGroupOptions(settings.group).join('');
    groupSelect.addEventListener('change', (event) => {
      const target = event.target as HTMLSelectElement;
      const selectedGroup = target.value;
      updateSetting('group', selectedGroup);
      writeSelect(selectedGroup);
    });

    const select = windowElement.querySelector("#font-select") as HTMLSelectElement;
    writeSelect(settings.group);
    select.addEventListener('change', (event) => {
      const target = event.target as HTMLSelectElement;
      loadFont(target.value);
    });

    canvas.appendChild(windowElement);
  }
} satisfies DevToolbarApp);
