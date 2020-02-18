const fs = require('fs');
const path = require('path');
String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
};
String.prototype.fromKebabToCamel = function() {
    return this.replace(/-([a-z0-9])/g, function (g) { return g[1].toUpperCase(); })
};
const components = JSON.parse(fs.readFileSync('src/components/components.json').toString());
const componentName = process.argv[2];
if (!componentName) {
    console.log('Укажите имя компонента');
    return;
}
const componentDir = path.join('src', 'components', componentName);
if (fs.existsSync(componentDir)) {
    console.log(`Компонент ${componentName} уже существует`);
    return;
}
const componentData = {
  name: componentName,
};
components.push(componentData);
fs.writeFileSync('src/components/components.json', JSON.stringify(components, null, 2));
fs.mkdirSync(componentDir);
fs.mkdirSync(path.join(componentDir, 'images'));
fs.writeFileSync(path.join(componentDir, `${componentName}.pug`), `mixin ${componentName}(args)\n    .${componentName}&attributes(attributes)\n        `);
const componentClassName = componentName.fromKebabToCamel().capitalize();
const componentTemplate = fs.readFileSync(path.join('scripts', 'component', 'templates', 'component.jstpl')).toString();
fs.writeFileSync(
    path.join(componentDir, `${componentName}.js`),
    eval('`' + componentTemplate + '`')
);
fs.writeFileSync(path.join(componentDir, `${componentName}.scss`), `.${componentName} {\n    $root: &;    \n}`);

const commonScssFilePath = path.join('src', 'common', 'scss', 'common.scss');
let commonScssContent = fs.readFileSync(commonScssFilePath).toString();
commonScssContent += `@import '../../components/${componentName}/${componentName}';\n`;
fs.writeFileSync(commonScssFilePath, commonScssContent);

console.log(`Компонент ${componentName} создан`);
