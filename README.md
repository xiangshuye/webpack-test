# vue 开发模板

---

`vue` 开发模板 此模板使用 `iview` 依照情况可以改用 `element-ui`，参照 `element-ui` 官网配置

`build` 文件夹为开发、编译文件夹，包含所有 `webpack` 所有配置

`public` 为不需要编译的资源文件夹，放到 `static` 文件夹下，使用时用绝对路径，`eg: /static/image/163-1.png`

`src` 为源码文件夹，所有代码写道此文件夹下，可以按照现有文件结构，或者自己修改

`.babelrc` 为 `babel` 配置文件

`.editorconfig` 为 编辑器配置文件

`.eslintrc.js` 为 `eslint` 配置文件

`.gitignore` 为 `git` 版本控制工具，所有不需要上传到服务器的文件或文件夹都写到此文件内

`package.json` 为模块描述文件，管理包名，依赖包等

`package-lock.json` 为依赖包版本锁定文件，禁止修改

`postcss.config.js` 为 `css` 样式兼容文件，添加浏览器兼容前缀

`README.MD` 本模块包描述文件等

---

 克隆

```bash
git clone git@192.1.6.46:xl07097/webpack-test.git
```

安装依赖包

```bash
npm install
```

开发运行

```bash
npm run dev
```

打包发布

```bash
npm run build
```

`.npmrc（c盘用户文件夹下，若没有，使用npm config set registry "https://registry.npm.taobao.org 命令，会自动生成"）` 配置项，此配置可以直接使用 `npm` 下载 `node_sass、phantomjs、SQLITE3、electron` 等编译包，不用再使用 `cnpm` 代替

```text
cache=D:\Program Files\nodejs\node_cache
prefix=D:\Program Files\nodejs\node_global
proxy=null
//registry.npmjs.org/:_authToken=be826149-dfed-4e04-9df6-f507ab2ee08b
registry=https://registry.npm.taobao.org/
phantomjs_cdnurl=http://cnpmjs.org/downloads
sass_binary_site=https://npm.taobao.org/mirrors/node-sass/
disturl=https://npm.taobao.org/dist
puppeteer_download_host=https://npm.taobao.org/mirrors
ELECTRON_MIRROR=http://npm.taobao.org/mirrors/electron/
SQLITE3_BINARY_SITE=http://npm.taobao.org/mirrors/sqlite3
```
