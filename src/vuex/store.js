import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)


const state = new Object();
state.IsLogin = false;
state.UserInformation = new Object();


/********改变使用的方法**********/
const mutations = new Object();
//判断用户是否登录
mutations.UserIsLogin = (state,data) =>{
    if(data == null || data == ""){
        state.IsLogin = false;
    }else{
        state.IsLogin = true;
    }
 }
//保存用户信息
mutations.SaveUserInformation =  (data,user)=>{
    state.UserInformation.userid = user.userid;
    state.UserInformation.Account = user.Account;
    state.NikeName = user.NikeName;
    state.UserInformation.CreateDateTime = user.CreateDateTime;
}


export default new Vuex.Store({
    state,mutations
});