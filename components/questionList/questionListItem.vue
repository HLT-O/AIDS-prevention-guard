<template>
  <view class="listItem" @click="goAnswerList">
    <view class="title">
      <slot name="title">你读过最惊艳的现代诗是什么？</slot>
    </view>
    <view class="author">
      <!-- <slot name="author">作者</slot> -->
    </view>
    <view class="desc">
      <slot name="desc"
        >薛蘅芜： 《我允许》海灵格 我允许任何事情的发生 我允许，事情是如此的开始
        如此的发展，如此的结局 因为我知道， 所有的事情，都是因缘和合而来
        一切的发生，都是必…</slot
      >
    </view>
  </view>
</template>

<script>
export default {
  components: {},
  props: {
    showData: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({}),
  computed: {},
  props: ['info'],
  methods: {
    // 跳转
    goAnswerList() {
      uni.navigateTo({
        url: `/pages/answer/answer?questionId=${JSON.stringify(this.info.id)}`
      })
    }
  },
  watch: {}
}
</script>

<style lang="scss" scoped>
.listItem {
  margin-top: 20rpx;
  margin-bottom: 20rpx;
  background-color: #fff;
  padding: 0rpx 50rpx;
  .title {
    padding-top: 20rpx;
    font-size: 33rpx;
    font-weight: bold;
  }
  .author {
    margin: 20rpx 0;
    font-size: 30rpx;
  }
  .desc {
    margin: 20rpx 0;
    font-size: 31rpx;
    color: #b1b1b1;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    padding-bottom: 20rpx;
  }
}
</style>
