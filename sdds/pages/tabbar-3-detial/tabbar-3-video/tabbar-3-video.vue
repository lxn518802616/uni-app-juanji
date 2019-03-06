<template>
	<view class="content">
			<view class="content">
			uuid: {{ uuid }}
			<br>
			imei: {{ imei }}
			<br>
			imsi: {{ imsi }}
			<br>
			cid: {{ cid }}
			<br>
			手机型号： {{ model }}
			<br>
			手机sdk： {{ SDKVersion }}
			<br>
			手机品牌： {{ brand }}
			<br>
			手机厂家： {{ vendor }}
			<br>
			token: {{ tokens }}
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				uuid: '',
				imei: '',
				imsi: '',
				cid: '',
				model: '',
				brand: '',
				SDKVersion: '',
				vendor: '',
				tokens: ''
			}
		},
		onLoad() {
			this.plusReady();
		},
		methods: {
		    plusReady() {
					this.uuid = plus.device.uuid; 
					this.imei = plus.device.imei;
					this.imsi = plus.device.imsi
					this.vendor = plus.device.vendor
					this.cid = plus.push.getClientInfo().clientid;
					 try{
					 	this.tokens = uni.getStorageSync('token');
					 }catch(e){
					 	//TODO handle the exception
						this.tokens = '取不到';
					 }
					try {
						const res = uni.getSystemInfoSync();
						this.model = res.model;
						
						this.SDKVersion = res.SDKVersion;
						this.brand = res.brand;
					} catch (e) {
						// error
					}
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
