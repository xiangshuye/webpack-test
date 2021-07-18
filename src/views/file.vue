<template>
    <div class="file-wrap">
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
    </div>
</template>

<script>
import { getFileList } from "@/api/file";

export default {
    name: "file",
    data() {
        return {
            req:{

            },
            tableData: [],
            columns: Object.freeze([
                {
                    type: "index",
                    title: "序号",
                    width: 60
                },
                {
                    title: "文件名",
                    key: "name" 
                },{
                    title: "地址",
                    key: "url"
                },{
                    title: "描述",
                    key: "description"
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
                page,
                size
            };
            getFileList(req).then(data => {
                if (data.code === 200) {
                    this.tableData = Object.freeze(data.data);
                    console.log(this.tableData)
                    this.pageConfig.total = data.total;
                    window.scrollTo(0, 0);
                }
            });
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

<style></style>
