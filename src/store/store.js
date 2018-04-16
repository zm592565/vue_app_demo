import Vue from 'vue';
import Vuex from 'vuex';

/*根状态管理*/
import state from './state';
import getter from './getter';
import mustation from './mutations';
import action from './actions';

/*模块引入*/
import Member from './memberModule/index';

/*vuex自带日志插件*/
import createLogger from 'vuex/dist/logger'


Vue.use(Vuex);
const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  state,
  getters:getter,
  mutations:mustation,
  actions:action,
  modules:{
    member:{
      namespaced: true,
      state:Member.State,
      getters:Member.Getters,
      actions:Member.Actions,
      mutations:Member.Mutations
    }
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
