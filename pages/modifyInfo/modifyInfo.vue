<template>
	<view>
    <u-toast ref="uToast"></u-toast>
<!-- 		<view class="infoItem">
      <image src="../../static/img/head1.png" style="width: 120rpx; height: 120rpx; border-radius: 30rpx;"></image>
      <text style="margin-right: auto; text-align: left;">头像</text>
		</view> -->
    <view class="infoItem">
      <u--input
      v-model="userInfo.username"
          placeholder="请输入内容"
          border="bottom"
          clearable
        ></u--input>
      <text style="margin-right: auto; text-align: left;width: 100rpx;">用户名</text>
    </view>
    <view class="infoItem">
        <u--input
            v-model="userInfo.password"
            placeholder="请输入内容"
            border="bottom"
            clearable
          ></u--input>
      <text style="margin-right: auto; text-align: left; width: 100rpx;">密码</text>
    </view>
   <view class="infoItem">
      <u--input
          v-model="userInfo.phone"
          placeholder="请输入内容"
          border="bottom"
          type='number'
          clearable
        ></u--input>
      <text style="margin-right: auto; text-align: left;width: 100rpx;">手机</text>
    </view>
    <view class="button-container">
      <view class="button" @click="commit">
        确认修改
      </view>
    </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
        userInfo:{
          username: "", //用户名
          password: "", //密码
          phone: "", //手机号
          id: "" //用户id
        },
			}
		},
    onLoad() {
      let _this = this
      uni.getStorage({
      	key: 'userInfo',
      	success: function (res) {
      		console.log(res.data);
          _this.userInfo = res.data
      	}
      });
    },
		methods: {
      commit(){
        let _this = this
        if (!this.userInfo.username) {
          this.$refs.uToast.show({
            type: 'error',
            icon: false,
            message: '请输入用户名'
          })
          return
        } else if (!this.userInfo.password) {
          this.$refs.uToast.show({
            type: 'error',
            icon: false,
            message: '请输入密码'
          })
          return
        } else
        if (!this.userInfo.phone) {
          this.$refs.uToast.show({
            type: 'error',
            icon: false,
            message: '请输入手机号码'
          })
          return
        } else
        {
          this.$request(
            '/user/update',
            {
              ..._this.userInfo
            },
            'POST'
          ).then((res) => {
            console.log(res)
            if (res.code == 200) {
              this.$store.commit('setUserInfo', _this.userInfo)
              uni.setStorage({
                key:'userInfo',
                data: _this.userInfo
              })
              uni.reLaunch({
              	url: '/pages/my/my'
              });
            } else {
              this.$refs.uToast.show({
                type: 'error',
                icon: false,
                message: res.msg
              })
              return
            }
          })
        }
      }
		}
	}
</script>

<style>
  .infoItem{
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    padding: 20rpx 20rpx;
    background-color: #FFFFFF;
  }
  .button-container{
    background-color: #FFFFFF;
    padding: 50rpx 200rpx;
  }
  .button{
    background-color: #3b99fb;
    padding:20rpx 0;
    border-radius: 30rpx;
    text-align: center;
    color: #FFFFFF;
  }
  .button:hover{
    background-color: #2481fb;
  }
</style>
