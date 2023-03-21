<template>
  <view>
    <u-toast ref="uToast"></u-toast>
    <view
      class="header"
      style="background-color: #e03d3d; color: #fff; font-size: 30rpx"
    >
      <text style="color: #ffffff">我的积分</text>
      <view class="score-box">
        <text style="font-size: 100rpx; color: #ffffff">{{
          userInfo.integral
        }}</text>
        <view class="get-score"> 赚积分 </view>
      </view>
    </view>
    <view class="goods">
      <text>兑换商品</text>
      <view
        class="goods-item"
        v-for="(item, index) in goodsList"
        :key="item.index"
        @click="exchange(goodsList[index])"
      >
        <image
          :src="item.img"
          style="width: 200rpx; height: 150rpx; border-radius: 30rpx"
        ></image>
        <view class="goods-describe">
          <text>{{ item.name }}</text>
          <text
            class="exchange"
            style="background-color: #e03d3d; color: #fff; font-size: 30rpx"
          >
            {{ item.integral }}积分兑换
          </text>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      userInfo: {},
      goodsList: [
        {
          img: '../../../static/img/5.jpg',
          name: '一次性口罩',
          integral: '100'
        }
      ]
    }
  },
  mounted() {
    this.userInfo = this.$store.state.userInfo
    this.getGoodsList()
  },
  methods: {
    exchange(item) {
      uni.navigateTo({
        url:
          '/pages-my/pages/exchange/exchange?item=' +
          encodeURIComponent(JSON.stringify(item))
      })
    },
    getGoodsList() {
      this.$request('/exchangeItem/list').then((res) => {
        console.log(res)
        if (res.code == 200) {
          this.goodsList = res.data
        } else {
          this.$refs.uToast.show({
            type: 'error',
            icon: false,
            message: res.msg
          })
        }
      })
    }
  }
}
</script>

<style>
.header {
  padding: 20rpx 30rpx;
  background-color: #f9cce1;
}
.score-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.get-score {
  width: 160rpx;
  height: 60rpx;
  line-height: 60rpx;
  border: 1px solid #ffffff;
  border-radius: 30rpx;
  color: #ffffff;
  text-align: center;
}
.goods {
  padding: 20rpx 30rpx;
}
.goods-item {
  background-color: #ffffff;
  border-radius: 30rpx;
  overflow: hidden;
  margin-top: 30rpx;
  padding: 20rpx 30rpx;
  display: flex;
}
.goods-describe {
  margin-left: 30rpx;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.exchange {
  width: 220rpx;
  padding: 10rpx;
  background-color: #f9cce1;
  border-radius: 30rpx;
  font-size: 26rpx;
  text-align: center;
  color: #ffffff;
}
</style>
