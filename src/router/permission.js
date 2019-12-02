import router from './index';
import store from '@/store/index';
// 根据业务逻辑 待完善

router.beforeEach((to, from, next) => {
    let user = sessionStorage.getItem('userName');
    if (!user && to.path !== '/login') {
        sessionStorage.clear();
        next('/login');
    } else {
        if (to.path === '/login' || to.path === '/') {
            sessionStorage.clear();
            next();
        } else if (to.path === '/index') {
            next();
        } else {
            store.dispatch('setRouter').then(() => {
                router.addRoutes(store.state.permission.addRouter);
                next(to) // hack方法 确保addRoutes已完成
            })
            let permission = JSON.parse(sessionStorage.getItem('permission'));
            permission = permission || [];
            if (permission.includes(to.name)) {
                next();
            } else {
                next('/index');
            }
        }
    }
})

