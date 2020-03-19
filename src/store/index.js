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
    // getters:{
    //     info: state => state.role.info,
    // },
    modules: {        
        role
    }
})

export default store;