<template>
  <view style="padding: 20rpx 30rpx">
    <text style="color: #8b8b8b">用户疑问:</text>
    <view style="padding: 20rpx 20rpx">
      <text>
        {{ diseaseInfo.symptom }}
      </text>
    </view>
    <view class="devider"></view>
    <text style="color: #8b8b8b">医生回复:</text>
    <view style="padding: 20rpx 20rpx">
      <text class="symptom">
        {{ diseaseInfo.cAnswer ? diseaseInfo.cAnswer : '未回复' }}
      </text>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      diseaseInfo: {}
    }
  },
  onLoad: function (option) {
    this.diseaseInfo = JSON.parse(decodeURIComponent(option.item))
  },
  methods: {}
}
</script>

<style>
.devider {
  margin: 20rpx 0;
  width: 100%;
  height: 2rpx;
  background-color: #dddddd;
}
</style>
