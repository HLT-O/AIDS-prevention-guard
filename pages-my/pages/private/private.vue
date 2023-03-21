<template>
	<view class="container">
		<view class="content" @click="enter">
				<text>你还未开启隐私空间功能</text>
				<text>点击此处开启隐私空间功能</text>
				<text style="color: #f9cce1;">(该功能只对艾滋病人开放)</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			enter(){
				uni.navigateTo({
					url:'../HIVExamine/HIVExamine'
				})
			}
		}
	}
</script>

<style>
	.container{
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.content{
		margin-top:400rpx;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.content>text{
		margin-bottom: 20rpx;
		color: #919191;
	}
</style>
