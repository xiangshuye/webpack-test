export const routes = [{
    path: '/',
    meta: {
        title: '登录'
    },
    component: (resolve) => require(['@/views/userManage/user/userList.vue'], resolve)
}]