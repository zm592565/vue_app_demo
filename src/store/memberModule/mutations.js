const mutations={
  addCount(state){
    state.count++
  },
  updataUserinfo(state,data){
    state.loginAcctoken.isLogin=data.state;
    state.loginAcctoken.userInfo= data;
  }
}
export default mutations
