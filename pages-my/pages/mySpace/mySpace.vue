<template>
	<view>
		<view class="top">
			<view style="background:#f9cce1;height:100rpx"></view>
			<view style="background:#FFFFFF;height:100rpx"></view>
			<view style="height:100rpx"></view>
			<view class="myInfo">
				<view>
					<image src="../../../static/img/head1.png" style="width: 100rpx;height: 100rpx; border-radius: 999px;"></image>
				</view>
				<view class="info">
					<text>逃避</text>
					<text>热爱生活</text>
				</view>
			</view>
		</view>
		<view class="sharelist">
			<share v-for="(item,index) in chareList" :key="index" :shareData="item"></share>
		</view>
	</view>
</template>

<script>
	import share from '../../components/share/share.vue'
	export default {
		components:{
			share
		},
		data() {
			return {
				chareList:[
					{
						head:'../../../static/img/head1.png',
						name:'逃避',
						content:'终于感觉到这个世界的美好了。',
						like:3
					},
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	.top{
		position: relative;
	}
	.myInfo{
		background-color: #ffffff;
		padding: 20rpx 30rpx;
		border-radius: 30rpx;
		display: flex;
		padding: 60rpx 50rpx;
		position: absolute;
		width: 80%;
		top:50%;
		left:50%;
		transform: translate(-50%,-60%);
	}
	.info{
		margin-left: 50rpx;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
	}
	.sharelist{
		padding: 20rpx 30rpx;
		margin-top: -70rpx;
	}
</style>
