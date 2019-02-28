import router from './index';

router.beforeEach((to, from, next) => {
    console.log(to);
    let user = sessionStorage.getItem("username");
    if (user == null && to.path != '/login') {
      next('/login');
    } else {
      if (to.path == '/login') {
        next();
      } else if(to.path === '/'){
        next('/index');
      }else{
        next();
      }
    }
})

