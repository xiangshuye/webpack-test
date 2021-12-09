<template>
  <div class="table-page">
    <Table :columns="columns" :data="tableData"></Table>
    <page
      class="ipage"
      :current="pageConfig.page"
      :page-size="pageConfig.size"
      :total="total"
      :page-size-opts="pageConfig.opts"
      @on-change="pageChange"
      @on-page-size-change="sizeChange"
      show-elevator
      show-sizer
    >
    </page>
  </div>
</template>

<script>
export default {
  name: "TablePage",
  props: {
    columns: {
      type: Array,
      default() {
        return [];
      }
    },
    tableData: {
      type: Array,
      default() {
        return [];
      }
    },
    total: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      pageConfig: {
        page: 1,
        size: 10,
        opts: [10, 20, 50]
      }
    };
  },
  methods: {
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
  }
};
</script>

<style>
.ipage {
  margin: 16px 0;
}
</style>
