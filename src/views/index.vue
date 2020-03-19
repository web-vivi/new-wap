<template>
    
</template>
<script>
import store from "../store";
import {mapState, mapGetters } from "vuex";
export default {
     computed:{
         ...mapState(["token"])
     }
}
</script>