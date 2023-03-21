<template>
  <view style="padding: 0 40rpx">
    <u-toast ref="uToast"></u-toast>
    <view class="info">
      <view class="item-box">
        <text>性别</text>
        <view>
          <u-radio-group v-model="form.sex" placement="row" size="24">
            <u-radio activeColor="#e03d3d" label="男" name="1"></u-radio>
            <u-radio activeColor="#e03d3d" label="女" name="0"></u-radio>
          </u-radio-group>
        </view>
      </view>
      <view class="item-box">
        <text>年龄</text>
        <u--input
          v-model="form.age"
          placeholder="请输入年龄"
          type="number"
          border="none"
          inputAlign="right"
        ></u--input>
      </view>
    </view>
    <view class="content">
      <view style="margin-bottom: 20rpx">症状</view>
      <textarea
        v-model="form.symptom"
        placeholder="请准确的描述你的病状"
        class="textarea"
      />
      <view style="height: 50rpx"></view>
      <view style="margin-bottom: 20rpx">疑问</view>
      <textarea
        v-model="form.cQuestion"
        placeholder="对病状的疑问"
        class="textarea"
      />
    </view>
    <view
      class="commit"
      @click="commit"
      style="background-color: #e03d3d; color: #fff; font-size: 30rpx"
    >
      提交
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      form: {
        sex: '',
        age: '',
        symptom: '',
        cQuestion: '',
        userId: ''
      }
    }
  },
  mounted() {
    let _this = this
    uni.getStorage({
      key: 'userInfo',
      success: function (res) {
        console.log('userInfo', res.data)
        _this.form.userId = res.data.id
      }
    })
  },
  methods: {
    commit() {
      if (!this.form.sex) {
        this.$refs.uToast.show({
          type: 'error',
          icon: false,
          message: '请选择性别'
        })
        return
      } else if (!this.form.age) {
        this.$refs.uToast.show({
          type: 'error',
          icon: false,
          message: '请输入年龄'
        })
        return
      } else if (!this.form.symptom) {
        this.$refs.uToast.show({
          type: 'error',
          icon: false,
          message: '请输入症状'
        })
        return
      } else {
        console.log(this.form)
        this.$request('/consultant/create', this.form, 'POST').then((res) => {
          if (res.code == 200) {
            this.$refs.uToast.show({
              type: 'success',
              icon: false,
              message: '提交成功'
            })
            setTimeout(() => {
              uni.navigateBack({
                delta: 1,
                success() {
                  let page = getCurrentPages().pop() //跳转页面成功之后
                  page.onLoad() //如果页面存在，则重新刷新页面
                }
              })
            }, 1000)
          } else {
            this.$refs.uToast.show({
              type: 'success',
              icon: false,
              message: res.msg
            })
          }
        })
      }
    }
  }
}
</script>

<style>
.info {
  /* overflow: hidden; */
}
.item-box {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #d3d3d3;
  padding: 20rpx 20rpx;
}
.content {
  margin-top: 50rpx;
}
.commit {
  margin: 0 auto;
  margin-top: 70rpx;
  width: 70%;
  height: 100rpx;
  line-height: 100rpx;
  text-align: center;
  background-color: #79d7fc;
  border-radius: 30rpx;
  color: #ffffff;
}
.textarea {
  padding: 10rpx 0;
  border: 1px solid #c2c2c2;
  height: 160rpx;
  width: 100%;
  border-radius: 20rpx;
}
</style>
