<template>
  <transition name="slide">
    <div class="index">
      index
      <br/>
      <br/><br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

dsadsa
    <p>dsadsa</p>
      <button @click="sendRequest">发送请求</button>
      <div v-if="ajaxBack">{{ajaxBack}}</div>

      <button @click="testVuex">测试根状态</button>
      <div>getTest:{{getTest}}</div>
      <div>text：{{text}}</div>
    </div>
  </transition>
</template>
<script>
  import { mapState, mapActions,mapGetters} from 'vuex';
export default {
  data(){
    return {
      ajaxBack:null
    }
  },
  watch:{
    text:function (value) {
      alert('text发生了变化')
      return value;
    }
  },
  computed:{
    ...mapState([
      'indexPage',
      'getterTest',
      'num',
      'text'
    ]),
    ...mapGetters([
      'getTest'
    ])
  },
  methods:{
    testVuex(){
        this.$store.dispatch('IndexTest');
        this.$store.dispatch('add')
    },
    sendRequest(){
      alert('a')
       this.$function.requestHttpMethods('index',{name:1})
         .then(res=>{
            console.info(res)
           this.ajaxBack=res.message
         })
    }

  }
}
</script>
<style lang="stylus" scoped>
.index
  background yellow
  height 2000px
  overflow-y scroll
</style>
