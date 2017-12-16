<template>
	<div class="col-xs-9 banner-body-right">
		<div class="wmuSlider example1">
			<div class="wmuSliderWrapper">
				<article style="position: absolute; width: 100%; opacity: 0;" v-for="item in CarouselList">
					<div class="banner-wrap">
						<div class="banner1" :style="'background:url('+ item.img +') no-repeat 0px 0px;'">
						</div>
					</div>
				</article>

			</div>
			<ul class="wmuSliderPagination">
			
			</ul>
		</div>

		<div class="banner-bottom">
			<div class="col-md-4 banner-left">
				<div class="col-xs-3 banner-left1">
					<div class="banner-left11">
						<span> </span>
					</div>
				</div>
				<div class="col-xs-9 banner-right1">
					<h3>cupidatat proi</h3>
				</div>
				<div class="clearfix"> </div>
				<p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui.</p>
			</div>
			<div class="col-md-4 banner-left">
				<div class="col-xs-3 banner-left1">
					<div class="banner-left22">
						<span> </span>
					</div>
				</div>
				<div class="col-xs-9 banner-right1">
					<h3>sint occaecat</h3>
				</div>
				<div class="clearfix"> </div>
				<p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui.</p>
			</div>
			<div class="col-md-4 banner-left">
				<div class="col-xs-3 banner-left1">
					<div class="banner-left33">
						<span> </span>
					</div>
				</div>
				<div class="col-xs-9 banner-right1">
					<h3>cupida quisu</h3>
				</div>
				<div class="clearfix"> </div>
				<p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui.</p>
			</div>
			<div class="clearfix"></div>
		</div>
	</div>
</template>
<script>
export default {
	props: {
		CarouselList: {

		}
	},

	computed: {


	},
	mounted() {
	},
	updated() {
      
             $('.example1').wmuSlider();
      
    }
}
</script>

