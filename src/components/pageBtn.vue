<template>
	<div>
		<ul class="pagination pagination-sm">
			<li :class="pageData.pageIndex == 1?'disabled':''" v-on:click="PreAndLaterPageIndex(true)">
				<a href="javacript:;">
					<i class="fa fa-angle-left">«</i>
				</a>
			</li>

			<li v-for="index in Html" v-on:click="upDataPageIndex(index.index)" :class="index.cur">
				<a href="javaccript:;">{{index.index}}</a>
			</li>

			<li :class="pageData.pageIndex == pageData.totalPage?'disabled':''" v-on:click="PreAndLaterPageIndex(false)">
				<a href="javascript:;">
					<i class="fa fa-angle-right">»</i>
				</a>
			</li>
		</ul>

	</div>
</template>
<script>
export default {
	props: {
		pageData: {

		}
	},
	data() {
		return {
			Html: [],

		}

	},
	mounted() {
		this.initData();
	},
	updated() {

	},
	methods: {
		upDataPageIndex(index) {
			this.$emit('upup', '' + index + ''); //主动触发upup方法，'hehe'为向父组件传递的数据
		},
		PreAndLaterPageIndex(val) {
			let nowPage = this.pageData.pageIndex;
			let goPage; //val ? nowPage - 1 : parseInt(nowPage)  + 1; 
			if (val) {
				goPage = nowPage - 1;
				if (goPage <= 1) { goPage = 1 }
			} else {
				goPage = parseInt(nowPage) + 1;
				if (goPage >= this.pageData.totalPage) { goPage = this.pageData.totalPage; }
			}
        
			this.$emit('upup', '' + goPage + ''); //主动触发upup方法，'hehe'为向父组件传递的数据
		},
		initData() {
			let data = this.pageData;
			let pageArry = [];
			for (let i = 1; i <= data.totalPage; i++) {
				let Idata = new Object();
				Idata.index = i;
				Idata.cur = i == data.pageIndex ? "active" : "";
				pageArry.push(Idata);
			}

			this.Html = pageArry;
			this.pageIndex = data.pageIndex;
		}
	},
	watch: {
		pageData(curVal, oldVal) {
			this.initData();
		　　　　　　　　},
		　　　　　　　　example1: '',//值可以为methods的方法名
		　　　　　　　　example2: {
			　　　　　　　　　//注意：当观察的数据为对象或数组时，curVal和oldVal是相等的，因为这两个形参指向的是同一个数据对象
			　　　　　　　　　　handler(curVal, oldVal) {

			　　　　　　　　　　},
			　　　　　　　　　　deep: true
		　　　　　　　　}
	　　　　　　},
}
</script>




<style>
.pagination.pagination-sm {
	float: right;
}

.pagination.pagination-sm li a {
	color: #D57D39;
}

.pagination.pagination-sm li.active a {
	background: #D57D39;
	color: #fff;
	border-color: #D57D39;
}
</style>