import router from './index';

// 根据业务逻辑 待完善

router.beforeEach((to, from, next) => {
    let user = sessionStorage.getItem('sportHealthUserName');
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
            let permission = JSON.parse(sessionStorage.getItem('permission'));
            permission = permission || [];
            if (permission.indexOf(to.name) !== -1) {
                next();
            } else {
                next('/index');
            }
        }
    }
})

