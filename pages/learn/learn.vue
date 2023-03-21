<template>
  <view class="learn">
    <u-subsection
      :list="list"
      :current="current"
      @change="sectionChange"
      bgColor="#e03d3d"
      activeColor="#e03d3d"
      inactiveColor="#fff"
    ></u-subsection>
    <view class="experience" v-if="current === 0">
      <ArticleList :articleList="knowledgeList"></ArticleList>
    </view>
    <view class="knowledge" v-else-if="current === 1">
      <ArticleList :articleList="experienceList"></ArticleList>
    </view>
  </view>
</template>

<script>
import ArticleList from '../../components/articleList/articleList.vue'
export default {
  data() {
    return {
      list: [
        {
          name: '相关科普'
        },
        {
          name: '预防治疗'
        }
      ],
      dataList: [],
      current: 0
    }
  },
  mounted() {
    this.$request('/article/list').then((res) => {
      this.dataList.push(...res.data)
    })
  },
  computed: {
    knowledgeList() {
      return this.dataList.filter((item) => item.type === 1)
    },
    experienceList() {
      return this.dataList.filter((item) => item.type === 2)
    }
  },
  methods: {
    sectionChange(index) {
      this.current = index
    }
  },
  components: { ArticleList }
}
</script>

<style lang="scss" scoped>
.learn {
  margin-top: -5rpx;
}
.knowledge,
.experience {
  background-color: #eee;
}
</style>
