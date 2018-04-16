<template>
  <transition name="slide">
    <div id="box">
      <button @click="getStateCount">获取getter</button>
    </div>
  </transition>
</template>
<script>
  export default {
    data(){

      return{
        count:false
      }

    },
    methods:{

      getStateCount(){

        console.info(this.$store.getters['member/getCount'])
        console.info(this.$store.state.member.count)
        this.$store.commit('member/addCount');
        console.info(this.$store.state.member.count)
        let a=this.$store.dispatch('member/actionTest')
        alert(a)

      }






    }






  }
</script>
<style scoped>
  #box{
    height:100%;
    background: red;
  }
</style>
