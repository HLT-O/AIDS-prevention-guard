<template>
  <view style="padding: 0 20rpx">
    <u-toast ref="uToast"></u-toast>
    <view class="login-container">
      <view style="width: 80%; display: flex; align-items: center">
        <text style="width: 20%; margin-right: 10rpx; text-align: end">用户名</text>
        <view style="width: 80%">
          <u--input v-model="username" placeholder="请输入用户名" border="surround" shape="circle" clearable></u--input>
        </view>
      </view>
      <view style="
          width: 80%;
          margin-top: 30rpx;
          display: flex;
          align-items: center;
        ">
        <text style="width: 20%; margin-right: 10rpx; text-align: end">密码</text>
        <view style="width: 80%">
          <u--input v-model="password" placeholder="请输入密码" border="surround" shape="circle" type="password" clearable>
          </u--input>
        </view>
      </view>
      <view style="margin-top: 60rpx; width: 60%">
        <button class="button1" @click="commit">登录</button>
      </view>
      <view style="margin-top: 30rpx; width: 60%">
        <button class="button2" @click="register">注册</button>
      </view>
    </view>
  </view>
</template>

<script>
  import {
    requestStart
  } from '../../service/request.js'
  export default {
    data() {
      return {
        username: '',
        password: '',
        userInfo: {},
      }
    },
    methods: {
      commit() {
        if (!this.username) {
          this.$refs.uToast.show({
            type: 'error',
            icon: false,
            message: '请输入用户名'
          })
          return
        } else if (!this.password) {
          this.$refs.uToast.show({
            type: 'error',
            icon: false,
            message: '请输入密码'
          })
          return
        } else {
          requestStart(
            '/user/login', {
              username: this.username,
              password: this.password
            },
            'POST'
          ).then((res) => {
            if (res.code == 200) {
              console.log(res.data.token)
              this.$store.commit('setUserInfo', res.data.userInfo)
              uni.setStorage({
                key: 'userInfo',
                data: res.data.userInfo
              })
              uni.setStorage({
                key: 'token',
                data: res.data.token
              })
              // uni.setStorage({ //存储头像
              //   key: 'avatarUrl',
              //   data: res1.userInfo.avatarUrl
              // })
              uni.showToast({
                icon: "none",
                title: '登录成功'
              })
              uni.reLaunch({
                url: '/pages/my/my'
              });
              // uni.getUserProfile({
              // 		desc: "用于完善用户信息",
              // 		success: (res1) => {
              //          this.$store.commit('setUserInfo', res.data.userInfo)
              //          uni.setStorage({
              //            key:'userInfo',
              //            data: res.data.userInfo
              //          })
              //          uni.setStorage({
              //            key:'token',
              //            data: res.data.token
              //          })
              // 				uni.setStorage({//存储头像
              // 				  key:'avatarUrl',
              // 				  data: res1.userInfo.avatarUrl
              // 				})
              // 				uni.showToast({
              // 						icon:"none",
              // 						title:'登录成功'
              // 				})
              // 				// uni.switchTab({
              // 				//   url: '/pages/my/my',
              // 				//   success() {
              // 				//     let page = getCurrentPages().pop() //跳转页面成功之后
              // 				//     page.onLoad() //如果页面存在，则重新刷新页面
              // 				//   },
              // 				//   	fail:(res)=>{
              // 				//   		console.log('ff',res)
              // 				//   	}
              // 				// })
              //            uni.reLaunch({
              //            	url: '/pages/my/my'
              //            });
              // 		},
              // 		fail: (err) => {
              // 				console.log(err)
              // 				uni.showToast({
              // 						icon:"none",
              // 						title:'用户拒绝获取，登录失败'
              // 				})
              // 		}
              // })
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
      },
      register() {
        uni.navigateTo({
          url: '/pages/register/register'
        })
      }
    }
  }
</script>

<style>
  .login-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50rpx 20rpx;
    margin-top: 300rpx;
    border-radius: 30rpx;
    background-color: #ffffff;
  }

  .button1 {
    border: none;
    background-color: #e03d3d;
    border-radius: 30rpx;
    text-align: center;
    color: #FFFFFF;
  }

  .button2 {
    border: none;
    background-color: #e03d3d;
    border-radius: 30rpx;
    text-align: center;
    color: #FFFFFF;
  }
</style>
