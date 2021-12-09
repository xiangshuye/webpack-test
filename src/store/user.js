let user = {
  state: {
    count: 1,
    page: 10
  },
  mutations: {
    // 同步提交
    increments(state) {
      state.count++;
    },
    addPages(state) {
      state.page++;
    },
    LOGIN_STATE(state, params) {
      state.username = params.username;
    }
  },
  actions: {
    // 异步
    async_count(ctx) {
      // 接收与 store 相同的 context
      console.log(ctx);
      setTimeout(() => {
        commit("increments");
      }, 1000);
    },
    userLogin({ commit }, params) {},
    logout({ commit }) {
      return new Promise((resolve, reject) => {
        sessionStorage.clear();
        commit("LOGIsetUserInfoN_STATE", {});
        commit("clearRouter");
        resolve(true);
      });
    }
  }
};

export default user;
