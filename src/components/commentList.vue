<template>
	<div class="three-com">
		<h3>2 Comment
			<span>on</span>
			<label>Donec volutpat ligula non dapibus volutpat</label>
		</h3>
		
		<div class="tom-grid humour" v-for="item in commentList">
			<div class="tom">
				<img src="../assets/images/co.png" alt=" ">
			</div>
			<div class="tom-right">
				<div class="Hardy">
					<h4>
						<a href="javascrit:;">{{item.userName}}</a>
					</h4>
					<p>
						<label>{{item.createDateTime}}</label>
					</p>
				</div>

				<div class="clearfix"> </div>
				<p class="lorem">{{item.details}}</p>
				<div class="reply">
					<a href="javacript:;" @click="dialogFormVisible = true">回复</a>
				</div>
				<div class="clearfix"> </div>
				<ul class="second-comment" v-if="item.ReplyList ">
					
                    <li class="second-content" v-for="i in item.ReplyList">
						<p class="lorem">
							<span class="from-user"> {{i.FromAccount}} @{{i.ToAccount}}：</span>
						</p>
						<p class="lorem click-reply">{{i.details}}.</p>
					</li>
				</ul>

			</div>
			<div class="clearfix"> </div>
		</div>


		<el-dialog title="@达文西" :visible.sync="dialogFormVisible">
			<el-form :model="form">
				<el-form-item label="回复：" :label-width="formLabelWidth">
					<el-input v-model="form.content" auto-complete="off"></el-input>
				</el-form-item>
				
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button type="warning" @click="dialogFormVisible = false">确 定</el-button>
			</div>
		</el-dialog>

	</div>
</template>

<script>
export default {
  	props: {
		commentList: {

		}
	},
	  data() {
    return {
      dialogFormVisible: false,
      form: {
        content: "",
        delivery: false,
		replyName:"",
      },
	  formLabelWidth: "100px",
	  
    };
  },
};
</script>
<style>
.reply {
  float: right;
  margin: 0px;
  padding: 0px;
  font-weight: normal;
}
.three-com {
  font-family: "Microsoft YaHei" !important;
}
.second-content .lorem {
  margin: 0px !important;
}
.second-content .from-user {
  color: #d57d39;
  font-size: 1em;
  font-style: normal;
  margin: 0;
}
.second-comment {
  list-style: none;
}
.el-input.is-active .el-input__inner, .el-input__inner:focus{
	border-color:#e6a23c !important
}
</style>


