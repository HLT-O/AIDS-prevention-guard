<template>
  <view style="padding: 20rpx; 30rpx">
    <view class="info-container">
      <view class="title">{{ info.name }}</view>
      <text style="margin-left: 30rpx"
        >总共有{{ info.personNum }}人参与答题，一共20道题</text
      >
      <view class="process">
        <text style="margin-right: 20rpx">完成率</text>
        <u-line-progress
          :percentage="
            info.finishNum
              ? Math.round((info.finishNum * 100) / info.personNum)
              : 0
          "
          activeColor="#e03d3d"
          inactiveColor="#f8d4dc"
          height="20"
        ></u-line-progress>
      </view>
      <view class="process">
        <text style="margin-right: 20rpx">正确率</text>
        <u-line-progress
          :percentage="Math.round((info.correct * 100) / (info.finishNum * 20))"
          activeColor="#e03d3d"
          inactiveColor="#f8d4dc"
          height="20"
        ></u-line-progress>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: 'quizInfo',
  props: {
    quizInfo: {
      type: Object
    }
  },
  data() {
    return {
      info: {}
    }
  },
  watch: {
    // quizInfo: function(newVal,oldVal){
    // 	this.info = newVal;  //newVal即是quizInfo
    // }
  },
  mounted() {
    console.log('输出props', this.quizInfo)
    this.info = Object.assign({}, this.quizInfo)
    this.upData = setInterval(this.getQuizInfo, 3000)
  },
  beforeDestroy() {
    console.log('销毁', this.upData)
    clearInterval(this.upData)
  },
  methods: {
    getQuizInfo() {
      this.$request('/knowledgeGame', { id: this.info.id }, 'GET').then(
        (res) => {
          this.info = res.data
        }
      )
    }
  }
}
</script>

<style>
.title {
  font-size: 40rpx;
  margin-bottom: 10rpx;
}
.info-container {
  padding: 20rpx 30rpx;
  border: 2px solid #f9cce1;
  border-radius: 30rpx;
}
.process {
  display: flex;
  align-items: center;
  margin: 40rpx 30rpx;
}
</style>
