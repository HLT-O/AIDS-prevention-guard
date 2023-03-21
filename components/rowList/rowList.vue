<template>
  <view class="rowList" :style="{ background: listBgColor }">
    <u-toast ref="uToast"></u-toast>
    <view
      class="rowListItem"
      :style="{ background: itemBgColor }"
      v-for="(item, index) in rowList"
      :key="index"
      @click="pageJump(item)"
    >
      <image
        :src="item.img"
        :style="{ width: imgWidth, height: imgHeigth }"
        style="margin-bottom: 20rpx"
      ></image>
      <text :style="{ color: color, fontSize: fontSize }">{{
        item.title
      }}</text>
    </view>
  </view>
</template>

<script>
export default {
  name: 'rowList',
  components: {},
  props: {
    rowList: {
      //列表信息（跳转链接，图标，标题）
      type: Array,
      default: [
        {
          img: '../../static/icon/my/aixin.png', //icon
          title: '志愿服务',
          page: '/pages/my/my', //服务表单页面
          ifLogin: true
        },
        {
          img: '../../static/icon/my/aixin.png', //icon
          title: '志愿服务',
          page: '/pages/my/my', //服务表单页面
          ifLogin: true
        },
        {
          img: '../../static/icon/my/aixin.png', //icon
          title: '志愿服务',
          page: '/pages/my/my', //服务表单页面
          ifLogin: true
        },
        {
          img: '../../static/icon/my/aixin.png', //icon
          title: '志愿服务',
          page: '/pages/my/my', //服务表单页面
          ifLogin: true
        }
      ]
    },
    listBgColor: {
      //列表背景颜色
      type: String,
      default: '#FFFFFF'
    },
    itemBgColor: {
      //选项背景颜色
      type: String,
      default: '#FFFFFF'
    },
    imgWidth: {
      //图片大小
      type: String,
      default: '50rpx'
    },
    imgHeigth: {
      type: String,
      default: '50rpx'
    },
    color: {
      //标题颜色
      type: String,
      default: '#333333'
    },
    fontSize: {
      //标题大小
      type: String,
      default: '32rpx'
    }
  },
  data() {
    return {
      userInfo: {}
    }
  },
  mounted() {
    this.userInfo = uni.getStorageSync('userInfo')
  },
  methods: {
    pageJump(item) {
      console.log(item)
      if (item.page == '/pages-my/pages/private/private') {
        //跳转至隐私空间
        if (this.userInfo.isPatient) {
          this.$navgitateTo(
            {
              url: '/pages-my/pages/privacySpace/privacySpace'
            },
            item.ifLogin
          )
        } else {
          this.$navgitateTo(
            {
              url: item.page
            },
            item.ifLogin
          )
        }
      } else if (item.page == 'game') {
        //跳转至游戏小程序
        plus.share.getServices(
          function (res) {
            var sweixin = null
            for (var i = 0; i < res.length; i++) {
              var t = res[i]
              if (t.id == 'weixin') {
                sweixin = t
              }
            }
            if (sweixin) {
              sweixin.launchMiniProgram(
                {
                  id: 'gh_ac9c1b00ec31',
                  type: 0,
                  path: '/pages/index/index?id=123'
                },
                (res) => {
                  console.log('res', JSON.stringify(res))
                },
                (err) => {
                  console.log('err', JSON.stringify(err))
                }
              )
            }
          },
          function (res) {
            console.log(JSON.stringify(res))
          }
        )

        uni.navigateToMiniProgram({
          appId: 'wx5ec822ca7ebd7aba',
          extraData: {},
          success(res) {
            console.log('成功', res)
          }
        })
      } else if (
        item.page == '/pages-my/pages/volunteerRegister/volunteerRegister'
      ) {
        if (this.userInfo.isVolunteer) {
          this.$refs.uToast.show({
            type: 'error',
            icon: false,
            message: '您已是志愿者'
          })
          return
        } else {
          this.$navgitateTo(
            {
              url: item.page
            },
            item.ifLogin
          )
        }
      } else {
        this.$navgitateTo(
          {
            url: item.page
          },
          item.ifLogin
        )
      }
    }
  }
}
</script>

<style>
.rowList {
  padding: 20rpx 0 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.rowListItem {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40rpx;
  flex-basis: 33.33%;
}
</style>
