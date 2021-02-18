import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import User from '../views/User.vue'
import Editar from '../components/EditarCadastro'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/my-profile',
    name: 'profile',
    component: User

    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/User.vue')
  },
  {
    path: '/editar-user',
    name: 'EditarCadastro',
    component: Editar
  }
]

const router = new VueRouter({
  routes
})

export default router
