import functions from "../functions/function";
const action={
    IndexTest:function (context) {
      alert(context.state.getterTest)
    },
    add:function (context) {
      context.commit('Test')
    }
}
export default action;
