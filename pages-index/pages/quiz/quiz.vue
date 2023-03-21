<template>
    <view>
      <view>
        <quiz-info :quizInfo="quizInfo"></quiz-info>
      </view>
      <view>
        <check-xi @confrim="confrim" 
        @checkOption="checkOption" 
        :questionList="questionList" 
        :colorStyle="colorStyle"></check-xi>
      </view>
      <view class="">
        <u-modal :show="show" :title="title" :content='content' @confirm="close">
          <view class="">
            <text>你的得分为</text>
            <text>{{correct*5}}</text>
          </view>
        </u-modal>
      </view>
    </view>
</template>  

<script>
import {questionList} from '../../../util/quiz.js'
import {answer} from '../../../util/quiz.js'
import checkXi from '../../components/xi-check/check.vue'
import quizInfo from '../../components/quizInfo/quizInfo.vue'
export default {
        components:{
            checkXi,
			quizInfo
        },
        data() { //模拟数据
            return {
				show:false,
				title:'答题成功',
				content:'',
				quizInfo:{},
				correct:0,
				userId: '' ,//用户id
                colorStyle: { // 颜色修改自定义 -- 可选参数
                    nextBac: '#f9cce1', //下一题按钮背景色
                    nextCol: '#FFFFFF', //下一题按钮背字体颜色
                    optBac: '#f9cce1', //选项按钮背景色
                    optCol: '#232131', //选项按钮字体颜色
                    optBacActive: '#f99eb2', //选项按钮背景色 - 选中
                    optColActive: '#FFFFFF', //选项按钮字体颜色-选中
                },
				answer:[],
				questionList:[]
            }
        },
		created() {
			this.questionList = questionList
			this.answer = answer
		},
		onLoad: function (option) {
			this.userId = this.$store.state.userInfo.id
			const item = JSON.parse(decodeURIComponent(option.item));
			this.quizInfo = item
		},
        methods: {
            // 提交事件
            confrim(e){ 
                  if(e.isEnd){
                    // console.log('next',e.checkRes.keyFormat);
					let temp = e.checkRes.keyFormat
					for(let i=0 ; i<this.answer.length;i++){
						let option = temp[i].keyFormat
						let key = this.answer[i].keyFormat
						if(option[0] == key[0]){
							this.correct++
						}
					}
					console.log(this.correct,this.quizInfo,this.correct,this.$store.state.userInfo.id)
					
					this.$request(
						'/knowledgeGame/finish',
						{
							"id": this.quizInfo.id, //竞赛id
							"correct": this.correct, //正确数量
							"wrong": null, //错误数量
							"userId": this.userId //用户id
						},
						"POST"
					).then((res)=>{
						console.log(res)
						this.show = true
					})
                  }else{
                  	console.log('next',e);
                  }
            },
            // 答案选择 change 事件
            checkOption(e){
				// console.log('check',e);
            },
			close(){
				uni.navigateBack({
					delta: 1,
					success() {
					  let page = getCurrentPages().pop() //跳转页面成功之后
					  page.onLoad() //如果页面存在，则重新刷新页面
					}
				})
			}
        }
    }
</script>
<style>
	
</style>