<template>
		<view class="">
			<view class="page-section swiper">
				<view class="page-section-spacing">
					<swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration" indicator-color="#fff" indicator-active-color="red" circular="true" previous-margin="20upx" next-margin="20upx">
						<swiper-item v-for="inds in imagesurl" :key="inds">
							<image class="swiper-item" :src="inds" mode=""></image>
						</swiper-item>
					</swiper>
				</view>
			</view>
			<view class=" newapptit ">
				<view class="newtitlenow">
					集团要闻
					<view class="gebnduo">
						<navigator class="is-item " url="">
						更多
						</navigator>
					</view>
					
				</view>
				<view class="s-page">
					<view class="s-row">
						<view class="s-col is-col-24">
							<view class="s-list has-mgt-0  nageshd">
				
								<navigator class="is-item " v-for="(item,index) in newAPPLEST" :key="index" :url="item.url">
									<view class="is-item-bd is-block is-oneline setde" >
										<view>{{item.title}}</view>
									</view>
								</navigator>
				
							</view>
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
            background: ['color1', 'color2', 'color3'],
			imagesurl: ['../../../static/img/img/img.png','../../../static/img/img/img1.png','../../../static/img/img/img2.png','../../../static/img/img/img3.png'],
            indicatorDots: true,
            autoplay: true,
            interval: 2000,
            duration: 500,
			newAPPLEST:[
				{
					title: "“会眼”看华电——打好三大攻坚战推动高质量发展",
					url:''
				},
								{
					title: "“会眼”看华电——打好三大攻坚战推动高质量发展",
					url:''
				},
								{
					title: "《人民日报》两会寄语 | 全国人大代表温枢刚：推进“三个转变” 创建“世界一流",
					url:''
				},
				{
					title: "“会眼”看华电——打好三大攻坚战推动高质量发展",
					url:''
				},
				{
					title: "“会眼”看华电——打好三大攻坚战推动高质量发展",
					url:''
				},
				{
					title: "“会眼”看华电——打好三大攻坚战推动高质量发展",
					url:''
				},
				{
					title: "“会眼”看华电——打好三大攻坚战推动高质量发展",
					url:''
				}
			]
		};
	},
	onLoad() {
		
	},
	methods: {

	}
};
</script>

<style>
.content {
	/* text-align: center; */
	/* height: 400upx; */
	/* margin-top: 200upx; */
}
.uni-bg-green{
	background-color: green;
}
.uni-bg-red{
	background-color: red;
}
.uni-bg-blue{
	background-color: blue;
}
.swiper-item{
	width: 100%;
	height: 400upx;
	text-align: center;
	line-height: 400upx;
}
.swiper{
	height: 400upx;
}
.newapptit{
	margin-top: 60upx;
}
.newtitlenow{
	margin-left: 40upx;
	margin-bottom: 20upx;
	font-size: 45upx;
	display: block;
}
.setde{
	height: 60upx;
}
.gebnduo{
/* 	position: absolute;
	right: 0upx;
	top: 460upx; */
	float: right;
	margin-right: 20upx;
	margin-top: -10px;
	font-size: 34upx;
	color: #353535;
}
</style>
