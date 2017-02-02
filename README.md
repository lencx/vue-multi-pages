# vue-multi-pages

> Vue Multi Pages init


```bash
proj
|- build
|- config
|- dist # build file
|- node_modules
|- src
|   |- assets
|   |- compontents
|   |- modules # multi pages
|   |     |- about
|   |     |    |- App.vue
|   |     |    |- about.html
|   |     |    |- about.js # entry file
|   |     |    `- ...
|   |     |- home
|   |     |    |- App.vue
|   |     |    |- index.html # default load the page
|   |     |    |- index.js # entry file
|   |     |    `- ...
|   |     `- ...
|   `- ...
|- package.json
|- yarn.lock
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
```

## Add page module

> 添加新的页面模块只需在`./src/modules`中新建一个文件夹，可参考`./src/modules`目录下`home`与`about`

## TODO

> **scss -> css（样式预处理, 其他预处理类似）**

```bash
yarn add node-sass sass-loader --dev
```

> **pug -> html（模板, 其他模板类似）**

```bash
yarn add pug --dev
```

> **Usage（在 `*.vue` 文件中的用法）**

```vue
<style lang="scss">

...

body{
    background: green;
    li {
        list-style: none;
    }
    a {
        color: #333;
    }
}

...

</style>
```

```vue
<template lang="pug">
body
    .container

        ...

    h1
        a(href="/..") Hello Vue

    ...

</template>
```

**注：** 可根据自己的需求进行扩展。