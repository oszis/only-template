# Установка
Клонируем репозиторий. После клонирования, необходимо запустить установку npm-пакетов:

```bash
npm install
```

# Автоматизация задач

* `dev` — запуск конфига для разработки.
* `build` — сборка всех файлов в папку `/build`.
* `watch` — запускает слежение за файлами, так что при изменении они автоматически пересобираются.
* `page:create` — создание новой страницы.
* `page:remove` — удаление существующей страницы.
* `component:create` — создание нового компонента.
* `component:remove` — удаление существующего компонента.
* `fonts:refresh` — автоматическое подключение шрифтов из папки `src/fonts` в файл `src/common/scss/fonts.scss`.
* `lintfix` — автоисправление js-файла с помощью линтера.

# Структура папок и файлов

```text
only-template
├── scripts
│   ├── components
│   │   ├── templates
│   │   │   └── component.jstpl
│   │   ├── create.js
│   │   └── remove.js
│   ├── page
│   │   ├── templates
│   │   │   ├── page.jstpl
│   │   │   └── page.pugtpl
│   │   ├── create.js
│   │   └── remove.js
│   └── refresh-fonts.js
├── src
│   ├── common
│   │   ├── css
│   │   │   └── common.css
│   │   ├── icons
│   │   │   └── .keep
│   │   ├── images
│   │   │   └── .keep
│   │   ├── js
│   │   │   ├── common.js
│   │   │   ├── variables.js
│   │   └── pug
│   │   │   ├── helpers.pug
│   │   │   └── mixins.pug
│   │   └── scss
│   │   │   ├── colors.scss
│   │   │   ├── common.scss
│   │   │   ├── custom.scss
│   │   │   ├── fonts.scss
│   │   │   ├── functions.scss
│   │   │   ├── typography.scss
│   │   │   ├── utils.scss
│   │   │   └── variables.scss
│   ├── components
│   │   ├── components.json
│   │   └── component-name
│   │   │   ├── animations.js
│   │   │   ├── component-name.js
│   │   │   ├── component-name.pug
│   │   │   └── component-name.scss
│   ├── data
│   │   └── dataName.json
│   ├── fonts
│   │   └── fonts-name
│   │   │   ├── fonts-name.ttf
│   │   │   ├── fonts-name.woff
│   │   │   └── fonts-name.woff2
│   ├── layout
│   │   ├── layout.pug
│   │   └── layout.scss
│   ├── pages
│   │   └── page-name
│   │   │   ├── images
│   │   │   │   └── .keep
│   │   │   ├── animations.js
│   │   │   ├── page-name.js
│   │   │   ├── page-name.pug
│   │   │   └── page-name.scss
│   └── vendor
│   │   └── .keep
├── .babelrc
├── .eslintrc.json
├── .gitignore
├── package.json
├── pages.json
├── postcss.config.js
└── webpack.config.js
```

## `scripts`
В папке `scripts` хранятся скрипты для автоматизации некоторых задач (`создание/удаление страниц и компонентов, подключение шрифтов`)

---

## `src`
В папке `src` хранятся исходные файлы проекта.

---

## `src/common/css`
Папка `src/common/css` предназначена для хранения стилей на чистом css.

---

## `src/common/css/common.css`
Файл `src/common/css/common.css` предназначен для хранения основных стилей сайта на чистом css.

При сборке данный файл сохраняется в `build/css/common[hash:8].css`

---

## `src/common/icons`
Папка `src/common/icons` предназначена для хранения векторных иконок.

При сборке файлы из данной папки объединяются в один спрайт.

---

## `src/common/images`
Папка `src/common/images` предназначена для хранения изображений.

При сборке файлы из данной папки попадают в `build/images`.

---

## `src/common/js`
Папка `src/common/js` предназначена для хранения скриптов.

---

## `src/common/js/common.js`
Файл `src/common/js/common.js` предназначен для хранения основной логики сайта.

При сборке данный файл попадает в `build/js/vendors[hash:8].js`.

---

## `src/common/pug`
Папка `src/common/pug` предназначена для хранения шаблонов.

---

## `src/common/pug/helpers.pug`
Файл `src/common/pug/helpers.pug` предназначен для хранения готовых функций-помощников..

---

## `src/common/pug/mixins.pug`
Файл `src/common/pug/mixins.pug` предназначен для хранения Pug-миксин.

