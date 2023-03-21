<template>
  <view class="commentList">
    <view v-for="comment in commentList" :key="comment.id">
      <view class="comment">
        <view class="header">
          <view class="avatar">
            <view v-if="comment.avatar">
              {{ comment.avatar }}
            </view>
            <img
              src="https://codertzm.oss-cn-chengdu.aliyuncs.com/head1.png"
              style="
                width: 50rpx;
                background-size: cover;
                height: 50rpx;
                border-radius: 999px;
              "
              alt=""
            />
          </view>
        </view>
        <view class="commentInfo">
          <view class="author">{{ '匿名用户' }}</view>
          <view class="content">
            {{ comment.content }}
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  props: ['commentList'],
  mounted() {
    console.log(this.commentList)
  }
}
</script>

<style scoped lang="scss">
.commentList {
  .comment {
    display: flex;
    margin-bottom: 40rpx;
    .commentInfo {
      margin-left: 20rpx;
      .author {
        font-size: 34rpx;
      }
      .content {
        margin-top: 10rpx;
        font-size: 35rpx;
      }
    }
  }
}
</style>
