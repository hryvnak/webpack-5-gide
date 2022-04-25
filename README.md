# Webpack 5

## Создание проекта

1. Создаём папку и переходим в неё.
2. Инициализируем проект.

```
npm init -y
```

3. Cоздаем в корне проекта папку **src**, где будет лежать js-файл/ы.
4. Создаём в папке **src** файл **index.js** и **index.html**.

## Первоначальная настройка webpack

1. Устанавливаем **webpack** и **webpack-cli** локально.

```
npm install webpack webpack-cli --save-dev
```

2. Создаем в корне проекта конфигурационный файл **webpack.config.js**:

```
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index_bundle.js',
    clean: true, // очищаем папку /dist перед каждой сборкой, чтобы генерировались только используемые файлы
  },
  mode: 'development',
};
```

## Подготовка package.json 

```
{
  ...
  // Удаляем "main": "index.js",
  "private": true,
  "scripts": {
    // Удаляем "test": "echo \"Error: no test specified\" && exit 1",
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

## Установка плагина HtmlWebpackPlugin

 *(генерирует **index.html**, который будет содержать ссылку на "собранный" скрипт).*

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
      hash: true, // добавляем уникальный хэш компиляции веб-пакета ко всем включенным сценариям и файлам CSS. Это полезно для очистки кеша
      template: './src/index.html', // относительный или абсолютный путь webpack к шаблону
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

