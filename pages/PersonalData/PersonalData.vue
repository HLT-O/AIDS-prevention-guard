<template>
  <view>
    <view class="infoItem">
      <u-icon name="arrow-right" color="#787878" size="22"></u-icon>
      <image
        :src="userInfo.avatarUrl"
        style="width: 120rpx; height: 120rpx; border-radius: 30rpx"
      ></image>
      <text style="margin-right: auto; text-align: left">头像</text>
    </view>
    <view class="infoItem">
      <u-icon name="arrow-right" color="#787878" size="22"></u-icon>
      <text>{{ userInfo.username }}</text>
      <text style="margin-right: auto; text-align: left">用户名</text>
    </view>
    <view class="infoItem">
      <u-icon name="arrow-right" color="#787878" size="22"></u-icon>
      <text>{{ userInfo.phone }}</text>
      <text style="margin-right: auto; text-align: left">手机</text>
    </view>
    <view class="button-container">
      <view
        class="button"
        @click="modify"
        style="background-color: #e03d3d; color: #fff; font-size: 30rpx"
      >
        更改信息
      </view>
      <view
        class="button1"
        @click="quit"
        style="background-color: #e03d3d; color: #fff; font-size: 30rpx"
      >
        退出登录
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      userInfo: {
        avatarUrl: '../../static/img/head1.png',
        username: '', //用户名
        password: '', //密码
        phone: '', //手机号
        userId: '' //用户id
      }
    }
  },
  onLoad() {
    this.getUserInfo()
  },
  methods: {
    modify() {
      uni.navigateTo({
        url: '/pages/modifyInfo/modifyInfo'
      })
    },
    quit() {
      uni.clearStorageSync()
      uni.reLaunch({
        //关闭所有页面，返回指定页面
        url: '/pages/my/my'
      })
    },
    getUserInfo() {
      uni.getStorage({
        key: 'userInfo',
        success: (res) => {
          console.log(res)
          this.userInfo.username = res.data.username
          this.userInfo.phone = res.data.phone
        }
      })
      //微信头像
      // 	uni.getStorage({
      // 		key:'avatarUrl',
      // success:(res)=> {
      // 	console.log(res)
      // 	this.userInfo.avatarUrl = res.data
      // }
      // 	})
    }
  }
}
</script>

<style>
.infoItem {
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  padding: 20rpx 20rpx;
  background-color: #ffffff;
}
.button-container {
  background-color: #ffffff;
  padding: 50rpx 200rpx;
}
.button {
  background-color: #3b99fb;
  padding: 20rpx 0;
  border-radius: 30rpx;
  text-align: center;
  color: #ffffff;
  margin-bottom: 30rpx;
}
.button1 {
  background-color: #f9cce1;
  padding: 20rpx 0;
  border-radius: 30rpx;
  text-align: center;
  color: #ffffff;
}
.button:hover {
  background-color: #2481fb;
}
</style>
