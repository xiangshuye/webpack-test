import { routes } from '@/router/routes';

function getAsyncRouter(tmpRouter, perms) {
    let result = tmpRouter.filter(route => {
        if (perms.includes(route.meta.role)) {
            if (route.children) {
                route.children = getAsyncRouter(route.children, perms);
            }
            return true;
        }
        return false
    })
}


let permission = {
    state: {
        routers: routes,
        addRouter: [],
        refresh: false
    },
    mutations: {
        setRouter(state, router) {
            state.routers = routes.concat(router);
            state.addRouter = router;
            state.refresh = true;
        },
        clearRouter(state) {
            state.routers = routes;
            state.addRouter = [];
            state.refresh = false;
        }
    },
    actions: {
        getRouter({commit}) {
            return new Promise((resolve, reject) => {
                getMenuByLoginUser().then(data => {
                    let routers = [];
                    if (data.code === 200) {
                        routers = getAsyncRouter(routes,data.data);
                    }
                    commit('setRouter', routers);
                    resolve();
                })
            })
        }

    }
}
