<template>
    <div class="index">
        <h2>你好,{{token}}</h2>
        <p class="text">
            尊敬的
            <span>{{memberInfo}}用户</span>，欢迎来到vue学习中心！
        </p>
         <!-- <img :src="require('../assets/logo.png')" alt="">  -->
        <div>
             <card
                :course="item"
                @goVideoList="goVideoList"
                v-for="(item, index) in coursList"
                :key="index"
            ></card>
        </div>
        <button class="footer-opt" @click="recharge">充值</button>
    </div>
</template>
<script>
import store from "../store";
import {mapState, mapGetters } from "vuex";
import card from "../components/card"
export default {
    components: {
        card
    },
    data(){
        return{
            coursList:[]
        }
    },
    created(){
        this.coursList=[
            {
                id: "1",
                thumb:
                   require('../assets/img.png'),
                title: "学习vuex",
                description: "这是最基础的学习，为免费",
                charge: "",
                userStatus: 0,
                vipLevel: 0
            },
            {
                id: "2",
                thumb:
                     require('../assets/img.png'),
                title: "实战课程",
                description: "2312",
                charge: "实战课程",
                userStatus: 1,
                vipLevel: 0
            },
            {
                id: "3",
                thumb:
                     require('../assets/img.png'),
                title: "VIP3课程",
                description: "这是进阶课程",
                charge: "VIP3课程",
                userStatus: 2,
                vipLevel: 3
            },
            {
                id: "4",
                thumb:
                     require('../assets/img.png'),
                title: "VIP12课程",
                description: "这是高级课程，需要有很强的基础能力才可以进行学习",
                charge: "VIP12课程",
                userStatus: 2,
                vipLevel:12
            }
        ]
    },
     computed:{
        ...mapState(["token"]),
        ...mapGetters(["memberInfo"])
     },
     
     methods:{
         goVideoList(e){
             var gocurse=this.cango(e);
             if(gocurse){
                 this.$router.push({
                    name: "course",
                    params: {
                        id: e.id
                    }
                });
             }else{
                 alert("等级不足不能观看！")
             }
         },
         cango(e){                
            var status=this.$store.getters.infoStatus;
            var level=this.$store.getters.infoLevel;         
             if(status>=e.userStatus && level>=e.vipLevel){
                 return true;
             }else{
                 return false;
             }

         },
         recharge(){
             this.$router.push("./userConter");
         }
     }
}
</script>
<style lang="scss">
.index{
    margin:0 auto;
    width:90%;
    box-sizing: border-box;
    padding:20px 0;
    text-align: left;
    .text span{
        color:red;
    }
    .footer-opt{
        width: 90%;
        height: auto;
        color: #fff;
        background: #373737;
        margin: 0 auto;
        padding: 15px;
        box-sizing: border-box;
        border-radius: 5px;
        font-size: 16px;
    }
}
</style>