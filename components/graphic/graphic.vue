<template>
  <view class="graphic" @click="goVolunteerForm">
    <view class="img">
      <image src="../../static/img/volunteer/volunteer.jpg" class="image">
      </image>
    </view>
    <view class="content">
      <view class="title">{{ item.title }}</view>
      <view class="desc" v-html="item.desc"> </view>
      <view class="more">点击了解更多</view>
    </view>
  </view>
</template>

<script>
export default {
  props: ['item'],
  methods: {
    goVolunteerForm() {
      uni.navigateTo({
        url: `/pages/volunteerInfo/volunteerInfo?item=${JSON.stringify(
          this.item
        )}`
      })
    }
  }
}
</script>

<style scoped lang="scss">
.graphic {
  margin-bottom: 30rpx;
  height: 250rpx;
  display: flex;
  background-color: #fff;
  border-radius: 20rpx;
  box-shadow: 2px 2px 2px 2px rgba(233, 228, 228, 0.849);
  .img {
    padding: 5rpx;
    padding-left: 20rpx;
  }
  .img image {
    width: 200rpx;
    height: 200rpx;
  }
  .content {
    .title {
      font-weight: bold;
      font-size: 33rpx;
      padding-top: 15rpx;
    }
    .title,
    .desc {
      padding-left: 40rpx;
    }
    .title {
      margin-bottom: 10rpx;
    }

    .desc {
      font-size: 30rpx;
      overflow: hidden;
      display: -webkit-box;
      padding-right: 20rpx;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
    }

    .more {
      color: rgba(170, 170, 170, 0.918);
      font-size: 28rpx;
      margin-left: 280rpx;
      padding-top: 10rpx;
    }
  }
}
</style>
