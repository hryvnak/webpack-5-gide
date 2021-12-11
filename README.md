#Webpack 5

##Начальная установка

1. Создали папку и перешли в неё.

2. Инициализируем проект.
`npm init -y`

3. Устанавливаем **webpack** и **webpack-cli** локально
`npm install webpack webpack-cli --save-dev`

4. Cоздаем в корне проекта папку **src**, где будет лежать js-файл/ы

5. Создаем в корне проекта конфигурационный файл **webpack.config.js**:

`const path = require('path');`

`module.exports = {`
	`entry: './src/index.js',`
	`output: {`
		`path: path.resolve(__dirname, './dist'),`
		`filename: 'index_bundle.js',`
	`},`
	`mode: 'development',`
`};`

---
## Подготовка package.json 

`{`
	`"name": "1",`
	`"version": "1.0.0",`
	`"description": "",`
-	`"main": "index.js",`
+	`"private": true,`
	`"scripts": {`
-		` "test": "echo \"Error: no test specified\" && exit 1",`
+		`"watch": "webpack --watch",`
+		`"build": "webpack",`
	`},`
	`"keywords": [],`
	`"author": "",`
	`"license": "ISC",`
	`"devDependencies": {`
		`"webpack": "^5.65.0",`
		`"webpack-cli": "^4.9.1",`
	`}`
`}`

---
##Установка плагина HtmlWebpackPlugin

 *(генерирует **index.html**, который будет содержать ссылку на "собранный" скрипт).*

`npm install --save-dev html-webpack-plugin`


**webpack.config.js**
+ `const HtmlWebpackPlugin = require('html-webpack-plugin');`
`const path = require('path');`

`module.exports = {`
	`entry: './src/index.js',`
	`output: {`
		`path: path.resolve(__dirname, './dist'),`
		`filename: 'index_bundle.js',`
	`},`
+	`plugins: [new HtmlWebpackPlugin()],`
`mode: 'development',`
`};`

---
##Установка сервера webpack-dev-server

`npm install --save-dev webpack-dev-server`

**webpack.config.js**
`const HtmlWebpackPlugin = require('html-webpack-plugin');`
`const path = require('path');`

`module.exports = {`
	`entry: './src/index.js',`
	`output: {`
		`path: path.resolve(__dirname, './dist'),`
		`filename: 'index_bundle.js',`
	`},`
	`plugins: [new HtmlWebpackPlugin()],`
	`mode: 'development',`
+	`devServer: {`
+ 		`static: './dist',`
+ 	`},`
`};`

**package.json**
`"scripts": {`
	`"watch": "webpack --watch",`
	`"build": "webpack",`
+	`"start": "webpack serve --open"`
`},`
"# webpack-gide" 
