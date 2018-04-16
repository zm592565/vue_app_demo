<template>
<div class="bottom-menu">
  <mu-paper>
    <mu-bottom-nav :value="activeTab"  @change="handleTabChange">
      <mu-bottom-nav-item :value="menu.home.value" :activeClass="activeClass"  :to="menu.home.to">
        <div class="menu_bottom">
          <i :class="['icon_menu',checkedMenu=='home'?'menu_home_active':'menu_home']"></i>
          <span>{{menu.home.title}}</span>
        </div>
      </mu-bottom-nav-item>
      <mu-bottom-nav-item :value="menu.product.value" :to="menu.product.to" :activeClass="activeClass">
        <div class="menu_bottom">
          <i :class="['icon_menu',checkedMenu=='product'?'menu_product_active':'menu_product']"></i>
          <span>{{menu.product.title}}</span>
        </div>
      </mu-bottom-nav-item>
      <mu-bottom-nav-item :value="menu.serive.value" :to="menu.serive.to" :activeClass="activeClass">
        <div class="menu_bottom">
          <i :class="['icon_menu',checkedMenu=='serive'?'menu_serive_active':'menu_serive']"></i>
          <span>{{menu.serive.title}}</span>
        </div>
      </mu-bottom-nav-item>
      <mu-bottom-nav-item :value="menu.member.value" :to="menu.member.to"  :activeClass="activeClass">
        <div class="menu_bottom">
          <i :class="['icon_menu',checkedMenu=='member'?'menu_mine_active':'menu_mine']"></i>
          <span>{{menu.member.title}}</span>
        </div>
      </mu-bottom-nav-item>
    </mu-bottom-nav>
  </mu-paper>
</div>
</template>
<script>
  export default {
    data(){
      return {
        activeTab: 'home',
        checkedMenu:'',
        activeClass:'active',
        menu:{
          home:{value:'home',to:'/home/index',title:'首页'},
          product:{value:'product',to:'/home/product',title:'产品'},
          serive:{value:'serive',to:'/home/reg',title:'服务'},
          member:{value:'member',to:'/home/not',title:'我的'}
        }
      }
    },
    mounted(){
      /*防止刷新之后选中栏目失效*/
      this.checkedMenuActive()
    },
    methods:{
      handleTabChange (val){
        this.checkedMenu=val;
        this.activeTab = val;
      },
      checkedMenuActive(){
        let _self=this;
        let path=_self.$route.path;
        for (let item in _self.menu){
            if (path==_self.menu[item].to){
              _self.handleTabChange(_self.menu[item].value)
            }
        }
      }
    }
  }
</script>
<style lang="stylus" scoped>
  @import "~assetCss/var.styl";
  .menu_bottom
      position absolute
      top 0px
      left 0px
      right 0px
      bottom 0px
      display flex
      justify-content center
      align-items center
      font-size 14px
      align-content center
      flex-flow column nowrap
      span
        font-size 12px
      .icon_menu
        height 22px
        width 100%
        background-size auto 100%
        background-position center
        background-repeat no-repeat
      .menu_home
        bg-image('~staticPath/img/icon_index')
      .menu_home_active
        bg-image('~staticPath/img/icon_index_hover')
      .menu_product
        bg-image('~staticPath/img/icon_product')
      .menu_product_active
        bg-image('~staticPath/img/icon_product_hover')
      .menu_serive
        bg-image('~staticPath/img/icon_service_net')
      .menu_serive_active
        bg-image('~staticPath/img/icon_service_net_hover')
      .menu_mine
        bg-image('~staticPath/img/icon_mine')
      .menu_mine_active
        bg-image('~staticPath/img/icon_mine_hover')
  .active
    color #ec6806
</style>
