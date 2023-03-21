<template>
	<view>
		<view style="position: fixed; width: 100%;top: 0;left: 0;">
			<view class="title">
				<text style="font-weight: 600; font-size: 32rpx; border-bottom: 4rpx solid #f9cce1;">
					动态分享
				</text>
				<image src="../../../static/icon/tabber/my1.png" style="width: 60rpx; height: 60rpx;" @click="mySpace"></image>
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
						name:'风凉',
						content:'在这里，终于可以把想说的说出来了，以前总是不敢说。',
						like:9
					},
					{
						head:'../../../static/img/head1.png',
						name:'秋又来了',
						content:'大家都分享分享自己是怎么过来的吧',
						like:12
					},
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
			mySpace(){
				uni.navigateTo({
					url:'../mySpace/mySpace'
				})
			}
		}
	}
</script>

<style>
	.title{
		display: flex;
		justify-content: space-between;
		padding: 20rpx 30rpx;
		background-color: #FFFFFF;
	}
	.sharelist{
		padding: 20rpx 30rpx;
		margin-top: 60rpx;
	}
</style>
