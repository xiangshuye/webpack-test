<template>
    <div>
        <Form inline>
            <FormItem label="角色名称" :label-width="70">
                <Input
                    v-model="roleName"
                    placeholder="请输入"
                    :maxlength="20"
                    style="width:200px;"
                />
            </FormItem>
            <FormItem>
                <Button type="primary" @click="searchInit">查&nbsp;询</Button>
                <Button @click="reset">重&nbsp;置</Button>
            </FormItem>
        </Form>
        <Row class="oper">
            <i-col>
                <Button type="primary" @click="addRole">新&nbsp;建</Button>
            </i-col>
        </Row>
        <Table :columns="columns" :data="tableData"></Table>
    </div>
</template>
<script>
import {Button} from 'iview';
export default {
    name: "Role",
    data() {
        return {
            roleName: "",
            tableData: Object.freeze([]),
            columns: Object.freeze([
                {
                    type: "index",
                    title: "序号",
                    width: 80,
                    align: "center"
                },
                {
                    title: "角色名称",
                    key: "roleName"
                },
                {
                    title: "角色描述",
                    key: "roleDesc"
                },
                {
                    title: "添加时间",
                    key: "createTime"
                },
                {
                    title: "操作",
                    width: 180,
                    // fixed: "right",
                    render: (h, params) => {
                        const row = params.row;
                        return (
                            <div>
                                <Button type="text" style={{color:'#2d8cf0'}} on-click={() => this.edit(row)}>编辑</Button>
                                <Button type="text" style={{color:'#2d8cf0'}} on-click={() => this.changeState(row)}>{row.status === 1 ? "禁用" : "启用"}</Button>
                                <Button type="text" style={{color:'#2d8cf0'}} on-click={() => this.trash(row)}>删除</Button>
                            </div>
                        )
                    }
                }
            ])
        };
    },
    methods: {
        searchInit() {},
        search() {
            this.tableData = Object.freeze([
                {
                    roleName: "管理员",
                    roleDesc: "管理人员",
                    createTime: "2020/01/01 08:00:00"
                }
            ]);
        },
        reset() {},
        addRole() {},
        edit(row) {
            console.log(row);
        },
        changeState() {},
        trash() {}
    },
    mounted() {
        this.search();
    }
};
</script>
<style lang="less"></style>