---

## `src/common/scss`
Папка `src/common/scss` предназначена для хранения стилей.

---

## `src/common/scss/colors.scss`
Файл `src/common/scss/colors.scss` предназначен для хранения всех цветов проекта.

---

## `src/common/scss/common.scss`
Файл `src/common/scss/common.scss` предназначен для подключения основных стилей сайта, стилей компонентов и страниц.

При сборке данный файл преобразуется в CSS и сохраняется в `build/css/common[hash:8].css`.

---

## `src/common/scss/custom.scss`
Файл `src/common/scss/custom.scss` предназначен для подключения стилей сторонней библиотеки `Bootstrap`.

---

## `src/common/scss/fonts.scss`
Файл `src/common/scss/fonts.scss` предназначен для подключения шрифтов.

---

## `src/common/scss/functions.scss`
Файл `src/common/scss/functions.scss` предназначен для хранения SCSS-функций.

---

## `src/common/scss/typography.scss`
Файл `src/common/scss/typography.scss` предназначен для хранения текстовых SCSS-миксин и классов.

---

## `src/common/scss/utils.scss`
Файл `src/common/scss/utils.scss` предназначен для хранения поведенческих SCSS-миксин и классов.

---

## `src/common/scss/variables.scss`
Файл `src/common/scss/variables.scss` предназначен для хранения SCSS-переменных.

---

## `src/components`
В папке `src/components/${componentName}` хранятся переиспользуемые изолированные шаблоны компонентов для дальнейшего их подключения на страницах проекта.

`src/components/${componentName}/images` — изображения для компонента.

`src/components/${componentName}/animations.js` — анимации компонента.

`src/components/${componentName}/${componentName}.js` — скрипты компонента.

`src/components/${componentName}/${componentName}.pug` — pug-шаблон компонента.

`src/components/${componentName}/${componentName}.scss` — стили компонента.

---

## `src/data`
Папка `src/data` преднзначена для хранения json-файлов, которые содержат текстовый контент для компонентов. Полезно для сокращения строк кода в pug-шаблонах.

---

## `src/fonts`
Папка `src/fonts` предназначена для хранения шрифтов.

При сборке файлы из данной папки попадают в `build/fonts`.

---

## `src/layout`
Папка `src/layout` предназначена для хранения базового шаблона.

Файл `src/layout/layout.scss` автоматически подключен в файле `src/common/css/common.css`

Файл `src/layout/layout.pug` автоматически подключен в начале шаблона страницы, сгенерируемой с помощью готовой команды `page:create`

---

## `src/pages`
В папке `src/pages/${pageName}` хранятся шаблоны страниц проекта

`src/pages/${pageName}/images` — изображения для страницы.

`src/pages/${pageName}/animations.js` — анимации страницы.

`src/pages/${pageName}/${pageName}.js` — скрипты страницы.

`src/pages/${pageName}/${pageName}.pug` — pug-шаблон страницы.

`src/pages/${pageName}/${pageName}.scss` — стили страницы.

При сборке все Pug-файлы из папки `src/pages/${pageName}` преобразуются в HTML и сохраняются в `build/html`.

---

## `src/vendor`
Папка `src/vendor` предназначена для хранения сторонних библиотек, которых нет в репозитории npm.

---

## `.babelrc`
`.babelrc` — файл настроек JavaScript-транспайлера Babel.

---

## `.eslintrc`
`.eslintrc` — файл настроек ESLint.

---

## `.gitignore`
`.gitignore` — файл настроек Git для игнорирования файлов.

---

## `package.json`
`package.json` — файл, содержащий базовую информацию о проекте, список требуемых библиотек и автоматизированные задачи

---

## `webpack.config.js`
`webpack.config.js` — файл настроек webpack.


---
# Подключение сторонних библиотек

Библиотеки подключаются с помощью npm.
При установке следует указывать ключ `--save` / `-P` или `--save-dev` / `-D`.

Пример:

```bash
npm i --save bootstrap
npm i --save-dev webpack
```

`--save` указывается для библиотек, код которых попадает в итоговую сборку (папку `build`) и будет использоваться на сайте.

`--save-dev` указывается для библиотек, которые используются только для сборки.

После установки необходимо подключить нужные файлы библиотеки:

