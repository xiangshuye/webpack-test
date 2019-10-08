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
        "icon": "",
        component: (resolve) => require(['@/components/Layout.vue'], resolve),
        "children": [
            {
                "title": "账户信息",
                "path": "accountInfo",
                "icon": ""
            }
        ]
    },
    {
        "title": "公告管理",
        "path": "/notice",
        "icon": "",
        component: (resolve) => require(['@/components/Layout.vue'], resolve),
        "children": [
            {
                "title": "公告信息",
                "path": "noticeInfo",
                "icon": ""
            }
        ]
    },
    {
        "title": "短信管理",
        "path": "/message",
        "icon": "",
        component: (resolve) => require(['@/components/Layout.vue'], resolve),
        "children": [
            {
                "title": "短信统计",
                "path": "messageStatistics",
                "icon": ""
            },
            {

                "title": "模板审核",
                "path": "templateCheck",
                "icon": ""
            },
            {
                "title": "签名审核",
                "path": "signatureCheck",
                "icon": ""
            }
        ]
    },
    {
        "title": "用户管理",
        "path": "/user",
        "icon": "",
        component: (resolve) => require(['@/components/Layout.vue'], resolve),
        "children": [
            {
                "title": "部门信息",
                "path": "department",
                "icon": ""
            },
            {
                "title": "用户信息",
                "path": "userInfo",
                "icon": "",
                component: (resolve) => require(['@/views/userManage/user/userList.vue'], resolve),
            },
            {
                "title": "角色信息",
                "path": "roleInfo",
                "icon": ""
            }
        ]
    },
    {

        "title": "监控中心",
        "path": "/monitorCenter",
        "icon": "",
        component: (resolve) => require(['@/components/Layout.vue'], resolve),
        "children": [
            {
                "title": "监控信息",
                "path": "monitorMsg",
                "icon": ""
            },

            {
                "title": "登录日志",
                "path": "conLog",
                "icon": ""
            },
            {
                "title": "操作日志",
                "path": "operationlog",
                "icon": ""
            }
        ]
    },
    {
        path: '*',
        meta: {
            title: '404'
        },
        component: (resolve) => require(['@/components/Layout.vue'], resolve),
        children: [
            {
                path: '/',
                meta: {
                    title: '404'
                },
                component: (resolve) => require(['@/components/404.vue'], resolve),
            }
        ]
    }
]