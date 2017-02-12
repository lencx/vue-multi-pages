# vue-multi-pages

> Vue Multi Pages(vue@2 && webpack@2)

```bash
# []: Directory
[proj]
|- [build]
|- [config]
|- [public]
|     |- [dist] # build file
|     `- ...
|- [node_modules]
|- [src]
|   |- [assets]
|   |- [compontents]
|   |- [modules] # multi pages
|   |     |- [about]
|   |     |    |- App.vue
|   |     |    |- about.html
|   |     |    |- about.js # entry file
|   |     |    `- ...
|   |     |- [home]
|   |     |    |- App.vue
|   |     |    |- index.html # default load the page
|   |     |    |- index.js # entry file
|   |     |    `- ...
|   |     `- ...
|   |- [router]
|   `- ...
|- package.json
|- yarn.lock
|- README.md
`- ...

```

## Build Setup

``` bash
# install dependencies
# npm install
yarn

# serve with hot reload at localhost:8080
# npm run dev
yarn dev

# build for production with minification
# npm run build
yarn build

# eslint => .js, .vue src
yarn lint

# build for production and view the bundle analyzer report
npm run build --report
```

## Add page module

> 添加新的页面模块只需在`./src/modules`中新建一个文件夹，可参考`./src/modules`目录下`home`与`about`；
> 添加新页面的路由只需在`./src/router`中新建一个文件即可。

## Install Plugins

```bash
# scss -> css
yarn add node-sass sass-loader --dev

# pug -> html
yarn add pug --dev
```

## Usage (*.vue file)

```vue
<template lang="pug">
body
    .container
        h1
            a(href="/..") Hello Vue

        ...
</template>

<style lang="scss">
body{
    background: green;
    li {
        list-style: none;
        a {
            color: #333;
        }
    }
}
...
</style>
```

## TODO

- Request data from a server
- vuex
- ...