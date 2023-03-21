<template>
	<view style="padding: 20rpx 30rpx;">
		<u-toast ref="uToast"></u-toast>
		<text style="color: #919191;">请提交相关资料，大约一个工作日完成审核</text>
		<view class="devider"></view>
		<u-upload
				:fileList="fileList1"
				@afterRead="afterRead"
				@delete="deletePic"
				name="1"
				multiple
				:maxCount="10"
		></u-upload>
		<view class="commit" @click="commit">
			提交
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				fileList1: [],
        userInfo:{}
			}
		},
    created() {
      this.userInfo = uni.getStorageSync('userInfo')
    },
		methods: {
			commit(){
				if (this.fileList1.length == 0) {
				  this.$refs.uToast.show({
				    type: 'error',
				    icon: false,
				    message: '请上传相关资料'
				  })
				}else{
          this.userInfo.isPatient=true
          this.$request(
            '/user/update',
            this.userInfo,
            'POST'
          ).then((res)=>{
            if(res.code == 200){
              this.$request(
                '/user/info'
              ).then((res)=>{
                console.log('data',res)
                uni.setStorage({
                  key:'userInfo',
                  data: res.data
                })
                this.$refs.uToast.show({
                  type: 'success',
                  message: "提交成功",
                  iconUrl: 'https://cdn.uviewui.com/uview/demo/toast/success.png'
                })
                setTimeout(()=>{
                  uni.reLaunch({
                  	url: '/pages/my/my'
                  });
                },1000)
              })
            }else{
              this.$refs.uToast.show({
                type: 'error',
                message: res.msg
              })
            }
          })
				}
			},
			deletePic(event) {
				this[`fileList${event.name}`].splice(event.index, 1)
			},
			// 新增图片
			async afterRead(event) {
				// 当设置 mutiple 为 true 时, file 为数组格式，否则为对象格式
				let lists = [].concat(event.file)
				let fileListLen = this[`fileList${event.name}`].length
				lists.map((item) => {
					this[`fileList${event.name}`].push({
						...item,
						// status: 'uploading',
						// message: '上传中'
					})
				})
				for (let i = 0; i < lists.length; i++) {
					// const result = await this.uploadFilePromise(lists[i].url)
					let item = this[`fileList${event.name}`][fileListLen]
					this[`fileList${event.name}`].splice(fileListLen, 1, Object.assign(item, {
						status: 'success',
						message: '',
						url: result
					}))
					fileListLen++
				}
			},
			// uploadFilePromise(url) {
			// 	return new Promise((resolve, reject) => {
			// 		let a = uni.uploadFile({
			// 			url: 'http://192.168.2.21:7001/upload', // 仅为示例，非真实的接口地址
			// 			filePath: url,
			// 			name: 'file',
			// 			formData: {
			// 				user: 'test'
			// 			},
			// 			success: (res) => {
			// 				setTimeout(() => {
			// 					resolve(res.data.data)
			// 				}, 1000)
			// 			}
			// 		});
			// 	})
			// },
		}
	}
</script>

<style>
	.devider{
		width: 100%;
		height: 2px;
		margin: 20rpx 0;
		background-color: #919191;
	}
	.commit{
		margin: 0 auto;
		margin-top: 70rpx;
		width: 70%;
		height: 100rpx;
		line-height: 100rpx;
		text-align: center;
		background-color: #79d7fc;
		border-radius: 30rpx;
		color: #FFFFFF;
	}
</style>
