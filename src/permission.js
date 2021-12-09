import router from "./router/index";
import store from "@/store/index";

// 根据业务逻辑 待完善
router.beforeEach((to, from, next) => {
  if (to.path === "/login") {
    sessionStorage.clear();
    next();
  } else if (sessionStorage.getItem("username")) {
    if (store.state.permission.refresh) {
      next();
    } else {
      store.dispatch("getRouter").then(() => {
        router.addRoutes(store.state.permission.addRouter);
        next({ ...to }); // hack方法 确保addRoutes已完成
      });
    }
  } else {
    next("/login");
  }
});

router.afterEach((to, from) => {
  document.title = to.meta.title;
});
