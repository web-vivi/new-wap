<template>
    <div class="user-center">
        <h1>用户中心</h1>
        <div class>
            <section class="user-info">
                <label for class="user-info-label">账号</label>
                <span class="user-info-value">{{token}}</span>
            </section>
            <section class="user-info">
                <label for class="user-info-label">身份</label>
                <span class="user-info-value">{{memberInfo}}</span>
            </section>
            <section class="vip-list">
                <ul class="container">
                    <li v-for="(item, index) in vipList" :key="index" :class="item.isbuy ?classgreen : classdack" class="list-item ">
                        <div class="item-name">{{item.name}}</div>
                        <div class="item-content">
                            <span class="item-content__price">
                                {{item.price}}元
                                <span class="item-content__date">/ 30天</span>
                            </span>
                            <button class="item-content__btn" @click="item.isbuy && buy(item,index)">购买</button>
                        </div>
                    </li>
                </ul>
            </section>
        </div>
    </div>
</template>
<script>
import store from "../store";
import {mapState, mapGetters } from "vuex";
import Vue from "vue"
export default {
    data(){
        return {
            vipList: [],
            classgreen:"list-itemgreen",
            classdack:"list-item-dack"
        }
    },
    mounted (){
        this.vipList = [
            { 
                name: "vip会员",
                price: "10.00", 
                vipLevel: 0, 
                userStatus: 1,
                isbuy:true 
            },
            {
                name: "高级VIP1会员",
                price: "50.00",
                vipLevel: 1,
                userStatus: 2,
                isbuy:true
            },
            {
                name: "高级VIP3会员",
                price: "100.00",
                vipLevel: 3,
                userStatus: 2,
                isbuy:true
            },
            {
                name: "高级VIP9会员",
                price: "1000.00",
                vipLevel: 9,
                userStatus: 2,
                isbuy:true
            },
            {
                name: "高级VIP12会员",
                price: "10000.00",
                vipLevel: 12,
                userStatus: 2,
                isbuy:true
            }
        ];        
        const that=this;
        var status=that.$store.getters.infoStatus;
        var level=that.$store.getters.infoLevel; 
        if(status && level){                    
            for(let j=0,len=that.vipList.length;j<len;j++){ 
                if(that.vipList[j].userStatus==status && that.vipList[j].vipLevel==level){
                    console.log(j);
                    that.listNew(j);
                    return false;
                }
            }  
        }  
    },
     computed:{
         ...mapState(["token"]),
         ...mapGetters(["memberInfo"])
     },
     methods:{         
         buy(e,index){
             //axios              
            //同步改变值
            //  store.commit("setMemberInfo", {
            //      userStatus:e.userStatus,
            //      vipLevel:e.vipLevel
            //  });
            //异步改变action
            const that=this;
            store.dispatch("buyVip", e).then(res => {
                that.listNew(index);
                alert(res);
            });
         },
         listNew(index){
              const that=this;
             for(let i=0;i<=index;i++){
                that.vipList[i].isbuy = false;
                Vue.set(that.vipList,i,that.vipList[i])
            }
         }
     }
}
</script>
<style lang="scss">
$color-green: #57cda5;
$color-white:#fff;
.user-center {
    padding: 0 20px;
    box-sizing: border-box;
    .user-info {
        display: flex;
        align-items: center;
        line-height: 2;
        border-bottom: 1px solid #eee;
        justify-content: space-between;
        &-label,
        &-value {
            flex: 0 0 auto;
        }
    }
    .user-info:last-child {
        border-bottom: none;
    }
    .container {
        display: flex;
        flex-direction: column;
        padding: 20px 0;
        justify-content: flex-start;
        align-items: center;
        flex-wrap: wrap;
        box-sizing: border-box;
        .list-itemgreen{
            background:$color-green;
        }
        .list-item-dack{
            background:#aaa;
        }
        .list-item {
            flex: 1;
            width: 100%;
            padding: 10px;
            text-align: left;
            box-sizing: border-box;
            margin-bottom: 20px;
            border-radius: 5px;
            list-style: none;
            box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.3);
            

            .item-name {
                display: block;
                width: 100%;
                color: $color-white;
            }
            .item-content {
                display: flex;
                width: 100%;
                justify-content: space-between;
                align-items: center;
                padding: 5px 0;
                &__price {
                    flex: 1;
                    color:rgba($color: #000, $alpha: 0.55);
                    font-size: 22px;
                    .item-content__date {
                        font-size: 14px;
                        color: $color-white;
                    }
                }
                &__btn {
                    flex: 0 0 auto;
                    font-size: 16px;
                    background:rgba($color: #000, $alpha: 0.25);
                     border-radius: 5px;                   
                    color:$color-white;                    
                    line-height: 2;
                     border: 1px solid rgba($color: #000, $alpha: 0.55);
                     cursor: pointer;
                    &::after {
                        border: none;
                    }
                }
            }
            .item-description {
                width: 100%;
                font-size: 12px;
                color: #ffe5db;
            }
        }
    }
    .btn {
        width: 100%;
        height: auto;
        color: #fff;
        background: #373737;
        margin: 10px 0 20px;
        padding: 15px;
        box-sizing: border-box;
        border-radius: 5px;
        font-size: 16px;
        border:0 none;
    }
}
</style>