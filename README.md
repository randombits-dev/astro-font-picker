# Astro Font Picker &nbsp;&nbsp;&nbsp;[![NPM Version](https://flat.badgen.net/npm/v/astro-font-picker)](https://www.npmjs.com/package/fontable)

Astro Font Picker is an Astro Dev Toolbar integration that lets you try out different fonts on your site. It uses Google Fonts to load over 1000 open source fonts.

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

Astro Font Picker is a Dev Toolbar integration. It will show up as a new icon in the dev toolbar, which is enabled by default Astro 4.0 and above.

Choose a font type and a font family from the dropdowns. The font will be applied to the body element of your site.

If you have font families applied to elements lower than the body element, it will not override those fonts unless you enable the `Override All Styles` toggle.

### Enabled

This toggle enables and disables the font picker. It is enabled by default.

### Override All Styles

This toggle will override all `font-family` styles on your site with the selected font. It is disabled by default.

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
