<template>
  <view style="padding: 20rpx 30rpx">
    <view class="title"> 青少年预防艾滋病与性健康教育现状调查 </view>
    <view class="content">
      <view style="text-indent: 1em"
        >该问卷采用匿名方式，只作整体分析使用，并按照人民共和国统计法》的保密规定，不将数据泄露给任何个人和组织。</view
      >
      <view style="text-indent: 1em"
        >问卷仅用于分析青少年预防艾滋病与性教育现状。</view
      >
      <view style="text-indent: 1em"
        >如果你对本次调查有任何疑问，请与我们联系！</view
      >
    </view>
    <view
      class="action"
      @click="action"
      style="background-color: #e03d3d; color: #fff; font-size: 30rpx"
      >开始填写问卷</view
    >
  </view>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    action() {
      uni.navigateTo({
        url: '../questionnaireDetailed/questionnaireDetailed'
      })
    }
  }
}
</script>

<style>
.title {
  font-size: 34rpx;
  font-weight: 600;
  text-align: center;
}
.content {
  font-size: 30rpx;
  margin-top: 20rpx;
  line-height: 1.5;
}
.action {
  padding: 20rpx;
  margin: 100rpx auto 0;
  width: 60%;
  background-color: #80dbfe;
  color: #ffffff;
  font-weight: 600;
  text-align: center;
  border-radius: 999px;
}
</style>
