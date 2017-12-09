<template>
<div class="container">
<div class="banner-body-content"> 
<LeftNavOneComponent></LeftNavOneComponent>
  <div class="col-xs-9 banner-body-right">
			<TitleBarComponent :titleMsg="titleMsg"></TitleBarComponent>
            <BlogListComponent :blogList="listData"></BlogListComponent>
 </div>

<PageBtnComponent></PageBtnComponent>

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
export default{
    components: {
      LeftNavOneComponent,
      TitleBarComponent,
	  BlogListComponent,
	  LeftNavTwoComponent,
	  PageBtnComponent
  },
  data(){
	  return{
		  titleMsg:{
			  name:"Blog",
			  msg:"But I must explain to you how all this mistaken idea of denouncing  pleasure and praising pain was born."
		  },
		  listData:[
			  {
				  id:"1",
				  img: require("../../assets/images/1.jpg"),
				  title:"sint occaecat cupidatat non proident",
				  content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
			  },
			    {
				  id:"2",	
				  img: require("../../assets/images/2.jpg"),
				  title:"Sed ut perspiciatis unde omnis iste natus",
				  content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
			  },
			   {
				  id:"3",
				  img: require("../../assets/images/3.jpg"),
				  title:"At vero eos et accusamus et iusto odio",
				  content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
			  }
		  ]
			  
		  
	  }
  }
}


</script>