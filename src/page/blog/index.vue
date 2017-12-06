<template>
<div class="container">
<div class="banner-body-content"> 
<LeftNavOneComponent></LeftNavOneComponent>
<div class="col-xs-9 banner-body-right">
			<TitleBarComponent></TitleBarComponent>
				<div class="blog">
					<div class="blog-grid">
						<div class="col-xs-4 blog-grid-left">
							<a href="single.html"><img src="../../assets/images/1.jpg" alt=" " class="img-responsive"></a>
						</div>
						<div class="col-xs-8 blog-grid-right">
							<h4><a href="single.html">sint occaecat cupidatat non proident</a></h4>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
								tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
								quis nostrud exercitation.</p>
							<a href="single.html"><span class="glyphicon glyphicon-play-circle" aria-hidden="true"></span></a>
						</div>
						<div class="clearfix"> </div>
					</div>
					<div class="blog-grid">
						<div class="col-xs-4 blog-grid-left">
							<a href="single.html"><img src="../../assets/images/2.jpg" alt=" " class="img-responsive"></a>
						</div>
						<div class="col-xs-8 blog-grid-right">
							<h4><a href="single.html">Sed ut perspiciatis unde omnis iste natus</a></h4>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
								tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
								quis nostrud exercitation.</p>
							<a href="single.html"><span class="glyphicon glyphicon-play-circle" aria-hidden="true"></span></a>
						</div>
						<div class="clearfix"> </div>
					</div>
					<div class="blog-grid">
						<div class="col-xs-4 blog-grid-left">
							<a href="single.html"><img src="../../assets/images/3.jpg" alt=" " class="img-responsive"></a>
						</div>
						<div class="col-xs-8 blog-grid-right">
							<h4><a href="single.html">At vero eos et accusamus et iusto odio</a></h4>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
								tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
								quis nostrud exercitation.</p>
							<a href="single.html"><span class="glyphicon glyphicon-play-circle" aria-hidden="true"></span></a>
						</div>
						<div class="clearfix"> </div>
					</div>
				</div>
			</div>


            <div class="clearfix"> </div>
</div>
</div>
</template>


<script>
import LeftNavOneComponent from '../../components/leftNavOne.vue';
import TitleBarComponent from '../../components/titleBar.vue';
export default{
    components: {
    LeftNavOneComponent,
      TitleBarComponent
  },
}


</script>