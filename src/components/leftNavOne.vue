<template>
<div class="col-xs-3 banner-body-left">
				<div class="logo">
					<h1><router-link to="/home">Great <span>Taste</span></router-link></h1>
				</div>
				<div class="top-nav">
					<nav class="navbar navbar-default">
						<!-- Brand and toggle get grouped for better mobile display -->
						<div class="navbar-header">
						  <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
							<span class="sr-only">Toggle navigation</span>
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
						  </button>
						</div>

						<!-- Collect the nav links, forms, and other content for toggling -->
						<div class="collapse navbar-collapse nav-wil" id="bs-example-navbar-collapse-1">
							<nav class="stroke">
								<ul class="nav navbar-nav">
									<li><router-link to="/home" :class="normal"><i class="home"></i>主页</router-link></li>
									<li style="display:none"><router-link to="/#" :class="normal"><i class="picture1"></i>照片</router-link></li>
									<li><router-link to="/blog" :class="normal"><i class="edit1"></i>博客</router-link></li>
									<li style="display:none"><router-link to="#" :class="normal"><i class="text-size1"></i>新闻</router-link></li>
									<li style="display:none"><router-link to="/#" :class="normal"><i class="envelope1"></i>联系我们</router-link></li>
								</ul>
							</nav>
						</div>
						<!-- /.navbar-collapse -->
					</nav>
				</div>
			</div>
</template>

<script>
export default{
	data(){
		return{
			normal:"hvr-underline-from-left",
		}
		
	}
}
</script>


<style>

.navbar-default .navbar-nav li a.active{
    color: #D57D39 !important;
    background: transparent;
    border-bottom: 1px solid;

}
.navbar-default .navbar-nav li a.active i.home{
    background: url(../assets/images/img-sp.png) no-repeat -20px -282px;
    display: inline-block;
    width: 18px;
    height: 18px;

}

.navbar-default .navbar-nav li a i.home{
    background: url(../assets/images/img-sp.png) no-repeat -20px -240px;
    display: inline-block;
    width: 18px;
    height: 18px;

}



.navbar-default .navbar-nav li a.active i.picture1{
   background: url(../assets/images/img-sp.png) no-repeat -97px -287px;
    display: inline-block;
    width: 18px;
    height: 18px;

}
.navbar-default .navbar-nav li a.active i.edit1{
    background: url(../assets/images/img-sp.png) no-repeat -182px -287px;
    display: inline-block;
    width: 18px;
    height: 18px;

}
.navbar-default .navbar-nav li a.active i.text-size1{
    background: url(../assets/images/img-sp.png) no-repeat -274px -288px;
    display: inline-block;
    width: 18px;
    height: 18px;

}

.navbar-default .navbar-nav li a.active i.envelope1{
    background: url(../assets/images/img-sp.png) no-repeat -354px -240px;
    display: inline-block;
    width: 18px;
    height: 18px;

}
</style>