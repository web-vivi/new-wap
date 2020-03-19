// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import App from './App'
import Vuex from "vuex"
import router from './router'
import store from './store'
import VueRouter from 'vue-router'
// import state from './store/state'

Vue.config.productionTip = false

Vue.prototype.$store = store;   //store挂载
router.beforeEach((to, from, next) => {
  
  //localStorage.clear();
  if(store.state.userInfo){
    if(to.path ==="/login"){
      next({path:"/"});
    }else{
      next();
    }    
  }else if(to.path ==="/login"){
    next()
  }else{
    next({
      path:'/login'
    })    
  }
  
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})