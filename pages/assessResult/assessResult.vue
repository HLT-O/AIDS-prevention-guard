<template>
  <view class="container">
    <view class="header">
      <u-icon name="checkmark-circle-fill" color="#4bc268" size="50"></u-icon>
      <view class="title">
        <view class="result">极低</view>
        <view class="desc">HIV风险评估结果</view>
      </view>
    </view>
    <view class="body">
      <view class="res">您感染艾滋病毒的风险属于极低。</view>
      <view
        >而您有使用安全套，感染其他性病的风险属于低。请持续地进行安全性行为，预防艾滋病及性病感染。</view
      >
      <view class="advice">健康贴士</view>
      <view class="tips">使用安全套</view>
      <view>持续及正确地使用安全套将有效预防艾滋病病毒及性传染的感染。</view>
      <view class="tips">按时服用接触前预防性投药(PrEP)</view>
      <view
        >持续及按时服用接触前预防性投药(PrEP)为一种预防艾滋病感染的重要额外措施,能够有效减低经性行为感染艾滋病病毒的风险。</view
      >
      <view class="tips">按时服用HARRT</view>
      <view>
        当艾滋病病毒感染者持续及正确地服用抗逆转录病毒疗法,将有效地减少感染者血液内的病毒量，并将艾滋病病毒量达致不可检测水平。这有效将传播风险大大减低。根据PARTNER研究显示，达致不能检测病毒量的艾滋病病毒感染者传播艾滋病病毒机会接近零。
      </view>
      <view class="bottom">
        <view class="btn">
          <button
            style="
              flex: 0.3;
              background-color: #e03d3d;
              color: #fff;
              font-size: 30rpx;
            "
            @click="applicationReagent"
          >
            申领试剂
          </button>
        </view>
        <view class="btn">
          <button
            style="
              flex: 0.3;
              background-color: #e03d3d;
              color: #fff;
              font-size: 30rpx;
            "
            @click="applicationReagent"
          >
            健康咨询
          </button>
        </view>
      </view>
      <view class="restart" @click="goAssess">重新评估</view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    applicationReagent() {
      this.$navgitateTo(
        {
          url: '/pages-index/pages/applicationReagent/applicationReagent'
        },
        true
      )
    },
    goAssess() {
      uni.navigateTo({
        url: '../assess/assess'
      })
    }
  }
}
</script>

<style scoped>
.container {
}

.header {
  display: flex;
  padding: 30rpx;
  padding-top: 20rpx;
}

.title {
  margin-left: 20rpx;
}

.title .result {
  font-size: 50rpx;
}

.title .desc {
  margin-top: 5rpx;
}

.body {
  background-color: white;
  border-radius: 20rpx;
  height: 100vh;
}

.body view {
  padding: 3rpx 25rpx;
}

.body .res {
  padding-top: 20rpx;
}

.body .advice {
  margin: 15rpx 0;
  color: #2481fb;
}

.body .tips {
  margin: 20rpx 0;
}

.body .bottom {
  display: flex;
  justify-content: space-between;
}

.body .btn {
  margin: 30rpx;
  width: 300rpx;
}

.body .restart {
  text-align: center;
  margin-bottom: 30rpx;
}
</style>
