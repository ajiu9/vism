这个是一个基于react和antd ui 框架搭建的一个后台管理系统,`create-react-app`脚手架搭建.

## 运行项目

- [npm start](#npm-start)
- [npm run eject](#npm-run-eject)

## 项目结构

项目的文件结构如下

```
vism/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    api
    components
      BaseForm
      ETable
      Footer
      Header
      NavLeft
    config
    pages
      city
      echarts
      form
      home
      login
      map
      noMatch
      order
      permission
      rich
      table
      ui
      user
    redux
      action
      reducer
      store
    resouce // 资源文件夹
    style
    utils
    admin.js
    App.js
    common.js
    index.js
    registerServiceWorker.js
    router.js
```

For the project to build, **these files must exist with exact filenames**:

* `public/index.html` is the page template;
* `src/index.js` is the JavaScript entry point.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](#deployment) for more information.

### `npm run eject`
地址`config/webpack.config.dev.js`

引入less依赖配置， 
```js
{
  test: /\.less$/,
  use: [
    require.resolve('style-loader'),
    {
      loader: require.resolve('css-loader'),
      options: {
        importLoaders: 1,
      },
    },
    {
      loader: require.resolve('postcss-loader'),
      options: {
        // Necessary for external CSS imports to work
        // https://github.com/facebookincubator/create-react-app/issues/2677
        ident: 'postcss',
        plugins: () => [
          require('postcss-flexbugs-fixes'),
          autoprefixer({
            browsers: [
              '>1%',
              'last 4 versions',
              'Firefox ESR',
              'not ie < 9', // React doesn't support IE8 anyway
            ],
            flexbox: 'no-2009',
          }),
        ],
      },
    },
    {
      loader: require.resolve('less-loader'),
      options: {
        modules: false,
        modifyVars: { "@primary-color": "#1890ff" }
      }
    }
  ],
},
```

增加公共命名配置

```js
// add resolve
function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

alias: {
  // Support React Native Web
  // https://www.smashingmagazine.com/2016/08/a-glimpse-into-the-future-with-react-native-for-web/
  'react-native': 'react-native-web',
  'components': resolve('src/components'),
  'axios': resolve('src/axios'),
  'pages': resolve('src/pages'),
  'style': resolve('src/style'),
  'utils': resolve('src/utils'),
  'config': resolve('src/config')
},
```

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

### Visual Studio Code

You would need to have the latest version of [VS Code](https://code.visualstudio.com) and VS Code [Chrome Debugger Extension](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome) installed.

Then add the block below to your `launch.json` file and put it inside the `.vscode` folder in your app’s root directory.

```json
{
  "version": "0.2.0",
  "configurations": [{
    "name": "Chrome",
    "type": "chrome",
    "request": "launch",
    "url": "http://localhost:3000",
    "webRoot": "${workspaceRoot}/src",
    "sourceMapPathOverrides": {
      "webpack:///src/*": "${webRoot}/*"
    }
  }]
}
```

## Adding a Router

Create React App doesn't prescribe a specific routing solution, but [React Router](https://reacttraining.com/react-router/) is the most popular one.

To add it, run:

```sh
npm install --save react-router-dom
```

Alternatively you may use `yarn`:

```sh
yarn add react-router-dom
```

To try it, delete all the code in `src/App.js` and replace it with any of the examples on its website. The [Basic Example](https://reacttraining.com/react-router/web/example/basic) is a good place to get started.

Note that [you may need to configure your production server to support client-side routing](#serving-apps-with-client-side-routing) before deploying your app.
