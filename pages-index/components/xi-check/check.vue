<template>
  <view class="answer__content">
    <!-- 		<block v-if="newOptList[showQuestionIndex].imageList.length">
			<view :class="['answer__banner', switchVisible ? 'question--find-out' : 'question--find-in']">
				<swiper :indicator-dots="true" :autoplay="true">
					<block v-for="(item, index) in newOptList[showQuestionIndex].imageList" :key="index">
						<swiper-item><image :src="item" mode="aspectFill"></image></swiper-item>
					</block>
				</swiper>
			</view>
		</block> -->
    <view
      :class="[
        'answer__question',
        switchVisible ? 'question--find-out' : 'question--find-in'
      ]"
      v-if="newOptList.length"
    >
      <view class="question_title">
        <view class="title__number"
          >{{
            newOptList[showQuestionIndex].number || showQuestionIndex + 1
          }}.</view
        >
        <view>
          （{{ getQuestionType(newOptList[showQuestionIndex].type) }})
          {{ newOptList[showQuestionIndex].title }}
        </view>
      </view>

      <view class="question__option">
        <block v-if="selectKey.includes(newOptList[showQuestionIndex].type)">
          <block
            v-for="(item, index) in newOptList[showQuestionIndex]
              .question_option"
            :key="index"
          >
            <view
              :style="item.active ? optActiveStyle : optStyle"
              class="question__option__item"
              @tap.stop="checkOption"
              :data-id="item.id"
            >
              <view class="question__option__item__number">{{
                item.name
              }}</view>
              <view>{{ item.content }}</view>
            </view>
          </block>
        </block>
        <block v-else-if="newOptList[showQuestionIndex].type == 'write'">
          <view class="item__key__box">
            答案：
            <input
              class="write_input"
              placeholder="请填写你的答案"
              v-model="newOptList[showQuestionIndex].question_key"
            />
          </view>
        </block>
      </view>
    </view>

    <view
      class="answer__next__btn"
      :style="nextStyle"
      style="background-color: #e03d3d !important; color: #fff"
      @tap.stop="nextQuestionBtn"
    >
      {{ isEnd ? '提  交' : '下 一 题' }}
    </view>
  </view>
</template>

<script>
export default {
  props: {
    questionList: {
      //数据列表
      type: Array,
      default: () => []
    },
    colorStyle: {
      type: Object,
      default: () => {}
    },
    warningTips: {
      type: String,
      default: '请先作答哦~'
    }
  },
  data() {
    return {
      colorMap: {
        nextBac: '#C9784F',
        nextCol: '#FFFFFF',
        optBac: '#EEB67A',
        optCol: '#232131',
        optBacActive: '#C9784F',
        optColActive: '#FFFFFF'
      },
      selectKey: ['radio', 'checkbox'],
      newOptList: [], //初始化数据
      showQuestionIndex: 0, //当前展示题号
      isEnd: false, //是否为最后一题
      switchVisible: false // 切换状态
    }
  },
  watch: {},
  computed: {
    nextStyle() {
      return `background:${this.colorMap.nextBac};color:${this.colorMap.nextCol};`
    },
    optStyle() {
      return `background:${this.colorMap.optBac};color:${this.colorMap.optCol};`
    },
    optActiveStyle() {
      return `background:${this.colorMap.optBacActive};color:${this.colorMap.optColActive};`
    }
  },
  mounted() {
    if (Array.isArray(this.questionList)) {
      this.newOptList = this.deepClone(this.questionList)
      if (this.newOptList.length === 1) this.isEnd = true
    }
    this.colorMap = this.deepMerge(this.colorMap, this.colorStyle)
  },
  methods: {
    // 深度克隆 对象
    deepClone(obj) {
      // 对常见的“非”值，直接返回原来值
      if ([null, undefined, NaN, false].includes(obj)) return obj
      if (typeof obj !== 'object' && typeof obj !== 'function') {
        //原始类型直接返回
        return obj
      }
      var o = Array.isArray(obj) ? [] : {}
      for (let i in obj) {
        if (obj.hasOwnProperty(i)) {
          o[i] = typeof obj[i] === 'object' ? this.deepClone(obj[i]) : obj[i]
        }
      }
      return o
    },
    // 深度合并 对象
    deepMerge(target = {}, source = {}) {
      target = this.deepClone(target)
      if (typeof target !== 'object' || typeof source !== 'object') return false
      for (const prop in source) {
        if (!source.hasOwnProperty(prop)) continue
        if (prop in target) {
          if (typeof target[prop] !== 'object') {
            target[prop] = source[prop]
          } else {
            if (typeof source[prop] !== 'object') {
              target[prop] = source[prop]
            } else {
              if (target[prop].concat && source[prop].concat) {
                target[prop] = target[prop].concat(source[prop])
              } else {
                target[prop] = this.deepMerge(target[prop], source[prop])
              }
            }
          }
        } else {
          target[prop] = source[prop]
        }
      }
      return target
    },
    // 获取题目类型
    getQuestionType(code) {
      let name = '问题'
      switch (code) {
        case 'write':
          name = '填空'
          break
        case 'radio':
          name = '单选'
          break
        case 'checkbox':
          name = '多选'
          break
      }
      return name
    },
    // 选择答案
    checkOption(e) {
      //选择事件
      let checkOpt = this.newOptList[this.showQuestionIndex]
      this.checkActive(e.currentTarget.dataset.id)
      //返回数据
      let opt = {
        id: this.newOptList[this.showQuestionIndex].id,
        value: e.currentTarget.dataset.id
      }
      this.$emit('checkOption', opt)
    },
    checkActive(_id) {
      //选择答案事件处理
      let newOpt = this.newOptList
      let checkOpt = newOpt[this.showQuestionIndex].question_option
      if (newOpt[this.showQuestionIndex].type == 'radio') {
        checkOpt.map((item, i) => {
          if (item.id == _id) {
            item.active = !item.active
          } else {
            item.active = false
          }
        })
      } else if (newOpt[this.showQuestionIndex].type == 'checkbox') {
        checkOpt.map((item, i) => {
          if (item.id == _id) {
            item.active = !item.active
          }
        })
      }
      this.newOptList = newOpt
    },
    //下一题
    nextQuestionBtn(e) {
      if (!this.checkTest()) {
        return wx.showToast({
          title: this.warningTips,
          icon: 'none'
        })
      }
      //构建返回数据
      let opt = {
        current_id: this.showQuestionIndex,
        isEnd: this.isEnd
      }
      if (!this.isEnd) {
        this.switchQuestion()
      } else {
        return this.formatKey(opt)
      }
      this.$emit('confrim', opt)
    },
    // 切换题目
    switchQuestion() {
      this.switchVisible = true
      let timer = setTimeout(() => {
        clearTimeout(timer)
        let newList = this.newOptList
        if (this.showQuestionIndex < newList.length - 1) {
          this.showQuestionIndex = this.showQuestionIndex + 1
          if (this.showQuestionIndex == newList.length - 1) this.isEnd = true
          this.switchVisible = false
        }
      }, 300)
    },
    //答案选择验证
    checkTest() {
      let check_res = false
      if (this.newOptList[this.showQuestionIndex].type == 'write') {
        if (this.newOptList[this.showQuestionIndex].question_key.trim())
          check_res = true
      } else {
        let check_opt = this.newOptList[this.showQuestionIndex]
        check_opt.question_option.forEach((item, i) => {
          if (item.active) {
            check_res = true
            return
          }
        })
      }
      return check_res
    },
    //答案整理返回
    formatKey(opt) {
      let newAnswer = []
      let newList = this.newOptList
      let formatCheck_res = []
      newList.forEach((item, i) => {
        let key_res = []
        let test_item = {
          id: item.id,
          keyFormat: []
        }
        let test = []
        if (item.type == 'write') {
          key_res.push(item.question_key.trim())
          test_item.keyFormat.push(item.question_key.trim())
        } else {
          item.question_option.forEach((item_s, i_s) => {
            if (item_s.active) {
              key_res.push(item_s)
              test_item.keyFormat.push(item_s.id)
            }
          })
        }
        formatCheck_res.push(test_item)
        newAnswer.push({
          id: item.id,
          type: item.type,
          number: item.number,
          title: item.title,
          keyRes: key_res
        })
      })
      opt.checkRes = {
        check_res: newAnswer,
        keyFormat: formatCheck_res
      }
      this.$emit('confrim', opt)
    }
  }
}
</script>

