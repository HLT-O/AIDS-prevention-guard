<template>
  <view class="list">
    <view v-for="item in questionList" :key="item.id">
      <QuestionListItem :info="item">
        <template #title>{{ item.title }}</template>
        <!-- <template #author>提问者：{{ item.user.username }}</template> -->
        <template #desc>{{ item.desc }}</template>
        <template #agreeCount>{{ item.agreeCount }}</template>
        <template #commentCount>{{ item.commentCount }}</template>
      </QuestionListItem>
    </view>
    <view class="icon" @click="askQuestion"
      ><u-icon name="plus-circle-fill" color="#e03d3d" size="20px"></u-icon
    ></view>
  </view>
</template>

<script>
import QuestionListItem from '../../../components/questionList/questionListItem.vue'
export default {
  props: ['listData'],
  name: 'list',
  components: {
    QuestionListItem
  },
  data() {
    return {
      questionList: []
    }
  },
  mounted() {
    this.$request('/question/list').then((res) => {
      this.$store.commit('faqModule/changeQuestionList', res.data)
      this.questionList = res.data
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
