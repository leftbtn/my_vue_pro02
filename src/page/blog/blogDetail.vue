<template>
	<div class="container">
		<div class="banner-body-content">
			<LeftNavOneComponent></LeftNavOneComponent>
			<div class="col-xs-9 banner-body-right">
				<!-- single -->
				<div class="single">
					<h3>{{blogDetail.title}}</h3>
					<div class="single-left" >
						<p>发表于
							<span>{{blogDetail.CreateDateTime}}</span>
						</p>
						
					</div>
					<div  v-html="blogDetail.detail">
				      {{blogDetail.detail}}		
                  
					</div>
					<div class="clearfix"> </div>
					<CommentListComponent :commentList="commentList"></CommentListComponent>
					<div class="leave-comment">
						<h4>你的评论</h4>
						<p>留下评论是对我最大的支持.</p>
						<form>
							
							<textarea placeholder="Message" required=" "></textarea>
							<input type="submit" value="提交">
							<div class="clearfix"> </div>
						</form>
					</div>
				</div>
				<!-- //single -->
			</div>
			<div class="clearfix"></div>
		</div>

		
	</div>
</template>

<script>
import LeftNavOneComponent from '../../components/leftNavOne.vue';
import CommentListComponent from '../../components/commentList.vue';
import http from "../../axios/http";
import api from "../../axios/api";
export default {
	components: {
		LeftNavOneComponent,
		CommentListComponent
	},
	data() {
		return {
			blogDetail: {},
			commentList:[]
			
		}
	},
	beforeCreate: function () {
        
        },

	created() {
	 let id = this.$route.params.id;
	 this.getBlogDetail(id);
	 this.getCommentList(id);
	},
	mounted(){
	
	},
	updated () {
		// let id = this.$route.params.id;
        //     this.getBlogDetail(id);
        },
	methods: {
       getBlogDetail(id){
         this.axios.get("http://www.digouyouzhennanchi.xyz/api/Blog/GetBlogDetail/"+id+"").then(res => {
			let data = res.data;
		   this.blogDetail = data;
		   this.blogDetail.detail = data.detail.substring(1,data.detail.length-1);
			
		});
	   },
	   	getCommentList(id){
		   let data = new Object();
			 data.id = id;
			 http.get(api.getCommentList,data).then(res=>{
			 let r = res.data;
			 this.commentList = r;
			 console.log(r);
		});
		   }
	}
}
</script>