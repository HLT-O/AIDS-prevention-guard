<template>
  <view class="articleInfo">
    <view class="header">
      <view class="avatar">
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
      <!-- <view class="author">{{ info.user.username }}</view> -->
      <view class="author">{{ '匿名用户' }}</view>
    </view>
    <view class="title">
      <!-- {{ info.title }} -->
    </view>
    <view class="content">
      {{ info.content }}
    </view>
    <view class="action">
      <view class="agree">
        <u-icon
          name="thumb-up"
          size="25px"
          @click="changeCount('agree')"
        ></u-icon>
        <view class="count">{{ info.agree ? info.agree : 0 }}</view>
      </view>
      <view class="disAgree">
        <u-icon
          name="thumb-down"
          size="25px"
          @click="changeCount('disAgree')"
        ></u-icon>
        <view class="count">{{ info.disAgree ? info.disAgree : 0 }}</view>
      </view>
    </view>
    <u-divider></u-divider>
    <view class="allComment">全部评论 {{ commentList.length }}</view>
    <CommentList :commentList="commentList"></CommentList>
    <view class="footer">
      <u--textarea v-model="comment" placeholder="请输入内容"></u--textarea>
      <view class="btn">
        <button
          style="background-color: #e03d3d; color: #fff; font-size: 30rpx"
          @click="addComment"
        >
          发评论
        </button>
      </view>
    </view>
  </view>
</template>

<script>
import CommentList from '../../components/commentList/commentList'
export default {
  data() {
    return {
      info: '',
      commentList: [],
      comment: ''
    }
  },
  onLoad(option) {
    this.info = JSON.parse(option.info)
    this.$request('/comment/list?answerId=' + this.info.id).then((res) => {
      this.$store.commit('faqModule/changeCommentList', res.data)
      this.commentList = this.$store.state.faqModule.commentList
    })
  },
  components: { CommentList },
  methods: {
    // 修改点赞和反对
    changeCount(type) {
      this.info[type] += 1
      this.$request(
        '/answer/update',
        {
          id: this.info.id,
          [type]: this.info[type]
        },
        'POST'
      ).then((res) => {
        console.log(res.data)
      })
    },
    // 增加评论
    addComment() {
      uni.getStorage({
        key: 'userInfo',
        success: (res) => {
          const userId = res.data.id
          this.$request(
            '/comment/create',
            {
              content: this.comment, //内容
              userId, //用户id
              answerId: this.info.id //回答id
            },
            'POST'
          ).then((res) => {
            this.commentList.push(res.data)
            this.comment = ''
          })
        }
      })
    }
  }
}
</script>

<style scoped lang="scss">
.articleInfo {
  background-color: #fff;
  padding: 30rpx;
  .header {
    margin-top: 30rpx;
    display: flex;
    .avatar {
      width: 80rpx;
    }
    .author {
      font-size: 35rpx;
      padding-top: 10rpx;
    }
  }
  .title {
    font-size: 40rpx;
    font-weight: bold;
    margin: 30rpx 10rpx;
  }
  .content {
    margin: 30rpx 10rpx;
  }
  .action {
    margin: 50rpx 0;
    display: flex;
    .agree,
    .disAgree {
      font-size: 30rpx;
      display: flex;
      margin-right: 20rpx;
      .count {
        line-height: 60rpx;
      }
    }
  }
  .allComment {
    font-size: 30rpx;
    margin: 30rpx 0;
  }

  .footer {
    margin-top: 20rpx;
    .btn {
      margin-top: 30rpx;
    }
  }
}
</style>
