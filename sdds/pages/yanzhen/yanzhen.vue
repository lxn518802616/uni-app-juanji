<template>
	<view>
		<view class="is-flex is-column is-justify-center  is-align-center is-height-100">
			<image src="../../static/logo.png" mode="aspectFit" class="logoimg"></image>
			<view class="title">
				华电集团
				<br>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		onLoad() {
			this.yanzheng();
		},
		methods:{
			yanzheng(){
				let token = uni.getStorageSync('token') || 'nonedes'; 
				console.log(token)
				// let uuid = plus.device.uuid; 
				if(token == 'nonedes'){
					uni.reLaunch({
						url: '../residpte/residpte'
					});
				}else{
					let datas = {
						token,
						// uuid
					}
						uni.request({
							url: this.$url + '', //仅为示例，并非真实接口地址。
							method: 'POST',
							data: JSON.stringify(datas),
							header:{
								'content-type': "application/json"
							},
							success: (res) => {
// 								console.log(res.data)
// 		// 						if(res.data.code == 200 ){
// 		// 							uni.setStorageSync('token', res.data.data.token );
// 		// 						}
							}
						});
				}
			}
		}
	}
</script>

<style>
	.logoimg {
		margin-top: 30%;
		width: 400upx;
		height: 400upx;
		border-radius: 50%;
	}
	.title{
		font-size: 100upx;
		color:#BBBBBB;
	}
</style>
