<template>
  <view class="volunteerInfo">
    <view class="title">
      <view>
        {{ item.title }}
      </view>
      <view class="time"
        >活动时间：{{ transformTime(item.startDate) }}-{{
          transformTime(item.endDate)
        }}</view
      >
      <view></view>
    </view>
    <view class="volunteerDesc" v-if="current == 0" v-html="item.desc"> </view>
    <view>
      <button
        class="btn"
        style="background-color: #e03d3d"
        type="default"
        @click="submit"
      >
        提交
      </button>
    </view>
  </view>
</template>

<script>
import { transformTime } from '../../util'
export default {
  components: {},
  onLoad(options) {
    this.item = JSON.parse(options.item)
  },
  data() {
    return {
      item: '',
      list: ['活动须知', '预约详情'],
      current: 0,
      rules: {
        'formData.name': {
          type: 'string',
          required: true,
          message: '请填写姓名',
          trigger: ['change']
        },
        'formData.phone': {
          type: 'string',
          required: true,
          message: '请填写手机号码',
          trigger: ['change']
        }
      },
      formData: {
        name: '',
        phone: ''
      }
    }
  },
  computed: {},
  methods: {
    // 时间转换
    transformTime(time) {
      return transformTime(time)
    },
    // 提交志愿服务申请
    submit() {
      uni.getStorage({
        key: 'userInfo',
        success: (res) => {
          const userInfo = res.data
          if (!userInfo.isVolunteer) {
            uni.showToast({
              icon: 'error',
              title: '您不是志愿者噢',
              duration: 2000
            })
          } else {
            this.$request(
              '/volunteer/booking',
              {
                userId: userInfo.id,
                volunteerId: this.item.id
              },
              'POST'
            ).then((res) => {
              uni.showToast({
                icon: 'success',
                title: res.msg,
                duration: 2000
              })
            })
          }
        }
      })
      // todo: 申请的后台逻辑
      uni.navigateBack({})
    },
    sectionChange(index) {
      this.current = index
    }
  }
}
</script>

<style scoped lang="scss">
.volunteerInfo {
  margin: 20rpx;
  .title {
    padding-left: 40rpx;
    line-height: 90rpx;
    font-size: 33rpx;
    background-color: #fff;
    border-bottom: 1px solid #eee;
    margin-bottom: 20rpx;
    border-radius: 20rpx;
    box-shadow: 2px 2px 2px 2px rgba(233, 228, 228, 0.849);
  }
  .time {
    font-size: 28rpx;
    color: rgba(170, 170, 170, 0.918);
  }
  .volunteerDesc {
    font-size: 34rpx;
    padding: 40rpx;
    padding-top: 30rpx;
    border: 1px solid #eee;
    border-radius: 15rpx;
    background-color: #fff;
    margin-bottom: 20rpx;
    border-radius: 20rpx;
    box-shadow: 2px 2px 2px 2px rgba(233, 228, 228, 0.849);
  }
  .volunteerForm {
    .base {
      margin: 20rpx;
      padding-left: 30rpx;
      background-color: #fff;
      font-size: 35rpx;
      font-weight: bold;
      border: 5rpx solid #eee;
      border-radius: 20rpx;
      box-shadow: 2px 2px 2px 2px rgba(238, 238, 238, 0.938);
    }
    .header {
      .time {
        height: 90rpx;
        line-height: 90rpx;
      }
      .time {
        display: flex;
        .date {
          margin-left: 10rpx;
        }
      }
    }

    .form {
      font-weight: normal;
      .instructions {
        font-weight: bold;
        text-align: center;
        height: 90rpx;
        line-height: 90rpx;
        border-bottom: 1px solid #eee;
      }
    }
  }
}

.btn {
  background-color: #79d8fd;
  color: #fff;
  padding: 20rp;
  font-size: 30rpx;
  border-radius: 20rpx;
  box-shadow: 2px 2px 2px 2px rgba(238, 238, 238, 0.938);
}
</style>
