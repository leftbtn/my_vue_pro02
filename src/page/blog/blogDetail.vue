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

					
					
					<div class="three-com">
						<h3>2 Comment
							<span>on</span>
							<label>Donec volutpat ligula non dapibus volutpat</label>
						</h3>
						<div class="tom-grid">
							<div class="tom">
								<img src="../../assets/images/co.png" alt=" ">
							</div>
							<div class="tom-right">
								<div class="Hardy">
									<h4>
										<a href="#">Tom Hardy</a>
									</h4>
									<p>
										<label>12 March 2016</label>
									</p>
								</div>
								<div class="reply" style="display:none">
									<a href="#">Reply</a>
								</div>
								<div class="clearfix"> </div>
								<p class="lorem">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't.</p>
							</div>
							<div class="clearfix"> </div>
						</div>
						<div class="tom-grid humour">
							<div class="tom">
								<img src="../../assets/images/co.png" alt=" ">
							</div>
							<div class="tom-right">
								<div class="Hardy">
									<h4>
										<a href="#">Prad Pitt</a>
									</h4>
									<p>
										<label>13 March 2016</label>
									</p>
								</div>
								<div class="reply" style="display:none">
									<a href="#">Reply</a>
								</div>
								<div class="clearfix"> </div>
								<p class="lorem">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't.</p>
							</div>
							<div class="clearfix"> </div>
						</div>
					</div>
					<div class="leave-comment">
						<h4>Leave your comment</h4>
						<p>Suspendisse tempor tellus sed nisl semper, quis condimentum turpis pharetra.</p>
						<form>
							<input type="text" placeholder="Name" required=" ">
							<input type="text" placeholder="Email" required=" ">
							<input type="text" placeholder="Your Website" required=" ">
							<textarea placeholder="Message" required=" "></textarea>
							<input type="submit" value="Submit">
							<div class="clearfix"> </div>
						</form>
					</div>
				</div>
				<!-- //single -->
			</div>
			<div class="clearfix"> </div>
		</div>
	</div>
</template>

<script>
import LeftNavOneComponent from '../../components/leftNavOne.vue';
export default {
	components: {
		LeftNavOneComponent
	},

	data() {
		return {
			blogDetail: {},
			
		}
	},
	beforeCreate: function () {
        
        },

	created() {
	 let id = this.$route.params.id;
     this.getBlogDetail(id);
	},
	mounted(){
	
	},
	updated: function () {
		let id = this.$route.params.id;
            this.getBlogDetail(id);
        },
	methods: {
       getBlogDetail(id){
         this.axios.get("http://123.207.26.246/api/Blog/GetBlogDetail/"+id+"").then(res => {
			let data = res.data;
		
		   this.blogDetail = data;
		   this.blogDetail.detail = data.detail.substring(1,data.detail.length-1);
			
		});
	   }
	}
}
</script>