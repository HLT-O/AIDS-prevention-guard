<template>
  <view style="padding: 20rpx; 30rpx">
    <view
      class="info-container"
      v-for="(item, index) in quizList"
      :key="item.id"
      @click="jump(item)"
    >
      <view class="title">{{ item.name }}</view>
      <text style="margin-left: 30rpx"
        >总共有{{ item.personNum }}人参与答题，一共20道题</text
      >
      <view class="process">
        <text style="margin-right: 20rpx">完成率</text>
        <!-- todo -->
        <u-line-progress
          :percentage="
            item.finishNum
              ? Math.ceil((item.finishNum * 100) / item.personNum)
              : 0
          "
          activeColor="#e03d3d"
          inactiveColor="#f8d4dc"
          height="20"
        ></u-line-progress>
      </view>
      <!-- <text>{{Math.round((item.correct*100)/(20*item.finishNum))}}</text> -->
      <view class="process">
        <text style="margin-right: 20rpx">正确率</text>
        <u-line-progress
          :percentage="Math.round((item.correct * 100) / (20 * item.finishNum))"
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
  data() {
    return {
      quizList: []
    }
  },
  onLoad() {
    this.getQuizList()
  },
  computed: {},
  methods: {
    getQuizList() {
      this.$request('/knowledgeGame/list', 'GET').then((res) => {
        this.quizList = res.data
      })
    },
    jump(item) {
      uni.navigateTo({
        url:
          '/pages-index/pages/quiz/quiz?item=' +
          encodeURIComponent(JSON.stringify(item))
      })
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
  margin-bottom: 20rpx;
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
