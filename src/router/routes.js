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
    },
    {
        "title": "账户管理",
        "path": "/account",
        meta: {
            title: '账户管理'
        },
        component: (resolve) => require(['@/components/Layout.vue'], resolve),
        "children": [
            {
                "title": "账户信息",
                "path": "accountInfo",
                meta: {
                    title: '账户信息'
                }
            }
        ]
    },
    {
        "title": "公告管理",
        "path": "/notice",
        meta: {
            title: '公告管理'
        },
        component: (resolve) => require(['@/components/Layout.vue'], resolve),
        "children": [
            {
                "title": "公告信息",
                "path": "noticeInfo",
                meta: {
                    title: '公告信息'
                }
            }
        ]
    },
    {
        "title": "短信管理",
        "path": "/message",
        meta: {
            title: '短信管理'
        },
        component: (resolve) => require(['@/components/Layout.vue'], resolve),
        "children": [
            {
                "title": "短信统计",
                "path": "messageStatistics",
                meta: {
                    title: '短信统计'
                }
            },
            {

                "title": "模板审核",
                "path": "templateCheck",
                meta: {
                    title: '模板审核'
                }
            },
            {
                "title": "签名审核",
                "path": "signatureCheck",
                meta: {
                    title: '签名审核'
                }
            }
        ]
    },
    {
        "title": "用户管理",
        "path": "/user",
        meta: {
            title: '用户管理'
        },
        component: (resolve) => require(['@/components/Layout.vue'], resolve),
        "children": [
            {
                "title": "部门信息",
                "path": "department",
                meta: {
                    title: '部门信息'
                },
            },
            {
                "title": "用户信息",
                "path": "userInfo",
                meta: {
                    title: '用户信息'
                },
                component: (resolve) => require(['@/views/userManage/user/userList.vue'], resolve),
            },
            {
                "title": "角色信息",
                "path": "roleInfo",
                meta: {
                    title: '角色信息'
                }
            }
        ]
    }
]
