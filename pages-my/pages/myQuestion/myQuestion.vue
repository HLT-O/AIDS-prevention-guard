<template>
    <view class="list">
      <view v-for="item in myQuestionList" :key="item.id">
        <QuestionListItem :info="item">
          <template #title>{{ item.title }}</template>
          <!-- <template #author>提问者：{{ item.user.username }}</template> -->
          <template #desc>{{ item.desc }}</template>
          <template #agreeCount>{{ item.agreeCount }}</template>
          <template #commentCount>{{ item.commentCount }}</template>
        </QuestionListItem>
      </view>
    </view>
</template>

<script>
import QuestionListItem from '../../../components/questionList/questionListItem'
export default {
  props: ['listData'],
  name: 'list',
  components: {
    QuestionListItem
  },
  data() {
    return {
      myQuestionList: []
    }
  },
  mounted() {
    uni.getStorage({
      key: 'userInfo',
      success: (res) => {
        this.$request(
          '/question/list/user'
          ).then(
          (res) => {
            this.myQuestionList = res.data
            console.log(res.data)
          }
        )
      }
    })
  },
  methods: {
    askQuestion() {
      const config = {
        type: 'question',
        titlePlaceHolder: '输入问题标题',
        descPlaceHolder: '输入问题内容',
        buttonText: '发布问题',
        url: '/pages/question/question'
      }
      uni.navigateTo({
        url: `/pages/edit/edit?config=${JSON.stringify(config)}`
      })
    }
  },
  computed: {}
}
</script>

<style lang="scss" scoped>
.list {
  position: relative;
  .icon {
    top: 75%;
    right: 50rpx;
    position: fixed;
  }
}
</style>
