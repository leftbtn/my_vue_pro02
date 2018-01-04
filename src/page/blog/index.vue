<template>
	<div class="container">
		<div class="banner-body-content">
			<LeftNavOneComponent></LeftNavOneComponent>
			<div class="col-xs-9 banner-body-right">
				<TitleBarComponent :titleMsg="titleMsg"></TitleBarComponent>
				<BlogListComponent :blogList="listData"></BlogListComponent>
			</div>

			<PageBtnComponent :pageData="pageData" v-if="pageData.isShow" @upup="change"></PageBtnComponent>

			<div class="clearfix"> </div>

		</div>
	</div>
</template>


<script>
import LeftNavOneComponent from '../../components/leftNavOne.vue';
import TitleBarComponent from '../../components/titleBar.vue';
import BlogListComponent from './blogList.vue';
import LeftNavTwoComponent from '../../components/leftNavTwo.vue';
import PageBtnComponent from '../../components/pageBtn.vue';
export default {
	components: {
		LeftNavOneComponent,
		TitleBarComponent,
		BlogListComponent,
		LeftNavTwoComponent,
		PageBtnComponent
	},
	data() {
		return {
			titleMsg: {
				name: "Blog",
				msg: "But I must explain to you how all this mistaken idea of denouncing  pleasure and praising pain was born."
			},
			listData: [

			],
			pageData:{
             "isShow":false,
			}


		}
	},
	created() {
	this.getBlogList(1);
	},
	methods:{
		getBlogList(page){
	//获取博客列表，以及分页信息
		this.axios.get("http://123.207.26.246/api/Blog/GetBlogList?page="+ page +"&rows=3").then(res => {
			let data = res.data;
			this.listData = data.blogList;
			let pageObject = new Object();
			pageObject.pageIndex = data.pageIndex;
			pageObject.pageSize = data.pageSize;
			pageObject.totalCount = data.totalCount;
			pageObject.totalPage = data.totalPage;
			pageObject.isShow = true;
			this.pageData = pageObject;
		
			
		});
		},
		change(page) {
        this.getBlogList(page);
    }
	}
}


</script>