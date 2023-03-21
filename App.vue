<script>
export default {
  onLaunch: function () {
    console.log('App Launch')
  },
  onShow: function () {
    console.log('App Show')
    uni.getStorage({//进入小程序时，如有本地缓存，将缓存丢进vuex
      key:'userInfo',
      success:(res)=>{
        if(res.data.id){
          this.$store.commit('setUserInfo',res.data)
        }
      }
    })
  },
  onHide: function () {
    console.log('App Hide')
  },
}
</script>

<style lang="scss">
@import 'uview-ui/index.scss';
page {
  background-color: #fafafa;
}
</style>
