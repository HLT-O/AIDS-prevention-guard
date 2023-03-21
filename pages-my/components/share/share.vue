<template>
  <view
    style="
      margin-top: 30rpx;
      background-color: #ffffff;
      padding: 10rpx 20rpx;
      border-radius: 30rpx;
    "
  >
    <view class="user">
      <view style="overflow: hidden; border-radius: 99rpx">
        <image
          :src="shareData.head"
          style="width: 40rpx; height: 40rpx"
        ></image>
      </view>
      <text style="margin-left: 10rpx; font-size: 30rpx">{{
        shareData.name
      }}</text>
    </view>
    <view class="content">
      {{ shareData.content }}
    </view>
    <view class="like">
      <image
        src="../../../static/icon/index/aixin.png"
        style="margin-left: 20rpx; width: 40rpx; height: 40rpx"
      >
      </image>
      <text style="font-size: 30rpx">点赞人数：{{ shareData.like }}</text>
    </view>
  </view>
</template>

<script>
export default {
  name: 'share',
  components: {},
  props: {
    shareData: {
      type: Object,
      default: {
        head: '../../../static/img/head1.png',
        name: 'asd',
        content:
          'asd撒旦发射点发生山卡拉地方哈萨克觉得撒打发阿萨的开发啊精神科大夫啊asdaasdhfgasdkj撒旦解放哈克斯的肌肤光滑的收费很高可接受对方迪斯科解放和可是对方会离开',
        like: 22
      }
    }
  },
  data() {
    return {}
  },
  computed: {},
  methods: {}
}
</script>

<style>
.user {
  display: flex;
  align-items: center;
  margin: 10rpx 0;
}

.content {
  margin-left: 50rpx;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
}

.like {
  margin: 20rpx;
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
}
</style>
