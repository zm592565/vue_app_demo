<template>
  <div id="box" ref="box">
    <header ref="header" class="header">
      <div class="slider_both">
        <span class="checkcode"></span>
        <p>扫一扫</p>
      </div>
      <div class="search">
        <i class="material-icons">search</i>
        <input placeholder="请输入运单号查询快件信息"/>
        <i class="material-icons">mic</i>
      </div>
      <div class="slider_both">
        <span class="getMessage"></span>
        <p>消息</p>
      </div>
    </header>
    <Swiper></Swiper>
    <div class="hot_news">
      <div class="hot_newsTitle"></div>
      <div class="hot_newsContent">
        申通快递APP，您寄快递的首选。申通快递APP，您寄快递的首选。申通快递APP，您寄快递的首选。
      </div>
      <a href="#">更多</a>
    </div>
    <ul class="menuType">
        <li>运费查询</li>
        <li>我要寄件</li>
        <li>我的快递</li>
    </ul>
    <h4 class="indexTitle">常用服务</h4>
    <div class="box_default">
        <ul class="indexMenuBox">
          <li>
            <i class="icon_IndexMenu_order"></i>
            <p>我的订单</p>
          </li>
          <li>
            <i class="icon_IndexMenu_service"></i>
            <p>服务热线</p>
          </li>
          <li>
            <i class="icon_IndexMenu_advice"></i>
            <p>投诉建议</p>
          </li>
          <li>
            <i class="icon_IndexMenu_focus"></i>
            <p>我的关注</p>
          </li>
          <li>
            <i class="icon_IndexMenu_stop"></i>
            <p>禁寄物品</p>
          </li>
          <li>
            <i class="icon_IndexMenu_ques"></i>
            <p>常见问题</p>
          </li>
          <li>
            <i class="icon_IndexMenu_point"></i>
            <p>单号订阅</p>
          </li>
          <li>
            <i class="icon_IndexMenu_attention"></i>
            <p>注意事项</p>
          </li>
        </ul>
    </div>
    <h4 class="pageCommonTitle">我的快递</h4>

  </div>
</template>
<script>
import Swiper from '../commonPage/swiper.vue';
export default {
  data(){
    return{

    }
  },
  mounted(){
      if (cordova.platformId == 'android') {
//        StatusBar.hide();

          StatusBar.overlaysWebView(true);/*占用视图*/
//        StatusBar.backgroundColorByHexString("#f8aa6a");
      }

      this.$refs.box.addEventListener('scroll',()=>{
        let Top=this.$refs.box.scrollTop
        let header=this.$refs.header
        let HeaderTop=this.$refs.header.offsetHeight;
        if(Top>(HeaderTop/2)){
          header.style.backgroundColor='rgba(0,0,0,0.5)'
        }else{
          header.style.backgroundColor='rgba(255,255,255,0)'
        }
      },false)
  },
  methods: {

  },
  components:{
    Swiper
  }

}


</script>
<style lang="stylus" scoped>
  @import "~assetCss/theme.styl";
#box
  height: 100%;
  position relative
  overflow-y: scroll;
  background #f8f8f8
  .header
    background-color $white_transparent_bgcolor
    position fixed
    transition background-color 1s ease;
    -moz-transition background-color 1s ease;	/* Firefox 4 */
    -webkit-transition background-color 1s ease;	/* Safari 和 Chrome */
    -o-transition background-color 1s ease;	/* Opera */
    top: 20px;
    left: 0px;
    right: 0px;
    padding 0.2rem 10px
    z-index: 100;
    display flex
    display -webkit-flex
    div.search
      flex 1
      display flex
      display -webkit-flex
      align-content center
      height 0.6rem
      border-radius 0.3rem;
      background $white_full_bgcolor
      overflow hidden
      i
        font-size 0.4rem
        width 0.6rem
        line-height 0.6rem
        color #9b9b9b
      input
        flex 1
        outline none
        font-size $text-middle
      input::-webkit-input-placeholder
        color $titleVice_color
        font-size $text-small
      input::-moz-placeholder
        font-size $text-small
        color $titleVice_color
      input::-ms-placeholder
        color $titleVice_color
        font-size $text-small
    .slider_both
      width 1rem
      height 0.6rem
      display flex
      display -webkit-flex
      align-items center
      align-content center
      -webkit-align-items center
      -webkit-flex-direction column
      -ms-flex-direction column
      flex-direction column
      span
        flex 1
        width 100%
        &.checkcode
          bg-image('../../../static/img/icon_scan')
          background-size auto 100%
        &.getMessage
          bg-image('../../../static/img/icon_message')
          background-size auto 100%
      p
        color $white_color
        height 0.24rem
        padding-top 0.04rem
        font-size $text-small
        line-height 0.2rem
  .hot_news
    background $white_full_bgcolor
    /*height 0.4rem*/
    padding 0px 10px
    flexlevel()
    .hot_newsTitle{
      height 20px
      width 80px
      bg-image('../../../static/img/hot_news')
      background-position left center!important
      background-size auto 95%
      margin 0.1rem 3px 0.1rem 0px
    }
    .hot_newsContent
      flex1()
      border-left 1px solid #dddddd
      justify-content flex-start
      align-content left
      padding-left 0.1rem
      line-height 22px
      font-size $text-small
      white-space nowrap
      overflow hidden
      text-align left
      text-overflow ellipsis
      margin-right 8px
    a{
      color #ec6806
      font-size $text-small
    }
</style>
