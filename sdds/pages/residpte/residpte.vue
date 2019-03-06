<template>
	<view class="s-page-wrapper is-100vh">
		<view class="is-33vh has-mgt-10">
			<view class="is-flex is-column is-justify-center  is-align-center is-height-100">
				<image src="../../static/logo.png" mode="aspectFit" class="logoimg"></image>
			</view>
		</view>
		<view class="registercontent">
			<view class="has-mglr-10 ">
				<view class=" has-mgtb-10 ">
					<input type="number" maxlength="11" placeholder="请输入手机号" v-model="telnumber" class="is-input1 " />
				</view>
				<view class=" has-mgtb-10 ">
					<input type="number" maxlength="4" placeholder="短信验证码" class="is-input1 " v-model="yzmnumber" />
					<view class="codeimg" @tap="getsmscode">{{smsbtn.text}}</view>
				</view>

<!-- 				<view class=" has-radius has-mgtb-10">
					<input placeholder="请输入登录密码" :password="true" class="is-input1" />

				</view> -->
				<view class=" registerbtn has-radius has-mgtb-20">
					<button @tap="loginre">登 录</button>
				</view>
			</view>
		</view>
		<view class="is-20vh has-mgt-80">
			<navigator url="#" class=" has-radius is-center is-grey " hover-class="">
				<text>登录即表示同意</text><text class="is-blue">《用户协议》</text>
			</navigator>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				smsbtn: {
					text: '获取验证码',
					status: false,
					codeTime: 300
				},
				timerId: null,
				telnumber: '',
				yzmnumber: '',
			};
		},
		methods: {
			getsmscode() {
				let numbeidtel = /^(1+\d{10})$/
				if(!numbeidtel.test(this.telnumber)){
					uni.showToast({
							icon: "none",
							title: '请输入正确手机号',
							duration: 2000
						});
					return false;
				}
				if( 300 > this.smsbtn.codeTime >= 1) {return false;}

				this.timerId = setInterval(() => {
						var codeTime = this.smsbtn.codeTime;
						codeTime--;
						this.smsbtn.codeTime = codeTime;
						this.smsbtn.text = codeTime + "S";
						if (codeTime < 1) {
							clearInterval(this.timerId);
							this.smsbtn.text = "重新获取";
							this.smsbtn.codeTime = 300;
							this.smsbtn.status = false;
						}
					},
					1000);
					// 发送验证码
					uni.request({
						url: this.$url + '/Msg/sendVerfiyCode', //仅为示例，并非真实接口地址。
						method: 'POST',
						data: JSON.stringify({phone: this.telnumber }),
						header:{
							'content-type': "application/json"
						},
						success: (res) => {
							if(res.data.status == 200){
								uni.showToast({
									icon: "success",
									title: '发送成功',
									duration: 2000
								});
							}else if(res.data.status == 11){
								uni.showToast({
									icon: "success",
									title: '验证码已发送',
									duration: 2000
								});
							}
						}
					});	
// 					// 防
				return false;
			},
			
			loginre(){ 
				var uuid = "";
				let imei = "";
				let imsi = "";
				let vendor = "";
				let cid = "";
				let model = "";

				uuid = plus.device.uuid; 
				imei = plus.device.imei;
				imsi = plus.device.imsi;
				vendor = plus.device.vendor;
				cid = plus.push.getClientInfo().clientid;
				 try{
					 // this.tokens = uni.getStorageSync('token');
				 }catch(e){
					 //TODO handle the exception
					// this.tokens = '取不到';
				 }
				try {
					const res = uni.getSystemInfoSync();
					model = res.model;
				} catch (e) {
					// error
				}
				let datas = {
					phone: 	this.telnumber,
					verifyCode: this.yzmnumber,
					uuid: uuid,
					imei: imei,
					imsi: imsi,
					cid:  cid,	
					phone_type: model,
					phone_factory: vendor,
				}
				console.log(datas)
				uni.request({
					url: this.$url + '/loginMsg/login', //仅为示例，并非真实接口地址。
					method: 'POST',
					data: JSON.stringify(datas),
					header:{
						'content-type': "application/json"
					},
					success: (res) => {
						console.log(res.data)
						if(res.data.code == 200 ){
							if (res.data.data.uuid == uuid) {
								uni.setStorageSync('token', res.data.data.token );
								uni.setStorageSync('name', res.data.data.name );
								uni.setStorageSync('cyb', res.data.data.cyb );
								uni.reLaunch({
									url: '../tabbar/tabbar-1/tabbar-1'
								});
							}else{
								uni.showToast({
									icon: "none",
									title: '登录失败，请重试',
									duration: 2000
								});
							}

						}else if(res.data.status == 12 ){
								uni.showToast({
									icon: "none",
									title: '验证码错误',
									duration: 2000
								});
						}
					}
				});
			}

		}
	}
</script>

<style>
	page {
		min-height: 100%;
		background-color: #FFFFFF;
	}

	.registercontent {
		width: 85%;
		margin: 0 auto;
	}

	.logoimg {
		width: 200upx;
		height: 200upx;
		border-radius: 50%;
	}

	.is-input1 {
		height: 88upx;
		width: 100%;
		line-height: 88upx;
		/* padding: 12upx; */
		color: #353535;
		font-size: 32upx;
		box-sizing: border-box;
		appearance: none;
		border: 2upx solid #e5e5e5;
		box-shadow: none;
		border-radius: 44upx;
		outline: 0;
		display: block;
		padding-left: 30upx;
		margin: 0;
		font-family: inherit;
		background: #fff;
		resize: none;
	}

	.iconfont {
		position: absolute;
		font-size: 40upx;
		right: 12%;
		z-index: 999;
		width: 105upx;
		text-align: center;
		color: #353535;
		margin-top: -11%;
		background: #fff;
		border-top-right-radius: 44upx;
		border-bottom-right-radius: 44upx;
		height: 80upx;
		line-height: 80upx;
	}

	.codeimg {
		position: absolute;
		font-size: 28upx;
		right: 12%;
		z-index: 999;
		width: 200upx;
		text-align: center;
		color: #353535;
		margin-top: -11%;
		background: #fff;
		border-top-right-radius: 44upx;
		border-bottom-right-radius: 44upx;
		height: 80upx;
		line-height: 80upx;
	}

	.registerbtn button {
		margin-top: 20upx;
		height: 88upx;
		width: 100%;
		line-height: 88upx;
		color: #ffffff;
		font-size: 32upx;
		border-radius: 44upx;
		outline: 0;
		display: block;
		margin: 0;
		font-family: inherit;
		background: #00AAEA;
		opacity: 0.8;
	}

	button:after {
		border: 2upx solid #f2f2f2;
	}
</style>

