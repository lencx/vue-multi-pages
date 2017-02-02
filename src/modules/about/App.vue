<template>
  <div id="about">
    <h1>Vue Multi Pages</h1>
    <hello></hello>
  </div>
</template>

<script>
import Hello from '../../components/Hello'

export default {
  name: 'about',
  components: {
    Hello
  }
}
</script>

<style>
body {
  background-color: pink;
}
#about {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
li>a {
  padding: 3px 5px;
  color: #f00 !important;
  font-weight: bold;
}
li>a:hover {
  background-color: #fff;
  text-decoration: none;
  border-radius: 5px;
}
</style>

<style scoped>
/*
使用scoped属性不会覆盖组件中的样式，只对本文件中的元素起作用
*/
h1 {
  color: green;
}
</style>
