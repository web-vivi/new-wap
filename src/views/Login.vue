<template>
    <div id="Login">
    <div  v-if="loginr">
        <h2 class="login_tit">登 录</h2>
        <p class="en_login">LOGIN</p>
        <form class="login_input" action="" @submit="login($event)">
            <input type="text" v-model="form.username" placeholder="请输入用户名 admin或注册账号" />    
            <input type="password" v-model="form.password" placeholder="请输入密码 123456或注册账号"/>
            <button>登 录</button>
            <div class="login_tips">
                <span>没有账号么？</span> <b @click="runreg">注册一个吧！</b>
            </div>
        </form>   
    </div>   
    <div v-else>
        <h2 class="login_tit">注 册</h2>
        <p class="en_login">REGISTER</p>
        <form class="login_input" action="" @submit="register($event)">
            <input type="text" v-model="form.username" placeholder="请输入用户名"/>    
            <input type="password" v-model="form.password" placeholder="请输入密码"/>
            <input type="password" v-model="repeat" placeholder="再次输入密码"/>
            <button>注 册</button>
            <div class="login_tips">
                <span>已有了账号？</span> <b @click="runlogin">选择登录吧！</b>
            </div>
        </form>
    </div>  
    </div>
    
</template>
<script>
import store from "../store";
export default {
    name:'login',
    data() {
        return {
           loginr:true,
           form:{
             username:"",
             password:"",
           },           
           repeat:''
        }
    },

    methods:{
        login(event){ 
            event.preventDefault(); 
            //console.log(this.$store.state.token.username +":"+this.$store.state.token.password ) 
            //console.log(this.repeat)    ;    
            if(!this.form.username || !this.form.password){
              alert("用户名和密码不能为空!");
              return false;
            } else if((this.form.username=="admin" && this.form.password=="123456")||(this.repeat && this.form.username===this.$store.state.token.username && this.form.password===this.$store.state.token.password)){
                const that=this;                
                sessionStorage.setItem("username", this.form.username); 
                // sessionStorage.setItem('userStatus',0);
                // sessionStorage.setItem('vipLevel', 0);  
                store.commit("setMemberInfo",{
                    userStatus:0,
                    vipLevel:0
                });             
                store.commit("setToken", that.form.username);                
                that.$router.push("./");

            }else{
                alert("用户名和密码不正确！");
                return false;
            }   
               
        },
        runreg(){
            this.form.username='';
            this.form.password='';
            this.loginr=false;
        },
        register(event){
             event.preventDefault();
            if(!this.form.username && !this.form.password && !this.repeat){
                alert("请输入用户名和密码");                
            }else if(this.form.password!==this.repeat){
                alert("两次输入的密码不一致 ");                
            }else{
                const that=this;
                store.commit("setToken", {
                    username: that.form.username,
                    password: that.form.password
                });
                alert("注册成功，请登录");
                that.form.username='';
                that.form.password='';
                //this.repeat='';
                that.loginr=true;
            }
        },
        runlogin(){
            this.form.username='';
            this.form.password='';
            this.loginr=true;
        }
    }
}
</script>
<style lang="scss">
$color-green: #57cda5;
$color-white:#fff;
input:-ms-input-placeholder {
    color:$color-white;
}/* Internet Explorer 10+ */

input::-webkit-input-placeholder {
    color: $color-white;
}/* WebKit browsers */

input::-moz-placeholder {
    color: $color-white;
}/* Mozilla Firefox 4 to 18 */

input:-moz-placeholder {
    color: $color-white;
}
 #Login{
     background:$color-green;
     margin:0;
     padding:0;     
     height:100%;
    
     >div{
        padding-top:100px;
        box-sizing: border-box;
     }
    .en_login{
        font-size:3rem;
        color:rgba($color: #fff, $alpha: 0.5)
    }
    .login_tit{
        position:absolute;
        top:96px;
        left:0;
        right:0;
        font-size:2rem;              
        color:rgba($color: #000, $alpha: 0.75) 
    }
    .login_input{
        width:80%;
        margin:0 auto;
        margin-top:30px;
         color:$color-white;
        input{width:100%;
          border:0 none;
          border-bottom:1px solid $color-white;
          background:none;
          padding:3px 5px;
          margin-top:10px;
          line-height:36px;         
          font-size:1.1rem;
          color:$color-white;
         }
         button{
             border:0 none;
             padding:5px;
             text-align:center;
             background:rgba($color: #000000, $alpha: 0.3);
             font-size: 1.3rem;
             border-radius:5px;
             margin-top:50px;
            line-height:36px;
            display:block;
            width:100%;
            color:$color-white
         }
         .login_tips{
             position:fixed;
             bottom:10px;
             left:0;
             right:0;
             text-align: center;
             line-height: 2rem;
             font-size:1rem;
             span{
                 color:rgba($color: #fff, $alpha: 0.75)
             }
             b{
                 cursor: pointer;
                 border-bottom:1px solid $color-white;
             }
         }
         
    }
 }
</style>