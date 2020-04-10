import router from './router/index';
import store from '@/store/index';
// import Vue from 'vue';
// 根据业务逻辑 待完善

router.beforeEach((to, from, next) => {
    // let user = store.state.user.username;
    if (!sessionStorage.getItem('username') && to.path !== '/login') {
        sessionStorage.clear();
        next('/login');
    } else {
        if (to.path === '/login') {
            sessionStorage.clear();
            next();
        } else if (store.state.permission.refresh) {
            next();
        } else {
            store.dispatch('getRouter').then(() => {
                router.addRoutes(store.state.permission.addRouter);
                next({ ...to }) // hack方法 确保addRoutes已完成
            })
            // let permission = JSON.parse(sessionStorage.getItem('permission'));
            // permission = permission || [];
            // if (permission.includes(to.name)) {
            //     next();
            // } else {
            //     next('/index');
            // }
        }
    }
})

