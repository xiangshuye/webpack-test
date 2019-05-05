import Vue from 'vue';
import VueRouter from 'vue-router'

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [{
        path: '/',
        meta: {
            title: '登录'
        },
        component: (resolve) => require(['@/views/userManage/user/userList.vue'], resolve)
    }]
})
