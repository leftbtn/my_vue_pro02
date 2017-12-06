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
									<li class="active"><router-link to="/home"><i class="home"></i>主页</router-link></li>
									<li><router-link to="/home"><i class="picture1"></i>照片</router-link></li>
									<li><router-link to="/blog"><i class="edit1"></i>博客</router-link></li>
									<li><router-link to="/home"><i class="text-size1"></i>新闻</router-link></li>
									<li><router-link to="/home"><i class="envelope1"></i>联系我们</router-link></li>
								</ul>
							</nav>
						</div>
						<!-- /.navbar-collapse -->
					</nav>
				</div>
			</div>
</template>