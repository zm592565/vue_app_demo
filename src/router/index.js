import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store/store';
// import NotFind from '@/components/commonPage/404'
// import Home from '@/components/Home/default'
// import Index from '@/components/Index/index'
// import Login from '@/components/Member/login/login'
// import Reg from '@/components/Member/login/reg'
// import ProductIndex from '@/components/Product/Index/index'

Vue.use(Router)

const NotFind=(resolve) => {
  import('@/components/commonPage/404').then((module) => {
    resolve(module)
  })
}
const Home=(resolve) => {
  import('@/components/Home/default').then((module) => {
    resolve(module)
  })
}
const Index = () => import('@/components/Index/index')

// const Index=(resolve) => {
//   import('@/components/Index/index').then((module) => {
//     resolve(module)
//   })
// }
const Login=(resolve) => {
  import('@/components/Member/login/login').then((module) => {
    resolve(module)
  })
}

const Reg=(resolve) => {
  import('@/components/Member/login/reg').then((module) => {
    resolve(module)
  })
}

const ProductIndex=(resolve) => {
  import('@/components/Product/Index/index').then((module) => {
    resolve(module)
  })
}


const router=new Router({
  routes: [
    {
      path:'/',
      redirect: '/home/index'
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      children: [
        {path: 'index', component: Index,},
        {path: 'product', component: ProductIndex,meta: {requiresAuth: true}},
        {path: 'reg', component: Reg},
        {path: 'not', component: NotFind},
      ]
    },
    {
      path:'/login',
      name: 'login',
      component: Login,
    },
    {
      // 404匹配,注意这个要放到最后
      name:'redirect',
      path: '*',
      component: NotFind
    }
  ]
})

//注册全局钩子拦截导航
router.beforeEach((to, from, next) => {
  //获取store里的token,登录标识
  let token = store.getters['member/checkLogin'];
  //判断要去的路由有没有requiresAuth
  if(to.meta.requiresAuth){
    if(token){
      next();
    }else{
      next({
        path: '/login',
        query: {redirect: to.fullPath}  // 将刚刚要去的路由paath（却无权限）作为参数，方便登录成功后直接跳转到该路由
      })
    }
  }else{
    next()
  }
})

export default router;
