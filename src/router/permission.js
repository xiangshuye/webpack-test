import router from './index';
router.beforeEach((to, from, next) => {
    let user = sessionStorage.getItem("username");
    if(user && to.path !== '/login'){
        next(); // 待完善菜单进入权限
    }else{
        sessionStorage.clear();
        next('/login');
    }
})

