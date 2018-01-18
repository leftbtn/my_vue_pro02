<template>
	<div class="container">
		<div class="banner-body-content">
			<LeftNavOneComponent></LeftNavOneComponent>
			<div class="col-xs-9 banner-body-right">
				<!-- single -->
				<div class="single">
					<h3>{{blogDetail.title}}</h3>
					<div class="single-left">
						<p>发表于
							<span>{{blogDetail.CreateDateTime}}</span>
						</p>

					</div>
					<div v-html="blogDetail.detail">
						{{blogDetail.detail}}

					</div>
					<div class="clearfix"> </div>
					<div class="leave-comment" v-if="IsLogin">
						<h4>你的评论</h4>
						<p>留下评论是对我最大的支持.</p>
						<form>
							<textarea placeholder="Message" required="" v-model="form.Details"></textarea>
							<div class="submit_btn" @click="submitComment()">提交</div>
							<div class="clearfix"> </div>
						</form>
					</div>
					<CommentListComponent :commentList="commentList" @replyIsSuccess="getCommentList(blogId)"></CommentListComponent>

				</div>
				<!-- //single -->
			</div>
			<div class="clearfix"></div>
		</div>

	</div>
</template>

<script>
import LeftNavOneComponent from "../../components/leftNavOne.vue";
import CommentListComponent from "../../components/commentList.vue";
import http from "../../axios/http";
import api from "../../axios/api";
import { mapState, mapMutations } from "vuex";
export default {
  components: {
    LeftNavOneComponent,
    CommentListComponent
  },
  data() {
    return {
      blogDetail: {},
      blogId:{},
      commentList: [],
      form: {
        ArticleId: "",
        Details: ""
      }
    };
  },
  beforeCreate: function() {},
  computed: mapState({
    IsLogin: state => state.IsLogin,
    UserInformation: state => state.UserInformation
  }),

  created() {
    this.blogId = this.$route.params.id;
    let id = this.$route.params.id;
    this.$store.commit("SetRouterIndex", 2);
    this.getBlogDetail(id);
    this.getCommentList(id);
    this.form.ArticleId = id;
  },
  mounted() {},
  updated() {
    // let id = this.$route.params.id;
    //     this.getBlogDetail(id);
  },
  methods: {
    async getBlogDetail(id) {
      this.axios
        .get(
          "http://www.digouyouzhennanchi.xyz/api/Blog/GetBlogDetail/" + id + ""
        )
        .then(res => {
          let data = res.data;
          this.blogDetail = data;
          this.blogDetail.detail = data.detail.substring(
            1,
            data.detail.length - 1
          );
        });
    },
    async getCommentList(id) {
      let data = new Object();
      data.id = id;
      http.get(api.getCommentList, data).then(res => {
        let r = res.data;
        this.commentList = r.CommentList;
      });
    },
    async submitComment() {
      let data = new Object();
      data.ArticleId = this.form.ArticleId;
      data.UserId = this.UserInformation.userid;
      data.Details = this.form.Details;
      if (data.Details.length < 3) {
        this.$message({
          message: "评论字数必须要大于3哟",
          type: "error",
          showClose: true
        });
        return;
      }
      http.post(api.postSaveComment, data, true).then(res => {
        let r = res.data;
        if (r.success) {
          this.$message({
            message: "感谢你的评论",
            type: "success",
            showClose: true
          });
          let id = this.$route.params.id;
          this.getCommentList(id);
          this.form.Details = "";
        } else {
          this.$message({
            message: "链接失败,请重新提交",
            type: "error",
            showClose: true
          });
        }
      });
    }
  }
};
</script>

<style>
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
  width: 60%;
  cursor: pointer;
}
.submit_btn:hover {
  background: #d57d39;
}
@media (max-width: 1080px) {
  .submit_btn {
    width: 85%;
  }
}
</style>
