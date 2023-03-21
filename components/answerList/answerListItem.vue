<template>
  <view class="listItem" @click="goAnswerList">
    <view class="title">
      <!-- <slot name="title">{{ info.title }}</slot> -->
    </view>
    <view class="desc">
      <slot name="desc">{{ info.content }}</slot>
    </view>
    <!-- <view class="author">
      <slot name="author">{{ info.user.username }}</slot>
    </view> -->
    <view class="footer">
      <view class="time">1分钟前</view>
      <view class="contentData">
        <slot name="agreeCount">
          <span class="count">
            {{ info.agree ? info.agree : 0 }}
          </span>
        </slot>
        赞同
        <span class="dot"> · </span>
        <slot name="disAgreeCount">
          <span class="count">
            {{ info.disAgree ? info.disAgree : 0 }}
          </span>
        </slot>
        反对
      </view>
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
  mounted() {},
  props: ['info'],
  methods: {
    // 跳转
    goAnswerList() {
      uni.redirectTo({
        url: `/pages/article/article?info=${JSON.stringify(this.info)}`
      })
    }
  },
  watch: {},

  // 页面周期函数--监听页面加载
  onLoad() {},
  // 页面周期函数--监听页面初次渲染完成
  onReady() {},
  // 页面周期函数--监听页面显示(not-nvue)
  onShow() {},
  // 页面周期函数--监听页面隐藏
  onHide() {},
  // 页面周期函数--监听页面卸载
  onUnload() {},
  // 页面处理函数--监听用户下拉动作
  onPullDownRefresh() {
    uni.stopPullDownRefresh()
  },
  // 页面处理函数--监听用户上拉触底
  onReachBottom() {}
  // 页面处理函数--监听页面滚动(not-nvue)
  /* onPageScroll(event) {}, */
  // 页面处理函数--用户点击右上角分享
  /* onShareAppMessage(options) {}, */
}
</script>

<style lang="scss" scoped>
.listItem {
  margin-top: 20rpx;
  margin-bottom: 20rpx;
  background-color: #fff;
  padding: 0rpx 50rpx;
  .title {
    font-weight: bold;
    padding-top: 20rpx;
  }
  .author {
    font-size: 30rpx;
  }
  .desc {
    margin: 10rpx 0;
    font-size: 33rpx;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }
  .footer {
    display: flex;
    justify-content: space-between;
    font-size: 0.8rem;
    padding-bottom: 20rpx;
    color: rgba(170, 170, 170, 0.918);
    .dot {
      margin: 0 0.2rem;
    }
    .count {
      margin-right: 0.2rem;
    }
  }
}
</style>
