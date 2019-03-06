<template>
	<view class="content">
		<image :src="srcs" mode="scaleToFill"></image>
		<button type="primary" @click="uploadimg">上传图片</button>


	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				imagesurl : '',
				srcs: ''
			}
		},
		onLoad() {

		},
		methods: {
			uploadimg(){
				var thats = this;
				uni.chooseImage({
					count: 6, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album','camera'], //从相册选择
					success: function (res) {
// 						console.log(res.tempFilePaths);
// 						console.log(res.tempFiles);
// 						console.log((res.tempFiles[0].path));
// 						this.imagesurl = res.tempFilePaths;\
						thats.srcs = res.tempFilePaths[0]
						console.log(thats.srcs)
// 							uni.previewImage({
// 								urls: res.tempFilePaths,
// 								loop: true,
// 								indicator: "number",
// 							});
// 							const tempFilePaths = res.tempFilePaths;
// 							 uni.uploadFile({
// 								url: 'http://www.luoxiaoning.top:3000/wxxcxnode/uploadImg', //仅为示例，非真实的接口地址
// 								// files: tempFilePaths,
// 								filePath: tempFilePaths[0],
// 								name: 'file',
// 								formData: {
// 									'user': 'test'
// 								},
// 								success: (uploadFileRes) => {
// 									 console.log(uploadFileRes.data);
// 								}
							// });
							
// 							uploadTask.onProgressUpdate((res) => {
// 								console.log('上传进度' + res.progress);
// 								console.log('已经上传的数据长度' + res.totalBytesSent);
// 								console.log('预期需要上传的数据总长度' + res.totalBytesExpectedToSend);
// 
// 								// 测试条件，取消上传任务。
// 								if (res.progress > 50) {
// 									uploadTask.abort();
// 								}
// 							});





					}
				});
			}
		}
	}
</script>

<style>
	.content {
		text-align: center;
		height: 400upx;
		margin-top: 200upx;
	}
</style>
