<template>
  <view>
    <view class="add" @click="inquiry" style="background-color: #e03d3d">
      添加咨询
    </view>
    <view style="padding: 20rpx 30rpx">
      <view v-for="(item, index) in inquiryList">
        <navigator
          class="item-box"
          :url="
            '../doctorAnswer/doctorAnswer?item=' +
            encodeURIComponent(JSON.stringify(item))
          "
        >
          <view class="header">
            <text style="color: #8b8b8b">用户信息</text>
            <text v-show="item.cAnswer" style="color: #ff393c"
              >已回答，点击查看结果</text
            >
            <text v-show="!item.cAnswer" style="color: #8b8b8b">未回复</text>
          </view>
          <view class="info">
            <text>性别:{{ item.sex ? '男' : '女' }}</text
            ><text style="margin-left: 50rpx">年龄:{{ item.age }}</text>
          </view>
          <text style="color: #8b8b8b">用户疑问</text>
          <view style="padding: 20rpx 20rpx">
            <text class="symptom">
              {{ item.symptom }}
            </text>
          </view>
        </navigator>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      userId: '',
      inquiryList: [
        // {
        // 	cAnswer:true,
        // 	sex:'男',
        // 	age:22,
        // 	symptom:"受到法国佳士得了士大夫敢死队韩国喀什觉得和公交卡速度和按时打发时间考虑对山扩大飞机卡拉是否"
        // },
      ]
    }
  },
  onLoad() {
    let _this = this
    uni.getStorage({
      key: 'userInfo',
      success: function (res) {
        console.log('userInfo', res.data)
        _this.userId = res.data.id
        _this.getList()
      }
    })
  },
  methods: {
    dcotorAnswer() {},
    inquiry() {
      uni.navigateTo({
        url: '../inquiry/inquiry'
      })
    },
    getList() {
      this.$request('/consultant/list', { userId: this.userId }).then((res) => {
        this.inquiryList = res.data
      })
    }
  }
}
</script>

<style>
.add {
  width: 100%;
  height: 80rpx;
  line-height: 80rpx;
  position: fixed;
  bottom: 0;
  background-color: #f9cce1;
  text-align: center;
  color: #ffffff;
}
.item-box {
  background-color: #ffffff;
  padding: 20rpx 30rpx;
  border-radius: 30rpx;
  margin-bottom: 30rpx;
}
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.info {
  padding: 20rpx 20rpx 30rpx;
}
.symptom {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
}
</style>
