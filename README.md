# Webpack 5

## Створення проекту

1. Створюємо папку и переходимо в неї.
2. Ініціалізуємо проєкт.

```
npm init -y
```

3. Створюємо в корені проєкта папку **src**, де будуть лежати js-файл/и.
4. Створюємо в папці **src** файл **index.js** і **index.html**.

## Початкове налаштування webpack

1. Встановлюємо **webpack** і **webpack-cli** локально.

```
npm install webpack webpack-cli --save-dev
```

2. Створюємо в корені проєкта конфігураційний файл **webpack.config.js**:

```
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index_bundle.js',
    clean: true, // очищуємо папку /dist перед кожною зборкою, щоб генерувались тільки файлы, що використовуються
  },
  mode: 'development',
};
```

## Підготовка package.json 

```
{
  ...
  // Видаляємо "main": "index.js",
  "private": true,
  "scripts": {
    // Видаляємо "test": "echo \"Error: no test specified\" && exit 1",
    "watch": "webpack --watch",
    "build": "webpack",
  },
  ...
}
```

## Установка babel-loader

```
npm install -D babel-loader @babel/core @babel/preset-env
```

**webpack.config.js**

```
module.exports = {
  ...
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: "defaults" }]
            ]
          }
        }
      }
    ]
  }
};
```

## Установка плагіна HtmlWebpackPlugin

 *(генерує **index.html**, який буде містити посилання на "зібраний" скрипт).*

```
npm install --save-dev html-webpack-plugin
```

**webpack.config.js**
```
const HtmlWebpackPlugin = require('html-webpack-plugin');
...

module.exports = {
  ...
  plugins: [new HtmlWebpackPlugin(
    {
      // https://github.com/jantimon/html-webpack-plugin#options
      hash: true, // додаємо унікальний хеш компіляції веб-пакета до всіх включених сценаріїв і файлів CSS. Це корисно для очищення кешу
      template: './src/index.html', // відносний чи абсолютний шлях webpack к шаблону
    }
  )],
};
```

## Установка сервера webpack-dev-server

`npm install --save-dev webpack-dev-server`

**webpack.config.js**

```
module.exports = {
  ...
  devServer: {
    static: './dist',
  },
};
```

**package.json**
```
"scripts": {
  ...
  "start": "webpack serve --open"
},
```

## Установка eslint-webpack-plugin

```
npm install eslint --save-dev
```
```
npm install eslint-webpack-plugin --save-dev
```
```
npx eslint --init
```

**webpack.config.js**
```
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  // ...
  plugins: [new ESLintPlugin()],
  // ...
};
```

## Установка less-loader

Встановлюємо **style-loader**:

```
npm install --save-dev style-loader
```

Встановлюємо **css-loader**:

```
npm install --save-dev css-loader
```

Встановлюємо **less** і **less-loader**:

```
npm install less less-loader --save-dev
```

**webpack.config.js**
```
module.exports = {
  // ...
  module: {
    rules: [
      {
        test: /\.less$/i,
        use: [
          // compiles Less to CSS
          "style-loader",
          "css-loader",
          "less-loader",
        ],
      },
    ],
  },
}
```


В **index.js** імпортуємо стилі:

```
import "./less/style.less";
```

І виконуємо команду ```npm run build```

## Установка html-loader
https://webpack.js.org/loaders/html-loader/#sources
Я використовувала, щоб картинки зявилися в папці dist
```
npm install --save-dev html-loader
```

**webpack.config.js**

```
module.exports = {
  // ...
  module: {
    rules: [
      // ...
      {
        test: /\.html$/i,
        loader: "html-loader",
      }
    ]
  }
}

