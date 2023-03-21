<template>
  <view>
    <view style="background-color: #e03d3d; padding: 0 20rpx 20rpx">
      <u-search
        placeholder="请输入搜索内容"
        :clearabled="true"
        :show-action="true"
        actionText="搜索"
        :animation="true"
        v-model="keyword"
      >
      </u-search>
    </view>
    <u-swiper :list="list1" height="400rpx"> </u-swiper>
    <view style="padding: 0 30rpx">
      <view class="reagent">
        <view class="textInfo">
          <view class="textItem">
            <text
              style="
                font-size: 40rpx;
                font-weight: 600;
                font-style: italic;
                color: #ffffff;
              "
              >40万</text
            >
            <text style="color: #ffffff; font-size: 24rpx"
              >现存HIV潜伏患者</text
            >
          </view>
          <view style="background: #ffffff; width: 4rpx; height: 90rpx"></view>
          <view class="textItem">
            <text
              style="
                font-size: 40rpx;
                font-weight: 600;
                font-style: italic;
                color: #ffffff;
              "
              >10000</text
            >
            <text style="color: #ffffff; font-size: 24rpx"
              >人次已被协助检测</text
            >
          </view>
        </view>
        <view class="reagentButton" @click="applicationReagent"
          >立即免费申请试剂</view
        >
      </view>
    </view>
    <view style="margin: 20rpx 20rpx; border-radius: 30rpx; overflow: hidden">
      <row-list :rowList="rowList"></row-list>
    </view>
    <view style="padding: 0 20rpx">
      <article-item
        v-for="(item, index) in articleList"
        :key="index"
        :article="item"
      ></article-item>
    </view>
  </view>
</template>

<script>
let img1 =
  'https://codertzm.oss-cn-chengdu.aliyuncs.com/QQ图片20220414174235.png'
let img2 =
  'https://codertzm.oss-cn-chengdu.aliyuncs.com/QQ图片20220414174242.png'
import rowList from '../../components/rowList/rowList.vue'
import articleItem from '../../components/articleItem.vue'
export default {
  components: { rowList, articleItem },
  onLoad() {
    if(!uni.getStorageSync('token')){
      uni.reLaunch({
        url:'/pages/login/login'
      })
    }
  },
  data() {
    return {
      keyword: '',
      list1: [img1, img2],
      rowList: [
        {
          img: '../../static/icon/index/wenda.png',
          title: '问答专区',
          page: '/pages-index/pages/question/question',
          ifLogin: false
        },
        {
          img: '../../static/icon/index/jingsai.png',
          title: '知识竞赛',
          page: '/pages-index/pages/quizList/quizList',
          ifLogin: true
        },
        // {
        //   //未分包
        //   img: '../../static/icon/index/zhiyuan.png',
        //   title: '志愿服务',
        //   page: '/pages/volunteer/volunteer',
        //   ifLogin: true
        // },
        {
          img: '../../static/icon/index/youxi.png',
          title: '防艾游戏',
          page: 'game',
          ifLogin: true //判断该页面是否需要登录才能跳转
        },
        {
          img: '../../static/icon/index/wenjuan.png',
          title: '问卷调查',
          page: '/pages-index/pages/questionnaire/questionnaire',
          ifLogin: true //判断该页面是否需要登录才能跳转
        },
        {
          img: '../../static/icon/index/pinggu.png',
          title: '风险评估',
          page: '/pages/assess/assess',
          ifLogin: true //判断该页面是否需要登录才能跳转
        }
      ],
      articleList: [
        {
          img: 'https://codertzm.oss-cn-chengdu.aliyuncs.com/1.jpg',
          title: '艾滋病常见症状',
          content:
            'HIV感染者要经过数年、甚至长达10年或更长的潜伏期后才会发展成艾滋病病人，因机体抵抗力极度下降会出现多种感染，如带状疱疹、口腔霉菌感染、肺结核，特殊病原微生物引起的肠炎、肺炎、脑炎，念珠菌、肺孢子虫等多种病原体引起的严重感染等，后期常常发生恶性肿瘤，并发生长期消耗，以至全身衰竭而死亡。'
        },
        {
          img: 'https://codertzm.oss-cn-chengdu.aliyuncs.com/2.jpg',
          title: '得了艾滋病怎么办',
          content:
            '1.检查CD4细胞计数/病毒载量、2.做好措施、3.规范作息、4.科学用药、5.食物忌口、6.心态良好'
        },
        {
          img: 'https://codertzm.oss-cn-chengdu.aliyuncs.com/3.jpg',
          title: '如何预防艾滋病',
          content:
            '①坚持洁身自爱，不卖淫、嫖娼，避免婚前、婚外性行为②严禁吸毒，不与他人共用注射器。③不要擅自输血和使用血制品，要在医生的指导下使用。④不要借用或共用牙刷、剃须刀、刮脸刀等个人用品。⑤受艾滋病感染的妇女避免怀孕、哺乳。⑥使用避孕套是性生活中最有效的预防性病和艾滋病的措施之一。⑦要避免直接与艾滋病患者的血液、精液、乳汁和尿液接触，切断其传播途径。⑧关心、帮助和不歧视艾滋病病人及艾滋病病毒感染者，是预防与控制艾滋病的重要方面。 ⑨艾滋病威胁着每一个人每一个家庭，预防艾滋病是全社会的责任。'
        }
      ]
    }
  },
  methods: {
    applicationReagent() {
      this.$navgitateTo(
        {
          url: '/pages-index/pages/applicationReagent/applicationReagent'
        },
        true
      )
    },
    goQuestion() {
      uni.navigateTo({
        url: '/pages/question/question'
      })
    },
    goVolunteer() {
      uni.navigateTo({
        url: '/pages/volunteer/volunteer'
      })
    }
  }
}
</script>
<style>
.reagent {
  margin-top: 20rpx;
  padding: 40rpx 20rpx 10rpx;
  background-color: #e03d61;
  border-radius: 30rpx;
}
.textInfo {
  display: flex;
  justify-content: space-around;
}
.textItem {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.reagentButton {
  padding: 20rpx;
  margin: 40rpx auto 0;
  width: 60%;
  /* background-color: #80DBFE; */
  color: #ffffff;
  font-weight: 600;
  text-align: center;
  border-radius: 999px;
}
</style>
