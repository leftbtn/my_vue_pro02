<template>
	<div class="col-xs-3 banner-body-left">
		<div class="latest-news">
			<h2 v-if="!this.$store.state.IsLogin">登录与注册</h2>
			<div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
				<!-- 登录口 -->
				<div class="panel panel-default" v-if="!IsLogin">
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
								<input type="text" class="form-control" placeholder="Account" v-model.trim="LoginInfo.Account" aria-describedby="l-account">
							</div>
							<div class="input-group">
								<span class="input-group-addon" id="l-password">密码</span>
								<input type="password" class="form-control" placeholder="Password" v-model.trim="LoginInfo.Password" aria-describedby="l-password">
							</div>
							<a href="javascript:;" v-on:click="login(LoginInfo)">
								<span class="label label-warning">登录</span>
							</a>

						</div>
					</div>
				</div>

				<!-- 注册口 -->
				<div class="panel panel-default" v-if="!IsLogin">
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
								<input type="text" class="form-control" placeholder="Account" v-model.trim="RegisterInfo.Account" aria-describedby="r-account">
							</div>
							<div class="input-group">
								<span class="input-group-addon" id="r-password">密码</span>
								<input type="password" class="form-control" placeholder="Password" v-model.trim="RegisterInfo.Password" aria-describedby="r-password">
							</div>
							<div class="input-group">
								<span class="input-group-addon" id="r-password">确认密码</span>
								<input type="password" class="form-control" placeholder="CKPassword" v-model.trim="RegisterInfo.CKPassword" aria-describedby="r-CKpassword">
							</div>
							<div class="input-group">
								<span class="input-group-addon" id="r-nikename">昵称</span>
								<input type="text" class="form-control" placeholder="NikeName" v-model.trim="RegisterInfo.NikeName" aria-describedby="r-nikename">
							</div>
							<a href="javascript:;">
								<span class="label label-danger" v-on:click="register(RegisterInfo)">注册</span>
							</a>
						</div>
					</div>
				</div>

				<div class="panel panel-default" v-if="IsLogin">
					<div class="panel-heading" role="tab" id="headingOne">
						<h4 class="panel-title">
							<a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
								个人信息
							</a>
						</h4>
					</div>
					<div id="collapseOne" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
						<div class="panel-body">
							<div class="input-group">
								<h5>账户名：{{Information.Account}}</h5>
							</div>
							<div class="input-group">
								<h5>昵称：{{Information.NikeName}}</h5>
							</div>
							<div class="input-group">
								<h5>注册时间：{{Information.CreateDateTime}}</h5>
							</div>
							<a href="javascript:;">
								<span class="label label-warning" v-on:click="loginOut()">退出</span>
							</a>
						</div>
					</div>
				</div>

			</div>

			<h3>网站简介</h3>
			<p>这是一个基于Vue.js搭建的个人网站，后台数据接口是基于.net的webapi生成。<br>接口地址:
				<a href="http://123.207.26.246/Help" target="_blank">digouyouzhennanchi.xyz</a>
				<br>github地址:
				<a href="https://github.com/leftbtn" target="_blank">https://github.com/leftbtn</a>
			</p>
		</div>

	</div>
</template>
<script>
import http from "../axios/http";
import api from "../axios/api";
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      LoginInfo: {
        Account: "",
        Password: ""
      },
      RegisterInfo: {
        Account: "",
        Password: "",
        CKPassword: "",
        NikeName: ""
      },
      Information: {
        Account: "",
        CreateDateTime: "",
        NikeName: ""
      }
    };
  },
  computed: mapState({
    IsLogin: state => state.IsLogin,
    UserInformation: state => state.UserInformation
  }),
  created() {
    this.Information.Account = this.UserInformation.Account;
    this.Information.NikeName = this.UserInformation.NikeName;
    this.Information.CreateDateTime = this.UserInformation.CreateDateTime;
  },
  mounted() {},
  updated() {},
  methods: {
    async login(LoginInfo) {
      let data = new Object();
      data.Account = LoginInfo.Account;
      data.Password = LoginInfo.Password;
      if (data.Account == "" || data.Password == "") {
        this.$message({
          message: "帐号或者密码不能为空",
          type: "error",
          showClose: true
        });
        return;
      }
      http.post(api.postLoginApi, data, true).then(res => {
        let r = res.data;
        if (r.success) {
          this.$message({
            message: "登录成功",
            type: "success",
            showClose: true
          });
          localStorage.setItem("userid", r.msg);
          this.getUserInformation();
          this.$store.commit("UserIsLogin", r.msg);
        } else {
          this.$message({ message: r.msg, type: "error", showClose: true });
        }
      });
    },
    async register(RegisterInfo) {
      let data = new Object();
      if (RegisterInfo.Account == "" || RegisterInfo.Password == "") {
        this.$message({
          message: "帐号或者密码不能为空",
          type: "error",
          showClose: true
        });
        return;
      }
      if (RegisterInfo.Password != RegisterInfo.CKPassword) {
        this.$message({
          message: "两次密码不一致",
          type: "error",
          showClose: true
        });
        return;
      }
      if (RegisterInfo.NikeName == "") {
        this.$message({
          message: "昵称不能为空",
          type: "error",
          showClose: true
        });
        return;
      }
      data.Account = RegisterInfo.Account;
      data.Password = RegisterInfo.Password;
      data.NikeName = RegisterInfo.NikeName;

      http.post(api.postRegisterApi, data, true).then(res => {
        let r = res.data;
        if (r.success) {
          this.$message({
            message: "注册成功",
            type: "success",
            showClose: true
          });
          localStorage.setItem("userid", r.msg);
          this.getUserInformation();

          this.$store.commit("UserIsLogin", r.msg);
        } else {
          this.$message({ message: r.msg, type: "error", showClose: true });
        }
      });
    },
    async getUserInformation() {
      let user = new Object();
      let userId = localStorage.getItem("userid");
      if (userId == null || userId == "") {
        this.$message({
          message: "您还未登录，请先登录",
          type: "error",
          showClose: true
        });
        return;
      }
      user.userid = userId;
      http.get(api.getUserInformationForIdApi, user).then(res => {
        let r = res.data;
        if (r.success) {
          let u = new Object();

          this.Information.Account = r.Account;
          this.Information.NikeName = r.NikeName;
          this.Information.CreateDateTime = r.CreateDateTime;

          u.Account = r.Account;
          u.NikeName = r.NikeName;
          u.CreateDateTime = r.CreateDateTime;
          u.userid = user.userid;

          this.$store.commit("SaveUserInformation", u);
        } else {
          this.$message({
            message: "获取信息失败",
            type: "error",
            showClose: true
          });
        }
      });
    },
    loginOut() {
      this.$confirm("是否退出当前登录状态?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          localStorage.removeItem("userid");
          this.$message({ type: "success", message: "退出成功!" });

          this.$store.commit("UserIsLogin", null);
        })
        .catch(() => {});
    },

    ...mapMutations(["UserIsLogin", "SaveUserInformation"])
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
