<template>
<div class="blog">
					<div class="blog-grid" v-for="item in blogList">
						<div class="col-xs-4 blog-grid-left">
							<router-link  :to="'/blogDetail/'+item.id"><img :src="item.img" alt=" " class="img-responsive"></router-link>
						</div>
						<div class="col-xs-8 blog-grid-right">
							<h4><router-link  :to="'/blogDetail/'+item.id">{{item.title}}</router-link></h4>
							<p>{{item.content}}</p>
							<router-link  :to="'/blogDetail/'+item.id"><span class="glyphicon glyphicon-play-circle" aria-hidden="true"></span></router-link>
						</div>
						<div class="clearfix"> </div>
					</div>
			</div>
</template>

<script>
export default{
    props : {
        blogList:{

        }
	},
	mounted(){
		console.log(this.blogList);
	}
}
</script>
