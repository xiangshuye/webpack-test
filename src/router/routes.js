export const routes = [
    {
        path: '/',
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
        component: (resolve) => require(['@/views/userManage/user/userList.vue'], resolve)
    }
]