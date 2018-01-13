<template>
	<div class="three-com">
		<h3>2 Comment

			<label>{{IsLogin?"请自觉遵守互联网相关的政策法规，严禁发布色情、暴力、反动的言论。":"想留下感想请先登录"}}</label>
		</h3>

		<div class="tom-grid humour" v-for="item in commentList">
			<div class="tom">
				<img src="../assets/images/co.png" alt=" ">
			</div>
			<div class="tom-right">
				<div class="Hardy">
					<h4>
						<a href="javascript:;">{{item.userName}}</a>
					</h4>
					<p>
						<label>评论时间：{{item.createDateTime}}</label>
					</p>
				</div>

				<div class="clearfix"> </div>
				<p class="lorem">{{item.details}}</p>
				<div class="reply" v-if="IsLogin">
					<a href="javacript:;" @click="getReplyNeedInfo(item.userName,item.id,item.userId);">回复</a>
				</div>
				<div class="clearfix"> </div>
				<ul class="second-comment" v-if="item.ReplyList.length > 0 ">

					<li class="second-content" v-for="i in item.ReplyList">
						<p class="lorem">
							<span class="from-user"> {{i.FromAccount}} @{{i.ToAccount}}：</span>
						</p>
						<p class="lorem click-reply">{{i.details}}.</p>
					</li>
				</ul>

			</div>
			<div class="clearfix"> </div>
		</div>

		<el-dialog :title="'@'+form.replyName " :visible.sync="dialogFormVisible">
			<el-form :model="form">
				<el-form-item label="回复：" :label-width="formLabelWidth">
					<el-input v-model="form.content" auto-complete="off"></el-input>
				</el-form-item>

			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button type="warning" @click="dialogFormVisible = false">确 定</el-button>
			</div>
		</el-dialog>

	</div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import http from "../axios/http";
import api from "../axios/api";
export default {
  props: {
    commentList: {}
  },
  data() {
    return {
      dialogFormVisible: false,
      form: {
        content: "",
        delivery: false,
        replyName: "",
        CommentId: "",
        FromId: "",
        ToId: ""
      },
      formLabelWidth: "100px"
    };
  },
  computed: mapState({
    IsLogin: state => state.IsLogin,
    UserInformation: state => state.UserInformation
  }),
  created() {},
  methods: {
    getReplyNeedInfo(userName, id, userId) {
      this.form.replyName = userName;
      this.form.CommentId = id;
      this.form.FromId = this.UserInformation.userid;
      this.form.ToId = userId;
      this.dialogFormVisible = true;
    },
    submitReplyInfo() {
      this.dialogFormVisible = false;
      let data = new Object();
      data.CommentId = this.form.CommentId;
      data.FromId = this.form.FromId;
      data.ToId = this.form.ToId;
      data.Details = this.form.content;
      http.post(api.postSaveReply, data,true).then(res => {
        let r = res.data;
        if (r.success) {
           
        }
      });
    }
  }
};
</script>
<style>
.reply {
  float: right;
  margin: 0px;
  padding: 0px;
  font-weight: normal;
}
.three-com {
  font-family: "Microsoft YaHei" !important;
}
.second-content .lorem {
  margin: 0px !important;
}
.second-content .from-user {
  color: #d57d39;
  font-size: 1em;
  font-style: normal;
  margin: 0;
}
.second-comment {
  list-style: none;
}
.el-input.is-active .el-input__inner,
.el-input__inner:focus {
  border-color: #e6a23c !important;
}
.three-com h3 label {
  font-size: 18px;
}
</style>


