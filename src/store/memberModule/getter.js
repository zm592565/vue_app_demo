const getters={
  checkLogin:state=>{
    return state.loginAcctoken.isLogin?true:false;
  },
  getUserinfo(state, getters, rootState, rootGetters){
    return state.loginAcctoken.userInfo;
  }
}
export default getters
