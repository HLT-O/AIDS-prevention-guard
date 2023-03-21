<template>
  <view style="">
    <u-alert :title="title" type="error" :closable="closable"></u-alert>
    <view style="padding: 0 30rpx">
      <view class="phoneList">
        <view class="listTop">
          <view class="title">
            <u-icon name="phone" color="#2979ff" size="24"></u-icon>
            <view>电话咨询</view>
          </view>
          <view class="address">
            <u-icon name="map" color="#2979ff" size="24"></u-icon>
            <view>重庆</view>
          </view>
        </view>
        <view class="phoneContent">
          <view
            class="phoneItem"
            v-for="(item, index) in phoneList"
            :key="index"
          >
            <view style="font-size: 32rpx">{{ item.name }}</view>
            <view style="font-size: 32rpx">{{ item.phone }}</view>
          </view>
        </view>
      </view>
    </view>
    <view style="padding: 20rpx 30rpx">
      <view class="map-body">
        <view class="page-section page-section-gap">
          <map
            style="width: 100%; height: 500rpx"
            :latitude="latitude"
            :longitude="longitude"
            :markers="covers"
            show-location
            scale="8"
            @markertap="openLocation"
          >
          </map>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      title: '如距离过远，请联系当地卫生局',
      closable: true,
      phoneList: [
        {
          name: '重庆市疾病预防控制中心',
          phone: '023-68812969'
        }
      ],
      id: 0, // 使用 marker点击事件 需要填写id
      // title: 'map',
      latitude: 39.909,
      longitude: 116.39742,
      covers: [
        {
          id: 1,
          title: '重庆市渝中区重庆市疾病预防控制中心',
          latitude: 29.542528,
          longitude: 106.527122,
          width: 20,
          height: 20,
          iconPath: '../../static/icon/position.png'
        }
        // {
        // 	id: 1,
        // 	title: '重庆市沙坪坝区重庆公共卫生医疗救治中心',
        // 	latitude: 29.57411,
        // 	longitude: 106.423607,
        // 	width: 20,
        // 	height: 20,
        // 	iconPath: '../../static/icon/position.png'
        // },
        // {
        // 	id: 2,
        // 	title: '四川省成都市锦江区成都市第十人民医院',
        // 	latitude: 30.623837,
        // 	longitude: 104.105202,
        // 	width: 20,
        // 	height: 20,
        // 	iconPath: '../../static/icon/position.png'
        // },
        // {
        // 	id: 3,
        // 	title: '陕西省西安市雁塔区西安市第八医院',
        // 	latitude: 34.196556,
        // 	longitude: 108.942322,
        // 	width: 20,
        // 	height: 20,
        // 	iconPath: '../../static/icon/position.png'
        // },
        // {
        // 	id: 4,
        // 	title: '贵州省贵阳市乌当区贵阳市公共卫生救治中心',
        // 	latitude: 26.692091,
        // 	longitude: 106.86657,
        // 	width: 20,
        // 	height: 20,
        // 	iconPath: '../../static/icon/position.png'
        // },
        // {
        // 	id: 5,
        // 	title: '云南省昆明市官渡区昆明市第三人民医院',
        // 	latitude: 25.022678,
        // 	longitude: 102.729164,
        // 	width: 20,
        // 	height: 20,
        // 	iconPath: '../../static/icon/position.png'
        // },
        // {
        // 	id: 7,
        // 	title: '山西省太原市万柏林区太原市第四人民医院',
        // 	latitude: 37.860073,
        // 	longitude: 112.472786,
        // 	width: 20,
        // 	height: 20,
        // 	iconPath: '../../static/icon/position.png'
        // },
        // {
        // 	id: 8,
        // 	title: '重庆市铜梁区铜梁区人民医院传染病分院',
        // 	latitude: 29.775885,
        // 	longitude: 106.091568,
        // 	width: 20,
        // 	height: 20,
        // 	iconPath: '../../static/icon/position.png'
        // },
        // {
        // 	id: 9,
        // 	title: '黑龙江省哈尔滨市香坊区哈尔滨市传染病医院',
        // 	latitude: 45.732376,
        // 	longitude: 126.699821,
        // 	width: 20,
        // 	height: 20,
        // 	iconPath: '../../static/icon/position.png'
        // },
        // {
        // 	id: 10,
        // 	title: '石家庄市第五人民医院特需门诊',
        // 	latitude: 38.13969,
        // 	longitude: 114.571739,
        // 	width: 20,
        // 	height: 20,
        // 	iconPath: '../../static/icon/position.png'
        // },
        // {
        // 	id: 11,
        // 	title: '天津市南开区天津市第二人民医院',
        // 	latitude: 39.113525,
        // 	longitude: 117.151802,
        // 	width: 20,
        // 	height: 20,
        // 	iconPath: '../../static/icon/position.png'
        // },
        // {
        // 	id: 12,
        // 	title: '青岛市第六人民医院',
        // 	latitude: 36.100552,
        // 	longitude: 120.374702,
        // 	width: 20,
        // 	height: 20,
        // 	iconPath: '../../static/icon/position.png'
        // },
        // {
        // 	id: 13,
        // 	title: '北京市西城区北京协和医院(西院)',
        // 	latitude: 39.912666,
        // 	longitude: 116.367195,
        // 	width: 20,
        // 	height: 20,
        // 	iconPath: '../../static/icon/position.png'
        // },
        // {
        // 	id: 14,
        // 	title: '驻马店第四人民医院',
        // 	latitude: 32.99176,
        // 	longitude: 114.03019,
        // 	width: 20,
        // 	height: 20,
        // 	iconPath: '../../static/icon/position.png'
        // },
        // {
        // 	id: 15,
        // 	title: '南京市第二人民医院',
        // 	latitude: 32.088699,
        // 	longitude: 118.768898,
        // 	width: 20,
        // 	height: 20,
        // 	iconPath: '../../static/icon/position.png'
        // },
        // {
        // 	id: 16,
        // 	title: '上海公共卫生临床中心(虹口分部)',
        // 	latitude: 31.27387,
        // 	longitude: 121.470169,
        // 	width: 20,
        // 	height: 20,
        // 	iconPath: '../../static/icon/position.png'
        // },
        // {
        // 	id: 17,
        // 	title: '武汉市皮肤病防治研究所',
        // 	latitude: 30.525442,
        // 	longitude: 114.50222,
        // 	width: 20,
        // 	height: 20,
        // 	iconPath: '../../static/icon/position.png'
        // },
        // {
        // 	id: 18,
        // 	title: '宁波市传染病医院',
        // 	latitude: 29.89889,
        // 	longitude: 121.84431,
        // 	width: 20,
        // 	height: 20,
        // 	iconPath: '../../static/icon/position.png'
        // },
        // {
        // 	id: 19,
        // 	title: '南昌市第九医院中心点',
        // 	latitude: 28.6672,
        // 	longitude: 115.928284,
        // 	width: 20,
        // 	height: 20,
        // 	iconPath: '../../static/icon/position.png'
        // },
        // {
        // 	id: 20,
        // 	title: '福州市传染病医院',
        // 	latitude: 26.085583,
        // 	longitude: 119.279755,
        // 	width: 20,
        // 	height: 20,
        // 	iconPath: '../../static/icon/position.png'
        // },
        // {
        // 	id: 21,
        // 	title: '深圳市第三人民医院',
        // 	latitude: 22.63538,
        // 	longitude: 114.128777,
        // 	width: 20,
        // 	height: 20,
        // 	iconPath: '../../static/icon/position.png'
        // },
        // {
        // 	id: 22,
        // 	title: '新疆维吾尔自治区乌鲁木齐市新市区医院',
        // 	latitude: 43.906021,
        // 	longitude: 87.58876,
        // 	width: 20,
        // 	height: 20,
        // 	iconPath: '../../static/icon/position.png'
        // },
      ]
    }
  },
  onLoad() {
    this.getLocation()
  },
  mountde() {},
  methods: {
    getLocation() {
      uni.getLocation({
        type: 'wgs84',
        // isHighAccuracy:true,
        // highAccuracyExpireTime:4000,
        success: async (res) => {
          console.log(res)
          ;(this.longitude = res.longitude), (this.latitude = res.latitude)
        }
      })
    },
    openLocation(a) {
      //参数是marker的信息（只有id）
      let markerId = a.markerId
      let marker = this.findPosition(markerId)
      uni.openLocation({
        latitude: marker.latitude,
        longitude: marker.longitude,
        name: marker.title,
        scale: 4
      })
    },
    //在markers中用id匹配对应的marker并返回，从而获取marker的详细信息
    findPosition(id) {
      for (let i of this.covers) {
        if (i.id == id) {
          return i
        }
      }
    }
  }
}
</script>

<style>
.map-body {
  border-radius: 30rpx;
  overflow: hidden;
}
.phoneList {
  padding: 5rpx 10rpx;
  background: #ffffff;
  border-radius: 30rpx;
}
.listTop {
  display: flex;
  justify-content: space-between;
}
.title {
  display: flex;
  align-items: center;
}
.address {
  display: flex;
  align-items: center;
}
.phoneContent {
  padding: 20rpx 30rpx;
}
.phoneItem {
  padding-bottom: 10rpx;
  margin-bottom: 30rpx;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2rpx solid #dedede;
}
</style>
