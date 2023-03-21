<template>
  <view>
    <view class="addressList">
      <view
        class="addressItem"
        v-for="(item, index) in addressList"
        :key="item.index"
        @click="jump(addressList[index])"
      >
        <view>联系人 : {{ item.name }}</view>
        <view>电话 : {{ item.phone }}</view>
        <view>地址 : {{ item.address }}</view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      addressList: [
        {
          name: '李银河',
          phone: '13325637891',
          address: '重庆巴南区南泉'
        }
      ]
    }
  },
  methods: {
    jump(item) {
      uni.$emit('setAddress', item)
      uni.navigateBack({
        //uni.navigateTo跳转的返回，默认1为返回上一级
        delta: 1
      })
    }
  }
}
</script>

<style>
.addressList {
  padding: 20rpx 30rpx;
  overflow: hidden;
}
.addressItem {
  border-radius: 30rpx;
  background-color: #ffffff;
  padding: 10rpx 20rpx;
  margin-bottom: 20rpx;
}
.addressItem > view {
  margin-bottom: 15rpx;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
