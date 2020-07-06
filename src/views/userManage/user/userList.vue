<template>
    <div>
        <Form :label-width="0">
            <Row :gutter="16">
                <i-col span="6">
                    <FormItem label>
                        <i-input
                            v-model.trim="req.nameOrTel"
                            :maxlength="15"
                            placeholder="请输入用户姓名或者登录手机号搜索"
                        ></i-input>
                    </FormItem>
                </i-col>
                <i-col span="6">
                    <FormItem label>
                        <Button type="primary" @click="initSearch">查 询</Button>
                        <i-button type="default" @click="reset">重 置</i-button>
                    </FormItem>
                </i-col>
            </Row>
        </Form>
        <i-table :columns="columns" :data="tableData"></i-table>
        <Page
            :current="pageConfig.page"
            :page-size="pageConfig.size"
            :total="pageConfig.total"
            :page-size-opts="pageConfig.opts"
            @on-change="pageChange"
            @on-page-size-change="sizeChange"
            show-elevator
            show-sizer
        />
        <Component :is="currentCom"></Component>
    </div>
</template>

<script>
import { getUserList, switchUserStatus } from "@/api/user";
import { timetrans } from "@/utils/dateUtils";
import Add from "./Add";
import {
    Button, Poptip
} from 'iview';
export default {
    name: "UserList",
    data() {
        return {
            currentCom: null,
            req: {
                nameOrTel: ""
            },
            tableData: Object.freeze([]),
            columns: Object.freeze([
                {
                    type: "index",
                    title: "序号",
                    width: 60
                },
                {
                    title: "姓名",
                    key: "name"
                },
                {
                    title: "性别",
                    key: "gender",
                    render: (h, params) => {
                        const gender = params.row.gender === 1 ? "男" : "女";
                        return <span>{gender}</span>;
                    }
                },
                {
                    title: "账号",
                    key: "account",
                    render: (h, params) => {
                        return (<Button type="text" on-click={() =>this.edit(params.row)}>编辑</Button>)
                    }
                },
                {
                    title: "角色",
                    key: "role"
                },
                {
                    title: "部门",
                    key: "dept"
                },
                {
                    title: "添加时间",
                    key: "createtime",
                    render: (h, params) => {
                        return <span>{timetrans(params.row.createtime)}</span>
                    }
                },
                {
                    title: "状态",
                    key: "status",
                    render: (h, params) => {
                        return <span>{ params.row.status === 1 ? "启用" : "禁用"}</span>
                    }
                },
                {
                    title: "操作",
                    key: "action",
                    width: 260,
                    render: (h, params) => {
                        return (
                            <div class="action">
                                <Button type="text" on-click={this.edit.bind(this, params.row)}>编辑</Button>
                                <Button type="text" on-click={() =>this.resetPwd(params.row)}>重置密码</Button>
                                <Button type="text" on-click={() =>this.changeStatus(params.row)}>{params.row.status === 1 ? "禁用" : "启用"}</Button>
                                <Poptip transfer confirm on-on-cancel={() =>{}} on-on-ok={() =>this.trash(params.row)} title="您确认删除此用户吗？" placement="left">
                                    <Button type="text">删除</Button>
                                </Poptip>
                            </div>
                        )
                    }
                }
            ]),
            pageConfig: {
                page: 1,
                size: 10,
                total: 0,
                opts: [10, 20, 50]
            }
        };
    },
    methods: {
        initSearch(){
            this.pageConfig.page = 1;
            this.search();
        },
        search() {
            const { nameOrTel } = this.req;
            const { page, size } = this.pageConfig;
            let req = {
                name: nameOrTel,
                page,
                size
            };
            getUserList(req).then(data => {
                if (data.code === 200) {
                    this.tableData = Object.freeze(data.data);
                    console.log(this.tableData)
                    this.pageConfig.total = data.total;
                    window.scrollTo(0, 0);
                }
            });
        },
        reset() {
            this.req.nameOrTel = "";
        },
        edit(row) {
            console.log(this);
            setTimeout(() => {
                this.$router.push("/monitorCenter/monitorMsg");
                console.log(this.$router);
                console.log(this.$route);
            }, 1000);
            this.$Message.info("编辑");
        },
        resetPwd(row) {
            this.currentCom = Add;
            setTimeout(() => {
                this.currentCom = null;
            }, 5000);
            console.log(row);
            this.$Message.info("重置密码");
        },
        changeStatus(row) {
            let status = row.status === 1 ? 2 : 1;
            switchUserStatus({ id: row._id, status: status }).then(data => {
                if (data.code === 200) {
                    this.$Message.success("用户状态修改成功");
                    this.search();
                } else {
                    this.$Message.error("用户状态修改失败");
                    // this.search();
                }
            });
        },
        trash(row) {
            this.$Message.info("删除");
        },
        pageChange(page) {
            this.pageConfig.page = page;
            this.search();
        },
        sizeChange(size) {
            this.pageConfig.size = size;
            if (this.pageConfig.page === 1) {
                this.pageChange(1);
            }
        }
    },
    created() {
        this.search();
    }
};
</script>

<style lang="less"></style>
