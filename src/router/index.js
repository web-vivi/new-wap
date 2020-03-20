import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import Index from '@/views/index'
import userConter from '@/views/userConter'
import course from '@/views/course'
//import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  mode: "history",
  base: "/",
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/userConter',
      name: 'userConter',
      component: userConter
    },
    {
        path: "/course/:id",
        name: "course",
        component:course
    }
  ]
})
