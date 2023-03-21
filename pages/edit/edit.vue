<template>
  <view class="text">
    <view v-if="config.type === 'question'" class="title">
      <u--textarea
        v-model="title"
        :placeholder="config.titlePlaceHolder"
        border="bottom"
        height="50"
        showConfirmBar
      ></u--textarea>
    </view>
    <view v-if="config.type === 'question'" class="content">
      <u--textarea
        v-model="desc"
        :placeholder="config.descPlaceHolder"
        border="bottom"
        height="200"
        showConfirmBar
      ></u--textarea>
    </view>
    <view v-else class="content">
      <u--textarea
        v-model="content"
        :placeholder="config.descPlaceHolder"
        border="bottom"
        height="200"
        showConfirmBar
      ></u--textarea>
    </view>
    <view class="action content">
      <button
        style="background-color: #e03d3d; color: #fff; font-size: 30rpx"
        @click="finishEdit"
      >
        {{ config.buttonText }}
      </button>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      userId: '',
      config: '',
      title: '',
      desc: '',
      content: '',
      questionId: ''
    }
  },
  onLoad(option) {
    uni.getStorage({
      key: 'userInfo',
      success: (res) => {
        this.userId = res.data.id
      }
    })
    this.config = JSON.parse(option.config)
    this.questionId = JSON.parse(option.questionId)
  },
  methods: {
    finishEdit() {
      if (this.config.type === 'question') {
        this.$request(
          '/question/create',
          {
            title: this.title,
            desc: this.desc,
            userId: this.userId
          },
          'post'
        ).then((res) => {
          console.log(res)
          uni.navigateTo({
            url: '/pages-index/pages/question/question'
          })
        })
      } else if (this.config.type === 'answer') {
        this.$request(
          '/answer/create',
          {
            title: this.title,
            content: this.content,
            userId: this.userId,
            questionId: this.questionId
          },
          'post'
        ).then((res) => {
          uni.redirectTo({
            url: `/pages/answer/answer?questionId=${this.questionId}`
          })
        })
      }
    }
  }
}
</script>

<style scoped>
.action {
  margin-top: 20px;
}

.text {
  margin: 0 20rpx;
}

.content,
.title {
  margin-top: 20rpx;
  border: 1px solid #eee;
  border-radius: 30rpx;
}

.content {
  margin-top: 20rpx;
}
</style>