* скрипты — в `src/components/${componentName}/${componentName}.js` или `src/pages/${pageName}/${pageName}.js`.
* стили — в `src/common/scss/common.scss`.

Полный пример, описывающий установку библиотеки swiper:

1. Установка:

   ```bash
   npm i swiper -P
   ```

2. Подключение скриптов в файл `src/components/${componentName}/${componentName}.js`:

   ```js
   import Swiper from 'swiper/dist/js/swiper.min';
   ```

3. Подключение стилей в файл `src/common/scss/common.scss`:

   ```scss
   @import '~swiper/dist/css/swiper.min';
   ```

Если библиотека отсутствует в npm, либо её нужно модифицировать, то файлы следует скачать и закинуть в папку `src/vendor`.


---

# Работа с изображениями

Изображения следует хранить в папках `src/common/images`, `src/components/${componentName}/images` или `src/pages/${pageName}/images`.

В сборке содержится Pug-миксин для подключения изображений.<br>
   `src/common/pug/mixins.pug`:

   ```jade
   mixin img(args)
    img(
        src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
    )(data-src=args.path)&attributes(attributes)
   ```

Подключение изображения в Pug:

   ```jade
   div
       +img({path: './images/image.jpg'})
   ```

При сборке подключенные файлы из перечисленных папок копируются в `build/images`.

```text
only-template
├── build
│   └── images
└── src
    ├── common
    │   └── images
    │
    ├── components
    │   └── component-name
    │       └── images
    │
    └── pages
        └── page-name
            └── images
```

