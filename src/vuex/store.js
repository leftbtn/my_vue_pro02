import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)


const state = new Object();
state.IsLogin = false; //用户是否登录
state.UserInformation = new Object(); //用户基本信息
state.NeedBannerBottom = true;   //是否需要banner底部
state.RouterIndex = 0;      //当前路由


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
    state.UserInformation.NikeName = user.NikeName;
    state.UserInformation.CreateDateTime = user.CreateDateTime;
}
//管理是否加载BannerBottom
mutations.SetNeedBannerBottom = (data,bool)=>{
    state.NeedBannerBottom = bool;
}

//改变当前路由下标
mutations.SetRouterIndex = (data,i)=>{
    state.RouterIndex = i;
}



export default new Vuex.Store({
    state,mutations
});