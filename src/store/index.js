import Vue from "vue";
import Vuex from "vuex";

import user from "./user";
import permission from "./permission";

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    count: 1,
    page: 10,
    userinfo: {}
  },
  mutations: {
    // 同步提交
    increment(state) {
      state.count++;
    },
    addPage(state) {
      state.page++;
    },
    setUserInfo(state, payload) {
      console.log(payload.userinfo);
      state.userinfo = Object.freeze(payload.userinfo);
    }
  },
  modules: {
    user,
    permission
  }
});
