import { asyncRouter, router as routers, noRouter } from "@/router/routes";
import { getMenu } from "@/api/menu";

function getAsyncRouter(tmpRouter, perms) {
  return tmpRouter.filter(route => {
    let children = [];
    if (route.children && route.children.length) {
      children = getAsyncRouter(route.children, perms);
    }
    if (perms.includes(route.meta.role) || children.length) {
      route.children = children;
      return true;
    }
    return false;
  });
}
function getAsyncMenu(tmpMenu, perms) {
  return tmpMenu.filter(menu => {
    let children = [];
    if (menu.children && menu.children.length) {
      children = getAsyncMenu(menu.children, perms);
    }
    if (perms.includes(menu.id) || children.length) {
      menu.children = children;
      return true;
    }
    return false;
  });
}

let permission = {
  state: {
    menu: [],
    routers: routers,
    addRouter: [],
    permissions: [
      "account",
      "accountInfo",
      "notice",
      "noticeInfo",
      "message",
      "messageStatistics",
      "templateCheck",
      "signatureCheck",
      "user",
      "department",
      "userInfo",
      "roleInfo",
      "monitorCenter",
      "monitorMsg",
      "conLog",
      "operationlog",
      "one",
      "two",
      "three1",
      "three2",
      "three3",
      "three4",
      "three5",
      "two2",
      "three6",
      "three7",
      "three8",
      "three9",
      "two3",
      "three10",
      "three11",
      "two4",
      "three12",
      "two5"
    ],
    perm: [],
    refresh: false
  },
  mutations: {
    setMenu(state, payload) {
      const filterMenu = getAsyncMenu(payload.menu, payload.perm);
      state.menu = payload.menu;
    },
    setRouter(state, router) {
      // state.routers = router.concat(routers);
      state.routers = [...routers];

      state.addRouter = [...asyncRouter, ...noRouter];
      state.refresh = true;
    },
    clearRouter(state) {
      state.routers = [...routers];
      state.addRouter = [];
      state.refresh = false;
    }
  },
  actions: {
    getMenu({ commit }) {
      return new Promise((resolve, reject) => {
        getMenu().then(data => {
          if (data.code === 200) {
            commit("setMenu", {
              menu: data.data,
              perm: permission.state.perm
            });
            resolve();
          }
        });
      });
    },
    getRouter({ commit }) {
      return new Promise((resolve, reject) => {
        commit("setRouter", []);
        resolve();

        // getMenuByLoginUser().then(data => {
        //     let routers = [];
        //     if (data.code === 200) {
        //         routers = getAsyncRouter(routers, data.data);
        //     }
        //     commit('setRouter', routers);
        //     resolve();
        // })
      });
    }
  }
};

export default permission;
