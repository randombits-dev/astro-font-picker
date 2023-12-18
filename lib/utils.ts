import fontList from "./font-list.json";

export const ALL_FONTS = fontList.filter(font => !font.name.startsWith('Noto '));
export const ALL_GROUPS = [...new Set(ALL_FONTS.map(font => font.type))];

const fontTypeMap = ALL_FONTS.reduce((map, font) => {
  map[font.name] = font.type;
  return map;
}, {});

export const getFontFallback = (font: string): string => {
  const type = fontTypeMap[font];
  switch (type) {
    case 'Serif':
      return 'serif';
    case 'Monospace':
      return 'monospace';
    case 'Handwriting':
      return 'cursive';
    default:
      return 'sans-serif';
  }
};

export const getGoogleLink = (font: string) => {
  return `https://fonts.google.com/share?selection.family=${font.replaceAll(' ', '+')}`;
};

export const getFontLink = (font: string) => {
  return `https://fonts.googleapis.com/css2?family=${font.replaceAll(' ', '+')}`;
};

export const getFontCSS = (font: string) => {
  return `font-family: ${font}, ${getFontFallback(font)}`;
};

export const getFontStyle = (font: string) => {
  return `body { font-family: '${font}' !important; }`;
};

export const getFontOptions = (selectedGroup: string, selectedFont: string) => {
  const filteredFonts = selectedGroup ?
      ALL_FONTS.filter(font => font.type === selectedGroup) : ALL_FONTS;
  return [
    '<option value="">-- Select Font --</option>',
    ...filteredFonts.map(font => (
        `<option ${font.name === selectedFont ? "selected" : ''}>${font.name}</option>`
    ))
  ];
};

export const getGroupOptions = (selectedGroup: string) => {
  return [
    '<option value="">All Groups</option>',
    ...ALL_GROUPS.map(group => `<option ${group === selectedGroup ? "selected" : ''}>${group}</option>`).join('')
  ];
};