<style lang="scss" scoped>
view {
  box-sizing: border-box;
}

.answer__content {
  width: 100%;
  // min-height: 100vh;
  padding-bottom: 80rpx;
}

// .answer__banner {
// 	width: 100%;
// 	height: 388rpx;
// }

// .answer__banner swiper,
// .answer__banner swiper swiper-item {
// 	width: 100%;
// 	height: 100%;
// }

// .answer__banner swiper swiper-item image {
// 	width: 100%;
// 	height: 100%;
// }

.answer__question {
  width: 100%;
  padding: 0 50rpx 100rpx;
  margin-top: 30rpx;
}

.answer__question .question_title {
  display: flex;
  width: 100%;
  font-size: 28rpx;
}

.answer__question .title__number {
  padding-top: 0rpx;
  min-width: 34rpx;
}

.answer__question .question__option {
  width: 100%;
  margin-top: 13rpx;
}

.answer__question .question__option__item {
  display: flex;
  align-items: center;
  width: 100%;
  padding: 23rpx 98rpx;
  margin-top: 30rpx;
  font-size: 26rpx;
  color: #232131;
  background: #eeb67a;
  border-radius: 30rpx;
  overflow: hidden;
}

.answer__question .question__option__item .question__option__item__number {
  padding-top: 4rpx;
  margin-right: 20rpx;
}

.answer__next__btn {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 90rpx;
  line-height: 90rpx;
  color: #ffffff;
  font-size: 30rpx;
  text-align: center;
  background: #c9784f;
}

.question__option__active {
  color: #ffffff !important;
  background-color: #c9784f !important;
}

.item__key__box {
  display: flex;
  width: 100%;
  margin-top: 30rpx;

  .write_input {
    width: 400rpx;
    font-size: 28rpx;
    color: #333333;
    text-align: center;
    border-bottom: 1rpx solid #999999;
  }
}

.question--find-out {
  transform: scale(0) translateX(-100%);
  transition: all 0.3s;
}
.question--find-in {
  animation: findIn-question 0.3s;
}
@keyframes findIn-question {
  from {
    transform: scale(0);
    opacity: 0;
  }

  to {
    transform: scale(1);
    opacity: 1;
  }
}
</style>
