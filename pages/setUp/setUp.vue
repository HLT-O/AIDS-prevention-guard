<template>
	<view>
		<u-toast ref="uToast"></u-toast>
		<view class="setItem" @click="jump">
        <text style="font-size: 32rpx;">账号设置</text>
        <u-icon name="arrow-right" color="#333333" size="20"></u-icon>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				ifLogin:'',
        // userInfo:{
        //   name:'',
        // }
			}
		},
		onLoad() {
			let _this = this
			uni.getStorage({
			  key: 'userInfo',
			  success: function (res) {
			    // console.log('00000',res.data)
			    // _this.userInfo.name = res.data.username
			    _this.ifLogin = true
			  }
			})
		},
		methods: {
			jump(){
				if (!this.ifLogin) {
					this.$refs.uToast.show({
					  type: 'error',
					  icon: false,
					  message: '您还未登录哦'
					})
					return
				} else {
				  uni.navigateTo({
				    url: '/pages/PersonalData/PersonalData'
				  })
				}
			}
		}
	}
</script>

<style>
  .setItem{
    background-color: #FFFFFF;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20rpx 30rpx;
  }
</style>
