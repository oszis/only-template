const fs = require('fs');
const path = require('path');
const fontsFolder = path.join('src', 'fonts');
let content = '';
fs.readdirSync(fontsFolder).forEach(familyName => {
    const fonts = [];
    const familyFolder = path.join(fontsFolder, familyName);
    if (!fs.statSync(familyFolder).isDirectory()) {
        return;
    }
    fs.readdirSync(familyFolder).forEach(fontNameFile => {
        const fontName = fontNameFile.match(/(.*)\..*?/)[1];
        if (fonts.indexOf(fontName) === -1) {
            fonts.push(fontName);
        }
    });
    fonts.forEach(fontName => {
        content += `@font-face {
    font-family: '${fontName}';
    src: url('../../fonts/${familyName}/${fontName}.woff2') format('woff2'),
    url('../../fonts/${familyName}/${fontName}.woff') format('woff'),
    url('../../fonts/${familyName}/${fontName}.ttf') format('truetype');
    font-style: normal;
    font-weight: normal;
    font-display: swap;
}\n`;
    });
});
fs.writeFileSync('src/common/scss/fonts.scss', content);
