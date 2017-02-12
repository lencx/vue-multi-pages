import Vue from 'vue'
import Router from 'vue-router'
import Hello3 from 'components/Hello3'
import Hello4 from 'components/Hello4'

Vue.use(Router)

const routes = [
  {
    path: '/about',
    name: 'home',
    component: Hello3
  },
  {
    path: '/about/2',
    component: Hello4
  },
  {
    path: '*',
    redirect: '/about'
  }
]

export default new Router({
  mode: 'history',
  routes
})
