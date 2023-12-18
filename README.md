# Astro Font Picker &nbsp;&nbsp;&nbsp;[![NPM Version](https://flat.badgen.net/npm/v/astro-font-picker)](https://www.npmjs.com/package/astro-font-picker)

Astro Font Picker is a dev toolbar integration that lets you try out different fonts on your site. It uses Google Fonts to load over 1000 open source fonts. Use the up/down keys to quickly cycle through different fonts, or pick one from the list.

![astro-font-picker](https://github.com/randombits-dev/astro-font-picker/assets/4440760/638c9077-1d36-4691-a483-3e9ff4e9b586)

## Installation

### Automatic installation:

```
npx astro add astro-font-picker
```

### Manual installation:

```
npm install astro-font-picker
```

Add the following to your `astro.config.mjs` file:

```js
import astroFontPicker from 'astro-font-picker';

export default {
  integrations: [
    astroFontPicker(),
    // other integrations
  ],
};
```

## Usage

Astro Font Picker will show up as a new icon in the dev toolbar, which is enabled by default in Astro 4.0 and above.

![astro-font-picker](https://github.com/randombits-dev/astro-font-picker/assets/4440760/d75bd523-b142-4548-a7fa-ca32f0d9ecce)

Filter the fonts by type (optional), and then choose a font family. The font will be applied to the body element of your site.

If you have font families applied to elements lower than the body element, it will not override those fonts unless you enable the `Override All Styles` toggle.

> Hint: You can use the up/down arrow keys to quickly cycle through the fonts.

### Enabled

This toggle controls whether the selected font is applied to the page. It is enabled by default.

### Override All Styles

This toggle will override all `font-family` styles on your site with the selected font. Without this enabled, any font families applied to elements lower than the body element will not be overridden.

The main reason for having the `Override All Styles` toggle disabled is to maintain the font style of specific elements or sections of your site. This way, when you use the font picker to select a font for other areas, it won't override fonts you have already decided on.

### Font CSS Output

This is the stylesheet link and CSS that you can copy and paste into your site to permanently install the font. For example:

In your `head` element:

```html

<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Itim"/>
```

In your CSS:

```css
h1 {
    font-family: Itim, cursive;
}
```

### View in Google Fonts

This link will open the selected font in Google Fonts.

### Settings are stored in session storage

All the settings (enabled, override, font type, and font family) are saved in session storage, so they are not lost when the page refreshes during development.
