<template>
	<div class="container">
		<div class="banner-body-content">
			<LeftNavOneComponent></LeftNavOneComponent>
				<CarouselComponent :CarouselList="CarouselList"></CarouselComponent>
				<LeftNavTwoComponent></LeftNavTwoComponent>
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
import CarouselComponent from '../../components/carousel.vue';
import LeftNavTwoComponent from '../../components/leftNavTwo.vue';
import PageBtnComponent from '../../components/pageBtn.vue';


export default {
	components: {
		LeftNavOneComponent,
		TitleBarComponent,
		BlogListComponent,
		LeftNavTwoComponent,
		PageBtnComponent,
		CarouselComponent
	},
	data() {
		return {
			titleMsg: {
				name: "博客",
				msg: "博客，仅音译，英文名为Blogger,为Web Log的混成词。它的正式名称为网络日记；又音译为部落格或部落阁等，是使用特定的软件，在网络上出版、发表和张贴个人文章的人，或者是一种通常由个人管理、不定期张贴新的文章的网站。"
			},
			listData: [

			],
			pageData:{
             "isShow":false,
			},
           CarouselList:[],

		}
	},
	created() {
		 this.$store.commit("SetNeedBannerBottom",false);
	     this.getBlogList(1);
	     this.axios.get("http://www.digouyouzhennanchi.xyz/api/Carous/GetBlogCarouslList").then(res => {
           let data = res.data.CarouselList;
           this.CarouselList = data;
    });
	},
	methods:{
		getBlogList(page){
	//获取博客列表，以及分页信息
		this.axios.get("http://www.digouyouzhennanchi.xyz/api/Blog/GetBlogList?page="+ page +"&rows=3").then(res => {
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