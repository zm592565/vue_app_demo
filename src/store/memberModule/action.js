import functions from "../../functions/function";
const action={
  actionTest({ state, commit, rootState }){
   console.info(rootState)
  },
  doLogin({ state, commit, rootState },data){
    functions.requestHttpMethods('index',data)
      .then(function (res) {
        commit('updataUserinfo',res);
      })
  }

}
export default action;
