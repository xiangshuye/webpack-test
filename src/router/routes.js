export const asyncRouter = [
    {
        title: "账户管理",
        path: "/account",
        name: "account",
        meta: {
            title: "账户管理"
        },
        component: () => import('@/components/Layout.vue'), //resolve => require(["@/components/Layout.vue"], resolve),
        children: [
            {
                title: "账户信息",
                path: "/account/accountInfo",
                name: "accountInfo",
                meta: {
                    title: "账户信息"
                },
                component: resolve => require(["@/views/Tree.vue"], resolve)
            }
        ]
    },
    {
        title: "公告管理",
        path: "/notice",
        name: "notice",
        meta: {
            title: "公告管理"
        },
        component: resolve => require(["@/components/Layout.vue"], resolve),
        children: [
            {
                title: "公告信息",
                path: "/notice/noticeInfo",
                name: "noticeInfo",
                meta: {
                    title: "公告信息"
                },
                component: resolve => require(["@/views/Player.vue"], resolve)

            }
        ]
    },
    {
        title: "短信管理",
        path: "/message",
        name: "message",
        meta: {
            title: "短信管理"
        },
        component: resolve => require(["@/components/Layout.vue"], resolve),
        children: [
            {
                title: "短信统计",
                path: "/message/messageStatistics",
                name: "messageStatistics",
                meta: {
                    title: "短信统计"
                }
            },
            {
                title: "模板审核",
                path: "/message/templateCheck",
                name: "templateCheck",
                meta: {
                    title: "模板审核"
                }
            },
            {
                title: "签名审核",
                path: "/message/signatureCheck",
                name: "signatureCheck",
                meta: {
                    title: "签名审核"
                }
            }
        ]
    },
    {
        title: "用户管理",
        path: "/user",
        name: "user",
        meta: {
            title: "用户管理"
        },
        component: resolve => require(["@/components/Layout.vue"], resolve),
        children: [
            {
                title: "部门信息",
                path: "/user/department",
                name: "department",
                meta: {
                    title: "部门信息"
                }
            },
            {
                title: "用户信息",
                path: "/user/userInfo",
                name: "userInfo",
                meta: {
                    title: "用户信息"
                },
                component: resolve =>
                    require(["@/views/userManage/user/userList.vue"], resolve)
            },
            {
                title: "角色信息",
                path: "/user/roleInfo",
                name: "roleInfo",
                meta: {
                    title: "角色信息"
                },
                component: resolve =>
                    require(["@/views/userManage/role/Role.vue"], resolve)
            }
        ]
    },
    {
        title: "监控中心",
        path: "/monitorCenter",
        name: "monitorCenter",
        meta: {
            title: "监控中心"
        },
        component: resolve => require(["@/components/Layout.vue"], resolve),
        children: [
            {
                title: "监控信息",
                path: "/monitorCenter/monitorMsg",
                name: "monitorMsg",
                meta: {
                    title: "监控信息"
                },
                component: resolve => require(["@/views/list1.vue"], resolve)
            },
            {
                title: "登录日志",
                path: "/monitorCenter/conLog",
                name: "conLog",
                meta: {
                    title: "登录日志"
                },
                component: resolve => require(["@/views/list2.vue"], resolve)
            },
            {
                title: "操作日志",
                path: "/monitorCenter/operationlog",
                name: "operationlog",
                meta: {
                    title: "操作日志"
                }
            }
        ]
    },
    {
        title: "地图",
        path: "/maps",
        name: "maps",
        meta: {
            title: "地图"
        },
        component: resolve => require(["@/components/Layout.vue"], resolve),
        children: [
            {
                title: "高德地图",
                path: "/maps/AMap",
                name: "AMap",
                meta: {
                    title: "高德地图"
                },
                component: resolve =>
                    require(["@/components/AMap.vue"], resolve)
            },
            {
                title: "百度地图",
                path: "/maps/BMap",
                name: "BMap",
                meta: {
                    title: "百度地图"
                },
                component: resolve =>
                    require(["@/components/BMap.vue"], resolve)
            }
        ]
    }
];

export const router = [
    {
        path: "/login",
        name: "login",
        meta: {
            title: "登录"
        },
        component: resolve => require(["@/components/Login.vue"], resolve)
    },
    {
        path: "/",
        name: "/",
        meta: {
            title: "首页"
        },
        redirect: "/home"
    },
    {
        path: "/home",
        name: "home",
        meta: {
            title: "首页"
        },
        component: resolve => require(["@/components/Layout.vue"], resolve)
    }
];

export const noRouter = [
    {
        path: "*",
        name: null,
        meta: {
            title: "404"
        },
        component: resolve => require(["@/components/Layout.vue"], resolve),
        children: [
            {
                path: "/",
                name: "404",
                meta: {
                    title: "404"
                },
                component: resolve => require(["@/components/404.vue"], resolve)
            }
        ]
    }
];
