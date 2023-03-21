<template>
  <view class="volunteer">
    <view v-for="item in volunteerList" :key="item.id">
      <Graphic :item="item"></Graphic>
    </view>
  </view>
</template>

<script>
import Graphic from '../../components/graphic/graphic.vue'

export default {
  components: { Graphic },
  data() {
    return {
      volunteerList: []
    }
  },
  mounted() {
    this.$request('/volunteer/list').then((res) => {
      this.volunteerList = res.data
      console.log(this.volunteerList)
    })
  },
  computed: {
    volunteerActionList() {
      return this.$store.state.volunteerModule.volunteerActionList
    }
  }
}
</script>

<style scoped lang="scss">
.volunteer {
  margin-top: 20rpx;
  padding: 0 25rpx;
  background-color: #eee;
}
</style>
