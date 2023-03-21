<template>
  <view style="padding: 0 20rpx">
    <u-toast ref="uToast"></u-toast>
    <view class="container">
      <!--   <view class="title">
          <view style="background-color:#F9CCE1 ; height: 50rpx; width: 6rpx; margin-right: 10rpx;"></view>
          <text>身份信息</text>
        </view>
        <view class="form1">
          <view style="display: flex; align-items: center; padding: 20rpx 30rpx;">
            <view style="margin-right: auto;width: 30%;">
              <text style="color: red;">*</text>
              <text>姓名:</text>
            </view>
            <u--input
                placeholder="请输入内容"
                border="surround"
                v-model="name"
              ></u--input>
          </view>
          <view style="display: flex; align-items: center; padding: 20rpx 30rpx;">
            <view style="margin-right: auto; width: 30%;">
              <text style="color: red;">*</text>
              <text>联系电话:</text>
            </view>
            <u--input
                placeholder="请输入内容"
                border="surround"
                v-model="phone"
            ></u--input>
          </view>
          <view style="display: flex; align-items: center; padding: 20rpx 30rpx;">
            <view style="margin-right: auto;width: 30%;">
              <text style="color: red;">*</text>
              <text>证件类型:</text>
            </view>
            <u--input
                placeholder="请输入内容"
                border="surround"
                v-model="credentialsType"
              ></u--input>
          </view>
          <view style="display: flex; align-items: center; padding: 20rpx 30rpx;">
            <view style="margin-right: auto;width: 30%;">
              <text style="color: red;">*</text>
              <text>证件号码:</text>
            </view>
            <u--input
                placeholder="请输入内容"
                border="surround"
                v-model="credentialsNumber"
              ></u--input>
          </view>
        </view> -->
      <view class="title">
        <view
          style="
            background-color: #f9cce1;
            height: 50rpx;
            width: 6rpx;
            margin-right: 10rpx;
          "
        ></view>
        <text>基本情况</text>
      </view>
      <view class="question" v-for="(item, index) in question" :key="index">
        <text style="font-size: 30rpx">{{ item.title }}</text>
        <view style="margin-left: auto">
          <u-radio-group placement="row">
            <u-radio label="是" name="是"></u-radio>
            <u-radio label="否" name="否"></u-radio>
          </u-radio-group>
        </view>
      </view>
      <view style="margin: 20rpx 0">您对目前艾滋病工作的看法与建议</view>
      <u--textarea v-model="value1" placeholder="请输入意见反馈"></u--textarea>
      <view style="padding: 100rpx 50rpx">
        <view
          class="button"
          @click="commit"
          style="background-color: #e03d3d; color: #fff; font-size: 30rpx"
        >
          申请成为志愿者
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      userId: '',
      name: '',
      phone: '',
      credentialsType: '',
      credentialsNumber: '',
      question: [
        { title: '你了解艾滋病吗？' },
        { title: '你平时会关注艾滋病的新闻吗？' },
        { title: '你觉得艾滋病的科普是否用用？' },
        { title: '你认为加入援艾支援者是否有意义？' }
      ],
      radiolist: [{ name: '是' }, { name: '否' }],
      modelRadio: '否'
    }
  },
  onLoad() {},
  methods: {
    commit() {
      // if(!this.name){
      //   this.$refs.uToast.show({
      //     type: 'error',
      //     icon: false,
      //     message: '姓名不能为空'
      //   })
      //   return
      // }
      // else if (!this.phone) {
      //   this.$refs.uToast.show({
      //     type: 'error',
      //     icon: false,
      //     message: '电话不能为空'
      //   })
      //   return
      // }else if(!this.credentialsType){
      //   this.$refs.uToast.show({
      //     type: 'error',
      //     icon: false,
      //     message: '证件类型不能为空'
      //   })
      //   return
      // }else if(!this.credentialsNumber){
      //   this.$refs.uToast.show({
      //     type: 'error',
      //     icon: false,
      //     message: '证件号码不能为空'
      //   })
      //   return
      // }else{
      this.$request('/user/bevolunteer', {}, 'POST').then((res) => {
        if (res.code == 200) {
          this.$request('/user/info').then((res) => {
            if (res.code == 200) {
              this.$store.commit('setUserInfo', res.data)
              uni.setStorage({
                key: 'userInfo',
                data: res.data
              })
              this.$refs.uToast.show({
                type: 'success',
                message: '提交成功',
                iconUrl: 'https://cdn.uviewui.com/uview/demo/toast/success.png'
              })
              setTimeout(() => {
                uni.reLaunch({
                  url: '/pages/my/my'
                })
              }, 1000)
            }
          })
        }
      })
      // }
    }
  }
}
</script>

<style>
.container {
  background-color: #ffffff;
  padding: 10rpx 20rpx;
}
.title {
  display: flex;
  align-items: center;
}
.question {
  display: flex;
  align-items: center;
  padding: 20rpx 30rpx;
}
.button {
  background-color: #80dbfe;
  color: #ffffff;
  border-radius: 30rpx;
  padding: 30rpx 30rpx;
  text-align: center;
}
</style>
