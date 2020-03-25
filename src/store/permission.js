import { asyncRouter, router as routers, noRouter } from '@/router/routes';

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
        routers: routers,
        addRouter: [],
        refresh: false
    },
    mutations: {
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
        getRouter({ commit }) {
            return new Promise((resolve, reject) => {
                commit('setRouter', []);
                resolve();

                // getMenuByLoginUser().then(data => {
                //     let routers = [];
                //     if (data.code === 200) {
                //         routers = getAsyncRouter(routers, data.data);
                //     }
                //     commit('setRouter', routers);
                //     resolve();
                // })
            })
        }

    }
}

export default permission
