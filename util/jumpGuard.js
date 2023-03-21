export default function navgitateTo(url,ifLogin){//ifLogin用于判断跳转页面是否需要登录才能查看，传true 或 false
  if(ifLogin){
    // let login = this.$store.state.login //获取当前的登录状态，登录后才能跳转
    let login = uni.getStorageSync('token')
    if(login){
      uni.navigateTo({
        ...url
      })
    }else{
      this.$refs.uToast.show({
        type: 'error',
        icon: false,
        message: '您还未登录哦'
      })
    }
    return
  }else{
    uni.navigateTo({
      ...url
    })
  }
}
