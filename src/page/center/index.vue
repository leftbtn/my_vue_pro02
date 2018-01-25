<template>
  <div class="container">
    <div class="banner-body-content">
      <LeftNavOneComponent></LeftNavOneComponent>

      <div class="col-xs-9 banner-body-right">
        <TitleBarComponent :titleMsg="titleMsg"></TitleBarComponent>
        <!-- mail -->
        <div class="mail">

          <div class="mail-grid1">
            <h3>
              <span>Header Image</span>
            </h3>
            <p>这里是你的头像</p>
            <ul>
              <el-upload class="avatar-uploader" action="http://www.digouyouzhennanchi.xyz/api/Account/UploadImg" :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
                <img v-if="userInfo.imageUrl" :src="userInfo.imageUrl" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>

            </ul>

          </div>

          <div class="mail-grid1">
            <h3>
              <span>User Infomation</span>
            </h3>
            <p>这里是你的个人信息</p>
            <ul>
              <li>
                <i class="glyphicon glyphicon-user" aria-hidden="true"></i>帐号
                <span>
                  <el-input v-model="userInfo.account" placeholder="请输入内容" :disabled="true" class="fugai"></el-input>
                </span>
              </li>
              <li>
                <i class="glyphicon glyphicon-heart" aria-hidden="true"></i>昵称
                <span>
                  <el-input v-model="userInfo.nikename" placeholder="请输入内容" class="fugai"></el-input>
                </span>
              </li>
            </ul>
            <ul>
              <li>
                <i class="glyphicon glyphicon-calendar" aria-hidden="true"></i>出生日期
                <span>
                  <el-date-picker type="date" v-model="userInfo.birthday" placeholder="选择日期">

                  </el-date-picker>
                </span>
              </li>
            </ul>
          </div>
          <div class="mail-grid1">
            <h3>
              <span>Contact Infomation</span>
            </h3>
            <p>这里是你的联系方式</p>
            <ul>
              <li>
                <i class="glyphicon glyphicon-earphone" aria-hidden="true"></i>手机
                <span>
                  <el-input v-model="userInfo.phone" placeholder="请输入内容" class="fugai"></el-input>
                </span>
              </li>
              <li>
                <i class="glyphicon glyphicon-envelope" aria-hidden="true"></i>邮箱
                <span>
                  <el-input v-model="userInfo.email" placeholder="请输入内容" class="fugai"></el-input>
                </span>
              </li>
            </ul>
            <ul>
              <li>
                <i class="glyphicon glyphicon-map-marker" aria-hidden="true"></i>地址
                <span>
                  <el-input v-model="userInfo.address" placeholder="请输入内容" class="fugai"></el-input>
                </span>
              </li>
            </ul>
          </div>
          <div class="mail-grid1">
            <div class="submit_btn" @click="saveUserInfoDetail(userInfo)">提交</div>
          </div>
        </div>

      </div>
      <div class="clearfix"> </div>

    </div>
  </div>
</template>

<script>
import LeftNavOneComponent from "../../components/leftNavOne.vue";
import TitleBarComponent from "../../components/titleBar.vue";
import http from "../../axios/http";
import api from "../../axios/api";
import { mapState, mapMutations } from "vuex";
export default {
  components: {
    LeftNavOneComponent,
    TitleBarComponent
  },
  data() {
    return {
     
      titleMsg: {
        name: "个人中心",
        msg:
          "个人中心中会显示修改用户信息的选项，点击进入后，就可以在这里修改管理您的个人资料了。"
      },
      userInfo: {
        account: "",
        nikename: "",
        birthday: "",
        phone: "",
        email: "",
        address: "",
        imageUrl:""
      }
    };
  },
  computed: mapState({
    UserInformation: state => state.UserInformation
  }),
  created() {
    this.$store.commit("SetRouterIndex", 3);
    this.getUserInfoDetail();
  },
  methods: {
    async getUserInfoDetail() {
      let data = new Object();
      data.userid = this.UserInformation.userid;
      http.get(api.getUserDetailInfo, data).then(res => {
        let r = res.data;
        if (r.success) {
          this.userInfo.account = r.Account;
          this.userInfo.nikename = r.NikeName;
          this.userInfo.birthday = r.birthday;
          this.userInfo.phone = r.Phone;
          this.userInfo.address = r.Address;
          this.userInfo.email = r.Email;
          this.userInfo.imageUrl = r.HeadImg;
        } else {
          this.$message({
            message: "获取信息失败",
            type: "error",
            showClose: true
          });
        }
      });
    },
    async saveUserInfoDetail(userInfo) {
      let data = new Object();
      data.UserId = this.UserInformation.userid;
      data.Addres = userInfo.address;
      data.birthday = userInfo.birthday;
      data.Email = userInfo.email;
      data.NikeName = userInfo.nikename;
      data.Phone = userInfo.phone;
      data.HeadImg = userInfo.imageUrl;
      http.post(api.postSaveUserDeatilInfo, data, true).then(res => {
        let r = res.data;
        if (r.success) {
          this.$message({
            message: "保存成功",
            type: "success",
            showClose: true
          });
        } else {
          this.$message({
            message: r.msg,
            type: "error",
            showClose: true
          });
        }
      });
    },
    handleAvatarSuccess(res, file) {
      let r = JSON.parse(res);
      if (r.status) {
        this.userInfo.imageUrl = r.msg;
      }else{
          this.$message.error("上传头像失败");
      }

      // this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    }
  }
};
</script>
<style>
.fugai.el-input input {
  margin: 0px !important;
}
.mail-grid1 input[type="text"]:nth-child(1),
.mail-grid1 input[type="email"] {
  width: 100% !important;
  border: 0px !important;
  margin: 0px portant;
}
.mail-grid1 input[type="text"]:nth-child(1) {
  padding-left: 30px;
}
.submit_btn {
  font-size: 1em;
  background: #e0bd62;
  padding: 10px 0;
  color: #fff;
  display: block;
  -webkit-transition: 0.5s ease-in;
  transition: 0.5s ease-in;
  text-align: center;
  border-radius: 5px;
  cursor: pointer;
}
.submit_btn:hover {
  background: #d57d39;
}
.mail-grid1 .el-input__prefix {
  margin-top: 0;
  padding-left: 0;
  font-size: 15px;
}
.glyphicon {
  font-family: "Glyphicons Halflings" !important;
} /* For Glyphicons */

.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #e0bd62;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
input[type="file"] {
  display: none !important;
}
</style>

