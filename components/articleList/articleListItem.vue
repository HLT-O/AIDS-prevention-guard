<template>
  <view class="articleListItem">
    <view class="title">
      {{ article.title }}
    </view>
    <view class="content" v-html="article.content"> </view>
  </view>
</template>

<script>
export default {
  props: ['article']
}
</script>

<style scoped lang="scss">
.articleListItem {
  margin: 0 auto;
  margin-top: 20rpx;
  margin-bottom: 20rpx;
  padding: 0 40rpx;
  width: 80%;
  background-color: #fff;
  border-radius: 20rpx;
  box-shadow: 2px 2px 2px 2px rgba(238, 238, 238, 0.938);
  .title {
    padding-top: 30rpx;
    font-weight: bold;
    padding-bottom: 30rpx;
  }
  .content {
    font-size: 33rpx;
    padding-bottom: 30rpx;
  }
}
</style>
