<template>
	<view class="content">
		<sunsin-upimg url="http://www.luoxiaoning.top:3000/wxxcxnode/uploadImg" :count="9" :autoplay="true"  @onUpImg="upImgData" />
	</view>
</template>

<script>
	import sunsinUpimg from '../../../components/sunsin-upimg.vue';
	export default {
		components: {
			sunsinUpimg
		},
		data() {
			return {};
		},
		methods:{
			upImgData(e){
					uni.showToast({
								icon: "success",
								title: '上传成功',
								duration: 2000,
					});
					setTimeout(()=>{
						uni.reLaunch({
							url: '../../tabbar/tabbar-4/tabbar-4'
						});
					},2100)
			}			
		}
	};
</script>

<style>
	.content {
		text-align: center;
		height: 400upx;
		margin-top: 200upx;
	}
</style>
