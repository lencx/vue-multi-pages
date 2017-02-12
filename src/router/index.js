import Vue from 'vue'
import Router from 'vue-router'
import Hello from 'components/Hello'
import Hello2 from 'components/Hello2'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Hello
  },
  {
    path: '/home/2',
    component: Hello2
  }
]

export default new Router({
  mode: 'history',
  routes
})
