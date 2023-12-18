// const fs = require('fs');
import fs from 'node:fs';

fetch('https://fonts.google.com/metadata/fonts').then(raw => raw.json()).then(data => {
  const formattedData = data.familyMetadataList.map(font => {
    return {name: font.family, type: font.category, weights: Object.keys(font.fonts)};
  });

  fs.writeFile('lib/font-list.json', JSON.stringify(formattedData), () => {
    console.log('done');
  });
});
