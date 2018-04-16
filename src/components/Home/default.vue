<template>
  <div class="home">
    <div class="content_box">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
      <!--<router-view></router-view>-->
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
//  import Footer from 'components/Bottom/bottom';
  export default{
    data(){
      return {}
    },
    components: {
//      Footer
    }
  }

</script>
<style lang="stylus" scoped>

</style>
