<template>
  <div id="app-about">
    <nav>
      <a href="/">Home</a>
      <a href="/about.html">About</a>
    </nav>
    <hr>
    <h1>about</h1>
    <router-link to="/about">about(default)</router-link>
    <router-link to="/about/2">about2</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
body {
  background-color: pink;
}
nav a {
  font-size: 18px;
  font-weight: bold;
  color: #333;
}
a {
  padding: 10px;
}
#app-about {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
