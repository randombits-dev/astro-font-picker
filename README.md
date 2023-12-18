# Fontable &nbsp;&nbsp;&nbsp;[![NPM Version](https://flat.badgen.net/npm/v/fontable)](https://www.npmjs.com/package/fontable)&nbsp;&nbsp;[![Demo](https://flat.badgen.net/badge/icon/demo/cyan?label)](https://randombits-dev.github.io/fontable/)

## Find the right Google font by embedding a font picker on your website.

![fontable](https://github.com/randombits-dev/fontable/assets/4440760/6c296296-28ed-48bf-b1e7-3d989afdd0e5)

### Features

1. Embed a temporary font picker on your site. It shows up in the lower right corner of the page.
2. Choose from over 1000 open source fonts, loaded from Google fonts.
3. When you find a font you like, copy the CSS to install it permanently on your site, and remove the font picker.

### Tips

1. The font picker is focused on page load. You can use arrow keys to try out fonts quickly.
2. A full guide to using Google fonts: https://developers.google.com/fonts/docs/getting_started

### Quick Install

Add the following script to your html page:

```html
<script src="https://cdn.jsdelivr.net/npm/fontable@latest/dist/auto.js"></script>
```

Fonts are applied to the body element.

### Advanced Install

Use this method if you want to customize how the font family is applied on your site.

```html
<script>
  import {initFontPicker} from 'https://cdn.jsdelivr.net/npm/fontable@latest';

  initFontPicker({
    onChange: (fontFamily) => {
      // set the font family style manually
      document.querySelector('#content').style.fontFamily = fontFamily;
    }
  });
</script>
```

### About

Brought to you by [Random Bits Software Engineering](https://randombits.dev)
