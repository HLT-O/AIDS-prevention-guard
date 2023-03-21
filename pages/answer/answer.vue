<template>
  <view class="answerList">
    <view v-for="answer in answerList" :key="answer.id">
      <AnswerListItem :info="answer"></AnswerListItem>
    </view>
    <u-tabbar
      :value="value1"
      :fixed="true"
      :placeholder="false"
      :safeAreaInsetBottom="false"
    >
      <u-tabbar-item
        text="写回答"
        icon="edit-pen"
        @click="editAnswer"
      ></u-tabbar-item>
      <u-tabbar-item
        text="关注问题"
        :icon="heartIcon"
        @click="starQuestion"
      ></u-tabbar-item>
    </u-tabbar>
  </view>
</template>

<script>
import AnswerListItem from '../../components/answerList/answerListItem'
export default {
  components: { AnswerListItem },
  data() {
    return {
      isStar: false,
      questionId: '',
      answerList: ''
    }
  },
  computed: {
    heartIcon() {
      return this.isStar ? 'heart-fill' : 'heart'
    }
  },
  onLoad(options) {
    this.questionId = options.questionId
    this.$request('/answer/list?questionId=' + this.questionId).then((res) => {
      this.answerList = res.data
      this.$store.commit('faqModule/changeAnswerList', res.data)
    })
  },
  methods: {
    editAnswer() {
      const config = {
        type: 'answer',
        titlePlaceHolder: '输入回答标题',
        descPlaceHolder: '写回答',
        buttonText: '发布回答',
        url: '/pages/question/question'
      }
      uni.navigateTo({
        url: `/pages/edit/edit?config=${JSON.stringify(config)}&questionId=${
          this.questionId
        }`
      })
    },
    starQuestion() {
      this.isStar = !this.isStar
    }
  }
}
</script>

<style scoped lang="scss">
.answerList {
  margin-bottom: 118rpx;
  background-color: #eee;
}
</style>
