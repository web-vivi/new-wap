export default{
    state:{
        userStatus:sessionStorage.getItem('userStatus'), //0-->普通   1-->Vip 2-->高级Vip
        vipLevel:sessionStorage.getItem('vipLevel')
    },
    mutations:{        
        setMemberInfo(state, v) {
            state.userStatus = v.userStatus;
            state.vipLevel = v.vipLevel;
            sessionStorage.setItem('userStatus', v.userStatus);
            sessionStorage.setItem('vipLevel', v.vipLevel);
        }
       
    },
    actions:{
        buyVip({ commit }, e) {
            return new Promise((resolve, reject) => {
                commit("setMemberInfo",{
                    userStatus: e.userStatus,
                    vipLevel: e.vipLevel                  
                })
                resolve("购买成功")
            })
        },
        getFreeVip({commit,state}){
            return new Promise((resolve, reject) => { 
                commit("setMemberInfo",{
                    userStatus: 1,
                    vipLevel: 0                
                })
                resolve("分享成功,您已免费获得一个月的VIP")
                
            })
        }
    },
    getters:{
        infoStatus(state){
            return state.userStatus
        },
        infoLevel(state){
            return state.vipLevel
        },
        memberInfo(state) {
            //console.log(state.userStatus);
            var status=Number(state.userStatus);
            switch (status) {
                case 0:
                    return "普通会员"
                   break;
                case 1:
                    return "vip会员"
                    break;
                case 2:
                    return `高级V${state.vipLevel}会员`
                    break;
                default:
                    return "普通会员"
                    break;
            }
        }
    }   
    

}
