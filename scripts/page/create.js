const fs = require('fs');
const path = require('path');
const pages = JSON.parse(fs.readFileSync('pages.json').toString());
const pageName = process.argv[2];
if (!pageName) {
    console.log('Укажите имя страницы');
    return;
}
const pageDir = path.join('src', 'pages', pageName);
if (fs.existsSync(pageDir)) {
    console.log(`Страница ${pageName} уже существует`);
    return;
}
const pageTitle = process.argv[3];
if (!pageTitle) {
    console.log('Укажите заголовок страницы');
    return;
}
const pageData = {
    name: pageName,
    title: pageTitle,
};
pages.push(pageData);
fs.writeFileSync('pages.json', JSON.stringify(pages, null, 2));
fs.mkdirSync(pageDir);
fs.mkdirSync(path.join(pageDir, 'images'));
const pagePugTemplate = fs.readFileSync(path.join('scripts', 'page', 'templates', 'page.pugtpl')).toString();
fs.writeFileSync(path.join(pageDir, `${pageName}.pug`), eval('`' + pagePugTemplate + '`'));
const pageJsTemplate = fs.readFileSync(path.join('scripts', 'page', 'templates', 'page.jstpl')).toString();
fs.writeFileSync(path.join(pageDir, `${pageName}.js`), eval('`' + pageJsTemplate  + '`'));
fs.writeFileSync(path.join(pageDir, `animations.js`), '');
fs.writeFileSync(path.join(pageDir, `${pageName}.scss`), `.${pageName} {\n    \n}`);

const commonCssFilePath = path.join('src', 'common', 'scss', 'common.scss');
let commonCssContent = fs.readFileSync(commonCssFilePath).toString();
commonCssContent += `@import '../../pages/${pageName}/${pageName}';\n`;
fs.writeFileSync(commonCssFilePath, commonCssContent);

const commonJsFilePath = path.join('src', 'common', 'js', 'views.js');
let commonJsFileContent = fs.readFileSync(commonJsFilePath).toString();
commonJsFileContent += `import '../../pages/${pageName}/${pageName}';\n`;
fs.writeFileSync(commonJsFilePath, commonJsFileContent);

console.log(`Страница ${pageName} создана`);