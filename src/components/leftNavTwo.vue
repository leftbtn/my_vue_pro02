<template>
<div class="col-xs-3 banner-body-left">
				<div class="latest-news">
					<h2>登录与注册</h2>
					<div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
					  <div class="panel panel-default">
						<div class="panel-heading" role="tab" id="headingOne">
						  <h4 class="panel-title">
							<a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
							  登录
							</a>
						  </h4>
						</div>
						<div id="collapseOne" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
						  <div class="panel-body">
						<div class="input-group">
								<span class="input-group-addon" id="l-account">帐号</span>
								<input type="text" class="form-control" placeholder="Account"  v-model="LoginInfo.Account" aria-describedby="l-account">
							</div>
                        <div class="input-group">
								<span class="input-group-addon" id="l-password">密码</span>
								<input type="password" class="form-control" placeholder="Password" v-model="LoginInfo.Password" aria-describedby="l-password">
							</div>
                            <a href="javascript:;" v-on:click="login()"><span class="label label-warning">登录</span></a>
                           
						  </div>
						</div>
					  </div>
					  <div class="panel panel-default">
						<div class="panel-heading" role="tab" id="headingTwo">
						  <h4 class="panel-title">
							<a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
							  注册
							</a>
						  </h4>
						</div>
						<div id="collapseTwo" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
						  <div class="panel-body">
							<div class="input-group">
								<span class="input-group-addon" id="r-account">帐号</span>
								<input type="text" class="form-control" placeholder="Account" v-model="RegisterInfo.Account" aria-describedby="r-account">
							</div>
              <div class="input-group">
								<span class="input-group-addon" id="r-password">密码</span>
								<input type="password" class="form-control" placeholder="Password" v-model="RegisterInfo.Password" aria-describedby="r-password">
							</div>
               <div class="input-group">
								<span class="input-group-addon" id="r-nikename">昵称</span>
								<input type="text" class="form-control" placeholder="NikeName" v-model="RegisterInfo.NikeName" aria-describedby="r-nikename">
							</div>  
                   <a href="#"><span class="label label-danger">注册</span></a>
						  </div>
						</div>
					  </div>
					  
					</div>
				
					<h3>网站简介</h3>
					<p>这是一个基于Vue.js搭建的个人网站，后台数据接口是基于.net的webapi生成。
						</br>接口地址:<a href="digouyouzhennanchi.xyz" target="_blank">digouyouzhennanchi.xyz</a>
					</br>github地址:<a href="https://github.com/leftbtn" target="_blank">https://github.com/leftbtn</a></p>
				</div>
			</div>
</template>
<script>
import qs from "qs";
export default {
  data() {
    return {
      LoginInfo: {
        Account: "",
        Password: ""
      },
			RegisterInfo:{
				Account:"",
				Password:"",
				NikeName:""
			}
    };
  },
  methods: {
    login: function() {
   

      // this.axios({
      //   methods: "post",
      //   url: "http://localhost:5741/api/Account/Login",
      //   data: qs.stringify(this.LoginInfo),
      //   headers: { "Content-Type": "application/x-www-form-urlencoded" }
      // })
      //   .then(function(response) {
      //     console.log(response);
      //   })
      //   .catch(function(error) {
      //     console.log(error);
      //   });
    }
  }
};
</script>
<style>
.panel-body .label {
  font-size: 100%;
}
.panel-body .label.label-warning {
  display: inline-block;
  width: 100%;
}
.panel-body .label.label-danger {
  display: inline-block;
  width: 100%;
}
</style>
