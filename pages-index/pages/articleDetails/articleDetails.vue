<template>
	<view style="background: #FFFFFF; padding: 20rpx 30rpx;">
		<text style="font-size: 36rpx; font-weight: 600">
			{{article.title}}
		</text>
		<view class="img">
			<image :src="article.img" style="width: 100%;"></image>
		</view>
		<p class="article">
			{{article.content}}
		</p>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				article:{}
			}
		},
		onLoad: function (option) {
			this.article = JSON.parse(decodeURIComponent(option.item));
			console.log(this.article)
		},
		methods: {
			
		}
	}
</script>

<style>
	.article{
		margin-top: 30rpx;
		line-height: 1.5;
		text-indent: 2em;
	}
</style>
