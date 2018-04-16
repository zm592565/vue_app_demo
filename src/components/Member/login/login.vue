<!--登录-->
<template>
  <div class="login">
    <mu-text-field label="账号" v-model="account" hintText="请输入账号" :maxLength="10" @textOverflow="handleInputOverflows" :errorText="errorText" labelFloat/>
    <mu-text-field label="密码" v-model="password" hintText="请输入密码" type="password" labelFloat/>
    <div>
      <mu-flat-button type="button" @click="doLogin" label="登录" class="demo-flat-button"/>
      <mu-flat-button type="button" @click="getStore" label="注册" class="demo-flat-button"/>
      <div v-if="loginAcctoken">
        {{loginAcctoken}}
      </div>
      <div v-if="getUserinfo">
        {{getUserinfo}}
      </div>
    </div>
  </div>

</template>
<script>
  import { createNamespacedHelpers } from 'vuex'
  const { mapState, mapActions,mapGetters} = createNamespacedHelpers('member')
  export default {
    data(){
      return {
        errorText:'',
        account:null,
        password:null,
      }
    },
//    watch:{
//      getUserinfo:function(val){
//        alert('有变化了')
//       console.info(val)
//      }
//    },
    computed:{
      ...mapState([
        'loginAcctoken'
      ]),
      ...mapGetters([
        'getUserinfo'
      ])
    },
    methods:{
      handleInputOverflows(isOverflow){
        this.errorText=isOverflow ? '超过啦aaa！！！！' : ''
      },
      doLogin(){
        this.$store.dispatch('member/doLogin',{account:this.account,password:this.password});
      },
      getStore(){
        let a=this.$function.getStore('test');
        alert(a)
      }
    }
  }
</script>
<style lang="stylus" scoped>
.demo-flat-button{
  background red
  color white
}
</style>
