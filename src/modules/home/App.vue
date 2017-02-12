<template lang="pug">
#app-home
  nav
    a(href='/') Home
    a(href='/about.html') About
  hr
  h1 Home
  router-link(to='/') home(default)
  router-link(to='/home/2') home2
  br
  img(src="../../assets/logo.png")
  router-view
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
#app-home {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  img {
    width: 80px;
    height: 80px;
  }
  a {
    margin: 20px;
    padding: 5px;
    &:hover {
      background-color: #eee;
      border-radius: 5px;
    }
  }
  nav {
    a {
      font-size: 18px;
      font-weight: bold;
      color: #111;
    }
  }
}
</style>
