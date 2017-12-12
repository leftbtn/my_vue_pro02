<template>
<div class="col-xs-3 banner-body-left">
				<div class="latest-news">
					<h2>登录与注册</h2>
					<div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
					  <div class="panel panel-default">
						<div class="panel-heading" role="tab" id="headingOne">
						  <h4 class="panel-title">
							<a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
							  登录
							</a>
						  </h4>
						</div>
						<div id="collapseOne" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
						  <div class="panel-body">
						<div class="input-group">
								<span class="input-group-addon" id="l-account">帐号</span>
								<input type="text" class="form-control" placeholder="Account" aria-describedby="l-account">
							</div>
                        <div class="input-group">
								<span class="input-group-addon" id="l-password">密码</span>
								<input type="text" class="form-control" placeholder="Password" aria-describedby="l-password">
							</div>
                            <a href="#"><span class="label label-warning">登录</span></a>
                           
						  </div>
						</div>
					  </div>
					  <div class="panel panel-default">
						<div class="panel-heading" role="tab" id="headingTwo">
						  <h4 class="panel-title">
							<a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
							  注册
							</a>
						  </h4>
						</div>
						<div id="collapseTwo" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
						  <div class="panel-body">
							<div class="input-group">
								<span class="input-group-addon" id="r-account">帐号</span>
								<input type="text" class="form-control" placeholder="Account" aria-describedby="r-account">
							</div>
                        <div class="input-group">
								<span class="input-group-addon" id="r-password">密码</span>
								<input type="text" class="form-control" placeholder="Password" aria-describedby="r-password">
							</div>
                          
                            <a href="#"><span class="label label-danger">注册</span></a>
						  </div>
						</div>
					  </div>
					  
					</div>
				
					<h3>Benefits</h3>
					<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
				</div>
			</div>
</template>
<script>
export default {};
</script>
<style>
.panel-body .label{
    font-size: 100%;
}
.panel-body .label.label-warning{
display: inline-block;
width: 100%;
}
.panel-body .label.label-danger{
display: inline-block;
width: 100%;
}
</style>
