<template>
  <view style="padding: 20rpx 30rpx">
    <u-toast ref="uToast"></u-toast>
    <view class="addressContent">
      <view class="address">
        <view class="deliveryInfo" @click="slectAddress">
          <view class="info">
            <view>收货人: {{ address.name }}</view>
            <view style="margin-top: 10rpx"
              >收获地址: {{ address.address }}
            </view>
          </view>
          <view> 选择 > </view>
        </view>
      </view>
      <view
        class="tip"
        style="background-color: #e03d3d; color: #fff; font-size: 30rpx"
      >
        <u-icon name="lock" color="#FFFFFF"></u-icon>
        <text style="font-size: 24rpx; color: #ffffff; margin-left: 20rpx"
          >全程私密送货，保障您的隐私安全</text
        >
      </view>
    </view>
    <view class="reagentInfo">
      <image
        src="../../../static/img/HIVjc.jpg"
        style="width: 100%; border-radius: 30rpx; margin-bottom: 20rpx"
      ></image>
      <text>口腔粘膜液快速检验艾滋试剂 *1</text>
    </view>
    <view
      class="submit"
      @click="submit"
      style="background-color: #e03d3d; color: #fff; font-size: 30rpx"
      >立即申请</view
    >
  </view>
</template>

<script>
export default {
  data() {
    return {
      address: {
        name: '',
        address: ''
      }
    }
  },
  onShow() {
    let that = this
    //监听自定义事件
    uni.$on('setAddress', (res) => {
      that.setAddress(res)
      //清除监听，不清除会消耗资源
      uni.$off('setAddress')
    })
  },
  methods: {
    setAddress(data) {
      this.address = data
      console.log('data', data)
    },
    slectAddress() {
      uni.navigateTo({
        url: '/pages/address/address'
      })
    },
    submit() {
      if (this.address.name) {
        this.$refs.uToast.show({
          type: 'success',
          icon: false,
          message: '申请成功'
        })
        setTimeout(() => {
          uni.navigateBack({
            delta: 2,
            success() {
              let page = getCurrentPages().pop() //跳转页面成功之后
              page.onLoad() //如果页面存在，则重新刷新页面
            }
          })
        }, 1000)
      } else {
        this.$refs.uToast.show({
          type: 'error',
          icon: false,
          message: '请选择地址'
        })
      }
    }
  }
}
</script>

<style>
.addressContent {
  background-color: #e03d3d;
  border-radius: 32rpx;
}
.address {
  padding: 50rpx 30rpx;
  background-color: #ffffff;
  border-radius: 30rpx;
}
.positionIcon {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50rpx;
  height: 50rpx;
  background-color: #e03d3d;
  border-radius: 99px;
}
.tip {
  padding: 20rpx;
  display: flex;
  align-items: center;
}
.deliveryInfo {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.info {
  width: 80%;
}
.info > view {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.reagentInfo {
  margin-top: 20rpx;
  background: #ffffff;
  border-radius: 30rpx;
  padding: 20rpx 30rpx;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.submit {
  position: absolute;
  bottom: 20rpx;
  left: 50%;
  transform: translate(-50%, 0);
  width: 80%;
  padding: 20rpx 20rpx;
  margin: 40rpx auto 0;
  background-color: #007aff;
  color: #ffffff;
  font-weight: 600;
  text-align: center;
  border-radius: 999px;
}
</style>
