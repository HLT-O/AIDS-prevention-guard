<template>
  <view class="container">
    <template v-for="item in assessList">
      <view class="item">
        <view class="title">{{ item.title }}</view>
        <u-radio-group
          v-model="item.radioValue"
          placement="column"
          @change="groupChange"
        >
          <u-radio
            activeColor="#e03d3d"
            :customStyle="{ marginBottom: '8px' }"
            v-for="(radioItem, index) in item.radioList"
            :key="index"
            :label="radioItem.name"
            :name="radioItem.name"
            @change="radioChange"
          >
          </u-radio>
        </u-radio-group>
      </view>
    </template>
    <view style="margin-top: 20px">
      <button
        @click="goResult"
        style="background-color: #e03d3d; color: #fff; font-size: 30rpx"
      >
        评估
      </button>
    </view>
  </view>
</template>

<script>
import data from '../../mock/accessList.js'
export default {
  data() {
    return {
      assessList: [],
      // 基本案列数据
      radiolist1: [
        {
          name: '苹果',
          disabled: false
        },
        {
          name: '香蕉',
          disabled: false
        },
        {
          name: '橙子',
          disabled: false
        },
        {
          name: '榴莲',
          disabled: false
        }
      ],
      // u-radio-group的v-model绑定的值如果设置为某个radio的name，就会被默认选中
      radiovalue1: '苹果'
    }
  },
  created() {
    this.assessList = data
  },
  methods: {
    groupChange(n) {
      console.log('groupChange', n)
    },
    radioChange(n) {
      console.log('radioChange', n)
    },
    goResult() {
      uni.navigateTo({
        url: '../assessResult/assessResult'
      })
    }
  }
}
</script>

<style scoped>
.container {
  padding: 20px;
  padding-top: 10px;
}

.item {
  margin: 10px 0;
}

.title {
  margin-bottom: 10px;
}
</style>
