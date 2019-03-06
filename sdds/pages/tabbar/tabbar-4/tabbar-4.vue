<template>
	<view class="content">
	<view class="s-page">
		<view class="s-row">
			<view class="s-col is-col-24">
				<view class="s-list has-mgt-0">

					<navigator class="is-item " v-for="(item,index) in pageData" :key="index" :url="item.url">
						<view class="is-item-bd is-block is-oneline" >
							<view>{{item.title}}</view>
						</view>
					</navigator>

				</view>
			</view>
		</view>
	</view>
	</view>
</template>

<script>

	export default {
		data() {
			return {
				pageData:[
					{
						title:"2019-02-28",
						url :"/pages/goods/grids",
					},
					{
						title:"2019-02-27",
						url :"/pages/error/error",
					},
					{
						title:"2019-02-26",
						url :"/pages/error/errordesc",
					},
					{
						title:"2019-02-25",
						url :"/pages/error/info",
					},
					{
						title:"2019-02-24",
						url :"/pages/error/select",
					},
					{
						title:"2019-02-23",
						url :"/pages/content/content",
					},
					{
						title:"2019-02-22",
						url :"/pages/ucenter/index",
					},
					{
						title:"2019-02-21",
						url :"/pages/ucenter/login",
					},
					{
						title:"2019-02-20",
						url :"/pages/ucenter/register",
					},
					{
						title:"2019-02-19",
						url:"/pages/pro/action-sheet",
					},
					{
						title:"2019-02-18",
						url:"/pages/pro/alert",
					},
					{
						title:"2019-02-17",
						url:"/pages/pro/alert",
					},
					{
						title:"2019-02-16",
						url:"/pages/pro/alert",
					},
					{
						title:"2019-02-15",
						url:"/pages/pro/alert",
					},
					{
						title:"2019-02-14",
						url:"/pages/pro/alert",
					},
					{
						title:"2019-02-13",
						url:"/pages/pro/alert",
					}
				]
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
	.content {
		/* text-align: center; */
		height: 400upx;
		/* margin-top: 200upx; */
	}
</style>
