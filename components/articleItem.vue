<template>
	    <view class="articletem" @click="articleDetails">
			<view style="flex-shrink:0">
				<image :src="article.img" style="width: 200rpx; height: 150rpx; border-radius: 30rpx;"></image>
			</view>
			<view class="articleInfo">
				<text style="font-size: 30rpx; font-weight: 600">
					{{article.title}}
				</text>
				<view class="content">
				  {{ article.content }}
				</view>
			</view>
	    </view>
</template>

<script>
	export default {
		name:"articleItem",
		props:{
			article:{
				type:Object,
				default:{
					img:'../../../static/img/5.jpg',
					  title: '艾滋病常见症状',
					  head: '../../../static/img/head1.png',
					  name: '阿西吧',
					  content:
					    'HIV感染者要经过数年、甚至长达10年或更长的潜伏期后才会发展成艾滋病病人，因机体抵抗力极度下降会出现多种感染，如带状疱疹、口腔霉菌感染、肺结核，特殊病原微生物引起的肠炎、肺炎、脑炎，念珠菌、肺孢子虫等多种病原体引起的严重感染等，后期常常发生恶性肿瘤，并发生长期消耗，以至全身衰竭而死亡。'
				}
			}
		},
		data() {
			return {
				
			};
		},
		methods:{
			articleDetails(){
				uni.navigateTo({
					url:'/pages-index/pages/articleDetails/articleDetails?item='+ encodeURIComponent(JSON.stringify(this.article))
				})
			}
		}
	}
</script>

<style>
	.articletem {
		display: flex;
	  margin-bottom: 20rpx;
	  padding: 20rpx 30rpx;
	  background: #ffffff;
	  border-radius: 30rpx;
	}
	.articleInfo{
		margin-left: 20rpx;
	}
	.content {
		margin-top: 20rpx;
	  overflow: hidden;
	  text-overflow: ellipsis;
	  display: -webkit-box;
	  -webkit-box-orient: vertical;
	  -webkit-line-clamp: 2;
	}
</style>
