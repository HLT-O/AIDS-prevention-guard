<template>
  <view style="padding: 10rpx 30rpx">
    <u-toast ref="uToast"></u-toast>
    <view class="content">
      <view class="selectItem" v-for="(item, index) in radioList" :key="index">
        <view class="title"> {{ index + 1 }}. {{ item.title }} </view>
        <u-radio-group v-model="item.radiovalue" placement="column">
          <u-radio
            activeColor="#e03d3d"
            :customStyle="{ marginBottom: '20rpx' }"
            v-for="(item1, index1) in item.radioItem"
            :key="index1"
            :label="item1.name"
            :name="item1.name"
          >
          </u-radio>
        </u-radio-group>
      </view>
    </view>
    <view
      class="commit"
      @click="commit"
      style="background-color: #e03d3d; color: #fff; font-size: 30rpx"
      >完成</view
    >
  </view>
</template>

<script>
export default {
  data() {
    return {
      radioList: [
        {
          title: '您的性取向是？',
          radioItem: [{ name: '同性' }, { name: '异性' }, { name: '双性' }],
          // u-radio-group的v-model绑定的值如果设置为某个radio的name，就会被默认选中
          radiovalue: ''
        },
        {
          title: '您的性年龄阶段是？',
          radioItem: [
            { name: '小于16岁' },
            { name: '16-30' },
            { name: '31-40' },
            { name: '41-50' },
            { name: '51-60' },
            { name: '大于60岁' }
          ],
          // u-radio-group的v-model绑定的值如果设置为某个radio的name，就会被默认选中
          radiovalue: ''
        },
        {
          title: '您近期是否有高危行为？',
          radioItem: [{ name: '有过' }, { name: '没有' }],
          // u-radio-group的v-model绑定的值如果设置为某个radio的name，就会被默认选中
          radiovalue: ''
        }
      ]
    }
  },
  methods: {
    commit() {
      let finish = true
      for (let i of this.radioList) {
        if (i.radiovalue == '') {
          finish = false
        }
      }
      if (finish == true) {
        this.$refs.uToast.show({
          type: 'success',
          icon: false,
          message: '提交成功，谢谢!'
        })
        setTimeout(() => {
          uni.navigateBack({
            delta: 1
          })
        }, 1000)
      } else {
        this.$refs.uToast.show({
          type: 'error',
          icon: false,
          message: '请完成问卷后申请'
        })
      }
    }
  }
}
</script>

<style>
.selectItem {
  margin-top: 20rpx;
}
.title {
  font-size: 32rpx;
  margin-bottom: 20rpx;
}
.commit {
  padding: 20rpx;
  margin: 40rpx auto 0;
  width: 60%;
  background-color: #80dbfe;
  color: #ffffff;
  font-weight: 600;
  text-align: center;
  border-radius: 999px;
}
</style>
