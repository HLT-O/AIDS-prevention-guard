<template>
  <view class="articleList">
    <view v-for="article in articleList" :key="article.id" class="item">
      <ArticleListItem :article="article"></ArticleListItem>
    </view>
  </view>
</template>

<script>
import ArticleListItem from './articleListItem.vue'
export default {
  props: ['articleList'],
  data() {
    return {}
  },
  components: { ArticleListItem }
}
</script>

<style scoped lang="scss">
.item {
  margin-top: 20rpx;
}
</style>
