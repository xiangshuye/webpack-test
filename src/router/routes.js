export const routes = [
    {
        path: '/',
        meta: {
            title: '首页'
        },
        redirect: '/index'
    },
    {
        path: '/login',
        meta: {
            title: '登录'
        },
        redirect: '/index'
    },
    {
        path: '/index',
        meta: {
            title: '首页'
        },
        component: (resolve) => require(['@/components/Layout.vue'], resolve)
    }
]