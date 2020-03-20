import Vue from "vue"

import Vuex from "vuex"
import role from "./role"
// import mutations from "./mutation"

Vue.use(Vuex);

const store=new Vuex.Store({
    // state,
    // mutations
    state:{
        token:sessionStorage.getItem("username")
    },
    mutations:{
        setToken(state,token){
            state.token=token;
        }
    },
    getters:{
        token: state => state.token
    },
    modules: {        
        role
    }
})

export default store;