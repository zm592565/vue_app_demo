<template>
  <swiper :options="swiperOption" ref="mySwiper" class="mySwiper">
    <!-- slides -->
    <!--<swiper-slide v-if="piclist" v-for="(value,index) in piclist" :key="index">-->
      <!--<img :src="value.pic.default" :srcset="value.pic.big"/>-->
    <!--</swiper-slide>-->

    <swiper-slide>
      <img src="~staticPath/img/index_banner01@2x.png" srcset="../../../static/img/index_banner01@2x.png 2x,../../../static/img/index_banner01@3x.png 3x"/>
    </swiper-slide>
    <swiper-slide>
      <img src="~staticPath/img/index_banner01@2x.png" srcset="../../../static/img/index_banner01@2x.png 2x,../../../static/img/index_banner01@3x.png 3x"/>
    </swiper-slide>
    <swiper-slide>
      <img src="~staticPath/img/index_banner01@2x.png" srcset="../../../static/img/index_banner01@2x.png 2x,../../../static/img/index_banner01@3x.png 3x"/>
    </swiper-slide>

    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>


    <!--&lt;!&ndash; Slider main container &ndash;&gt;-->
    <!--<div class="swiper-container">-->
      <!--&lt;!&ndash; Additional required wrapper &ndash;&gt;-->
      <!--<div class="swiper-wrapper">-->
        <!--&lt;!&ndash; Slides &ndash;&gt;-->
        <!--<div class="swiper-slide"  v-if="piclist" v-for="(value,index) in piclist" :key="index">-->
          <!--<img :src="value.pic.default" :srcset="value.pic.big"/>-->
        <!--</div>-->


      <!--</div>-->
      <!--&lt;!&ndash; If we need pagination &ndash;&gt;-->
      <!--<div class="swiper-pagination"></div>-->
    <!--</div>-->


</template>
<script>
//  import Swiper from 'swiper';

  import 'swiper/dist/css/swiper.css'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  export default {
    data(){
      return{
        swiperBoxHeight:0,
        swiperOption: {
          autoplay:true,
          loop:true,
          pagination: {
            el: '.swiper-pagination'
          }
        }
      }
    },
    mounted(){
      /*检测是否是高清屏，如果超过3则加载3倍图*/
//      alert(window.devicePixelRatio)


    },
    props:{
      piclist:{
        type:Array,
        default:()=>{
          return [{url:'http://www.163.com',title:'test',pic:{default:'../../../static/img/index_banner01@2x.png',big:'../../../static/img/index_banner01@2x.png 2x,../../../static/img/index_banner01@3x.png 3x'}},{url:'http://www.163.com',title:'test',pic:{default:'../../../static/img/index_banner01@2x.png',big:'../../../static/img/index_banner01@2x.png 2x,../../../static/img/index_banner01@3x.png 3x'}}]
        }
      }
    },
    methods:{

    },
    components: {
      swiper,
      swiperSlide
    }
  }
</script>
<style lang="css" scoped>
  @import 'swiper/dist/css/swiper.css'
  .mySwiper{
    height:4.4rem
  }
  .swiper-container{
    height:4.4rem
  }
  .swiper-slide >img{
    height:4.4rem
  }
  .swiper-container-horizontal > .swiper-pagination-bullets{
    bottom: -10px;
  }

</style>
