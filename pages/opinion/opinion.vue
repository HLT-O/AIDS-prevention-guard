<template>
  <view style="padding: 20rpx 20rpx">
    <u-toast ref="uToast"></u-toast>
    <view style="margin-bottom: 20rpx">在下方输入您的意见</view>
    <u--textarea v-model="value1" placeholder="请输入意见反馈"></u--textarea>
    <view style="padding: 100rpx 50rpx">
      <button
        type="primary"
        @click="commit"
        style="background-color: #e03d3d; color: #fff; font-size: 30rpx"
      >
        提交
      </button>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      value1: ''
    }
  },
  methods: {
    commit() {
      if (!this.value1) {
        this.$refs.uToast.show({
          type: 'error',
          icon: false,
          message: '意见反馈不能为空'
        })
        return
      } else {
        this.$refs.uToast.show({
          type: 'success',
          message: '提交成功',
          iconUrl: 'https://cdn.uviewui.com/uview/demo/toast/success.png'
        })
        setTimeout(() => {
          uni.navigateBack({})
        }, 1000)
      }
    }
  }
}
</script>

<style></style>