Оптимизация изображений выполняется автоматически в режимах `dev` и `build` с помощью плагина [Imagemin](https://github.com/Klathmon/imagemin-webpack-plugin).

## Работа с SVG-спрайтами

Принцип работы с SVG-спрайтами:

1. Получаем векторные иконки в формате `.svg` (экспортируем из Figma).
   Сохраняем в папку `src/common/icons`:

   ```text
   only-template
   └── src
       └── common
           └── icons
               └── only.svg
   ```

2. [SVG sprite loader](https://github.com/kisenka/svg-sprite-loader) оптимизирует и объединяет иконки в один спрайт.

   В сборке содержится Pug-миксин для подключения SVG-спрайтов.<br>
   `src/common/pug/mixins.pug`:

   ```jade
    mixin svg(args)
        svg&attributes(attributes)
            use(xlink:href=`#${args.name}`)
   ```

3. Подключаем иконку в Pug:

   ```jade
   div
       +svg({name: 'only'})
   ```

   При необходимости иконку можно стилизовать:

   ```scss
   & > svg {
       width: 15px;
       height: 15px;
       fill: $color-1;
   }
   ```

   Если цвет заливки или обводки не удается изменить с помощью CSS, то необходимо открыть SVG-файл иконки в редакторе и удалить соответствующие атрибуты (`fill`, `stroke`) из кода.

---

# Работа с шаблонизатором Pug

В сборке используется шаблонизатор [Pug](https://pugjs.org/).

Pug предоставляет множество возможностей, упрощающих работу с шаблонами:

* Переменные.
* Циклы.
* Условия.
* Фильтры.
* Наследование шаблонов.
* Миксины.

Шаблоны страниц размещаются в `src/pages/${pageName}`, шаблоны компонентов в `src/components/${componentsName}`, а дополнительные файлы и миксины в `src/common/pug`:

```text
only-template
└── src
    ├── common
    │   └── pug
    │       ├── helpers.pug
    │       └── mixins.pug
    └── pages
        └── page-name
            └──page-name.pug
```

За сборку и преобразование Pug в HTML отвечают плагины `html-loader` и `pug-html-loader`:

После выполнения сборки в папке `build/html` появятся HTML-файлы:

```text
only-template
└── build
    └── html
        └── index.html
```

## Базовый шаблон и создание страниц

В качестве базового шаблона используется `src/layout/layout.pug`.

Пример наследования и использования шаблона:

```jade
extends ../../layout/layout

block content
    // Содержимое страницы
```

* Повторяющиеся участки кода по возможности выносить в отдельные миксины.
* Схожие по структуре страницы выносить в отдельный шаблон и наследоваться от него.

---

# Работа со стилями

В сборке используется препроцессор [SCSS](http://sass-lang.com/) и PostCSS-плагин [Autoprefixer](https://autoprefixer.github.io/ru/).

Основные стили размещаются в папке `src/common/scss`, стили страниц в `src/pages/${pageName}`, стили компонентов в `src/components/${componentsName}`:

```text
only-template
└── src
    ├── common
    │    └── scss
    │        ├── colors.scss
    │        ├── common.scss
    │        ├── custom.scss
    │        ├── fonts.scss
    │        ├── functions.scss
    │        ├── typography.scss
    │        ├── utils.scss
    │        └── variables.scss
    ├── components
    │    └── component-name
    │        └── component-name.scss
    └── pages
        └── page-name
            └── page-name.scss
```

После выполнения сборки в папке `build/css` появится файл `common[hash:8].css`:

```text
only-template
└── build
    └── css
        └── common[hash:8].css
```

## Правила написания кода

### БЭМ

Для именования классов рекомендуется использовать [БЭМ-нотацию](https://ru.bem.info/methodology/naming-convention/).

```scss
.block {
    &__element {
        &--modificator {
            // ...
        }
    }
}
```

### Классы состояний

Классы состояний рекомендуется записывать кратко:

```scss
.is-active {
    // ...
}

.is-current {
    // ...
}

.is-open {
    // ...
}

.is-hidden {
    // ...
}
```

### Переменные

В файл `src/common/scss/variables.scss` следует выносить лишь основные переменные:

В файл `src/common/scss/colors.scss` следует выносить лишь используемые цвета в проекте:

* Пример:

  ```scss
  $color-1: #005741;
  $color-2: #000;
  $color-3: #fff;
  ```

Переменные, используемые лишь в одном блоке или компоненте следует записывать в том же файле, где они используются.

### `@mixin`

В файл `src/common/scss/typography.scss` следует выносить лишь миксины по типографике:

* Пример:

  ```scss
  @mixin font-1 {
    $fhd-base-size: 60px;
    $tablet-base-size: $fhd-base-size * 0.6;
    font-family: Gilroy, sans-serif;
    font-size: calc(#{smooth-value($tablet-base-size / 2, $fhd-base-size / 2, $screen-md-min, $fhd-width, "w")} +
    #{smooth-value($tablet-base-size / 2, $fhd-base-size / 2, $mobile-min-height, $fhd-height, "h")});

    @include media-breakpoint-up(fhd) {
        font-size: $fhd-base-size;
    }
    @include media-breakpoint-down(sm) {
        font-size: 38px;
    }
  }
  ```

Повторяющиеся участки кода (20-30 строк и более), отличающиеся лишь значениями, следует выносить в отдельные миксины.

### Вендорные префиксы

В SCSS-коде не должно присутствовать вендорных префиксов. Они автоматически расставляются в процессе сборки.

**Неправильно:**

```scss
input {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
}
```

**Правильно:**

```scss
input {
    display: flex;
}
```

---

# Работа со скриптами

Основные скрипты размещаются в папке `src/common/js`, скрипты страниц в `src/pages/${pageName}`, скрипты компонентов в `src/components/${componentsName}`:

```text
only-template
└── src
    ├── common
    │   └── js
    │       ├── barbaInit.js
    │       ├── common.js
    │       ├── commonComponents.js
    │       ├── component.js
    │       ├── helpers.js
    │       ├── inner.js
    │       ├── transitions.js
    │       ├── variables.js
    │       └── views.js
    ├── components
    │    └── component-name
    │        └── component-name.js
    └── pages
        └── page-name
            └── page-name.js
```

После выполнения сборки в папке `build/js` появятся файлы `common[hash:8].js` и `vendors[hash:8].js`:

```text
only-template
└── build
    └── js
        ├── common[hash:8].js
        └── vendors[hash:8].js
```

## Правила написания кода

Используем **одиночные** кавычки.

Отступы делать с помощью **4 пробелов**.

Использовать **LF** переводы строк.


### Именование переменных

Имена переменных в `camelCase`

Если переменная содержит элемент DOM, то такая переменная должна начинаться с префикса `n`.

**Неправильно:**

```js
let container = document.querySelector('element');
```

**Правильно:**

```js
let nContainer = document.querySelector('element');
```

## Использование линтера

В сборку интегрирован линтер [ESLint](http://eslint.org/).

Файл настроек — `.eslintrc`.

Данный линтер позволяет поддерживать JS-код в соответствии с заданным регламентом.

---

