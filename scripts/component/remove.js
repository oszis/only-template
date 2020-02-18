const fs = require('fs');
const path = require('path');
const rimraf = require('rimraf');
String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
};
String.prototype.fromKebabToCamel = function() {
    return this.replace(/-([a-z0-9])/g, function (g) { return g[1].toUpperCase(); })
};
let components = JSON.parse(fs.readFileSync('src/components/components.json').toString());
const componentName = process.argv[2];
if (!componentName) {
    console.log('Укажите имя компонента');
    return;
}
const componentDir = path.join('src', 'components', componentName);
if (!fs.existsSync(componentDir)) {
    console.log(`Компонента ${componentName} не существует`);
    return;
}
components = components.filter(componentData => componentData.name !== componentName);
fs.writeFileSync('src/components/components.json', JSON.stringify(components, null, 2));
rimraf.sync(componentDir);

const commonScssFilePath = path.join('src', 'common', 'scss', 'common.scss');
let commonScssContent = fs.readFileSync(commonScssFilePath).toString();
commonScssContent = commonScssContent.replace(`@import '../../components/${componentName}/${componentName}';\n`, '');
fs.writeFileSync(commonScssFilePath, commonScssContent);

console.log(`Компонент ${componentName} удален`);
