<template>
  <view>
    <view class="card">
      <view class="userInfo" @click="login">
        <view>
          <image
            :src="userInfo.avatarUrl"
            style="width: 90rpx; height: 90rpx; border-radius: 99px"
          ></image>
        </view>
        <text style="margin-left: 30rpx">{{ userInfo.name }}</text>
        <view style="margin-left: auto">
          <u-icon name="arrow-right" color="#e53a36" size="28"></u-icon>
        </view>
      </view>
    </view>
    <view style="padding: 30rpx 20rpx">
      <view style="border-radius: 30rpx; overflow: hidden">
        <row-list :rowList="rowList1"></row-list>
      </view>
      <view style="font-weight: 700; margin: 30rpx 0">其他服务</view>
      <view style="border-radius: 30rpx; overflow: hidden">
        <row-list :rowList="rowList2"></row-list>
      </view>
    </view>
  </view>
</template>

<script>
import rowList from '../../components/rowList/rowList.vue'
export default {
  components: { rowList },
  data() {
    return {
      ifLogin: false,
      userInfo: {
        avatarUrl: '../../static/img/head1.png',
        name: '点击头像登录'
      },
      rowList1: [
        {
          img: '../../static/icon/my/shangcheng.png',
          title: '积分商城',
          page: '/pages-my/pages/scoreShop/scoreShop',
          ifLogin: false
        },
        {
          img: '../../static/icon/my/zhixun.png',
          title: '咨询医生',
          page: '/pages-my/pages/inquiryList/inquiryList',
          ifLogin: true
        },

        {
          img: '../../static/icon/my/yinsi.png',
          title: '隐私空间',
          page: '/pages-my/pages/private/private',
          ifLogin: true
        }
        // {
        //   img: '../../static/icon/my/zhiyuanzhe.png',
        //   title: '成为志愿者',
        //   page: '/pages-my/pages/volunteerRegister/volunteerRegister',
        //   ifLogin: true
        // },
      ],
      rowList2: [
        {
          img: '../../static/icon/my/tiwen.png',
          title: '我的提问',
          page: '/pages-my/pages/myQuestion/myQuestion',
          ifLogin: true
        },
        //已下未分包
        {
          img: '../../static/icon/my/fankui.png',
          title: '意见反馈',
          page: '/pages/opinion/opinion',
          ifLogin: true
        },
        {
          img: '../../static/icon/my/set.png',
          title: '设置',
          page: '/pages/setUp/setUp',
          ifLogin: false
        }
      ]
    }
  },
  onLoad() {
    this.getUserInfo()
  },
  mounted() {},
  methods: {
    login() {
      if (!this.ifLogin) {
        uni.navigateTo({
          url: '/pages/login/login'
        })
      } else {
        uni.navigateTo({
          url: '/pages/PersonalData/PersonalData'
        })
      }
    },
    getUserInfo() {
      uni.getStorage({
        key: 'userInfo',
        success: (res) => {
          console.log('11', res.data)
          this.userInfo.name = res.data.username
          this.ifLogin = true
        }
      })
      uni.getStorage({
        key: 'avatarUrl',
        success: (res) => {
          console.log(res)
          this.userInfo.avatarUrl = res.data
        }
      })
    }
  }
}
</script>

<style>
.card {
  padding: 200rpx 20rpx 50rpx;
  background-image: url(../../static/img/headBg.png);
  background-size: cover;
}
.userInfo {
  display: flex;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 30rpx 30rpx;
  border-radius: 30rpx;
}
</style>
