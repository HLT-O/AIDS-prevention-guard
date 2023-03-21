<template>
  <view style="padding: 20rpx 30rpx">
    <u-toast ref="uToast"></u-toast>
    <view style="background-color: #ffffff; border-radius: 30rpx">
      <view class="deliveryInfo" @click="slectAddress">
        <view class="info">
          <view>收货人: {{ address.name }}</view>
          <view style="margin-top: 10rpx"
            >收获地址: {{ address.address }}
          </view>
        </view>
        <view> 选择 > </view>
      </view>
      <view class="goodsInfo">
        <image
          :src="goodsInfo.img"
          style="width: 200rpx; height: 150rpx; border-radius: 30rpx"
        ></image>
        <view class="imgRight">
          <text>{{ goodsInfo.name }}</text>
          <text>X1</text>
        </view>
      </view>
    </view>
    <view
      class="confirm"
      @click="confirm"
      style="background-color: #e03d3d; color: #fff; font-size: 30rpx"
    >
      提交订单
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      goodsInfo: {},
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
  onLoad: function (option) {
    const item = JSON.parse(decodeURIComponent(option.item))
    this.goodsInfo = item
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
    confirm() {
      if (this.address.name) {
        this.$request(
          '/exchangeItem/exchange',
          {
            id: this.goodsInfo.id
          },
          'POST'
        ).then((res) => {
          if (res.code == 200) {
            this.$refs.uToast.show({
              type: 'success',
              icon: false,
              message: '提交成功'
            })
            setTimeout(() => {
              uni.navigateBack({})
            }, 2000)
          } else {
            this.$refs.uToast.show({
              type: 'error',
              icon: false,
              message: res.msg
            })
          }
        })
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
.deliveryInfo {
  padding: 20rpx 30rpx;
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

.goodsInfo {
  border-top: 1px solid #eaeaea;
  margin-top: 30rpx;
  padding: 20rpx 30rpx;
  display: flex;
}

.imgRight {
  margin-left: 30rpx;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.confirm {
  margin: 0 auto;
  margin-top: 140rpx;
  width: 70%;
  height: 100rpx;
  line-height: 100rpx;
  text-align: center;
  background-color: #79d7fc;
  border-radius: 30rpx;
  color: #ffffff;
}
</style>
