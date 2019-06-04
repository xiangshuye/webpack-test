<template>
  <div :id="id" ref="myChart" :style="{'width':width+'px','height':height+'px'}"></div>
</template>
<script>
// import * as echarts from "echarts";
    // 引入 ECharts 主模块
    import echarts from 'echarts/lib/echarts';
    // 引入柱状图
    require('echarts/lib/chart/bar');
    // 引入提示框和标题组件
    require('echarts/lib/component/legend');
    require('echarts/lib/component/tooltip');
    require('echarts/lib/component/title');
export default {
  name: "ChartVue",
  props: {
    option: {
      type: Object,
      default: function() {
        return {
          title: {
            text: "ECharts 入门示例"
          },
          tooltip: {},
          legend: {
            data: ["销量"]
          },
          xAxis: {
            data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
          },
          yAxis: {},
          series: [
            {
              name: "销量",
              type: "bar",
              data: [5, 20, 36, 10, 10, 20]
            }
          ]
        };
      }
    },
    width: {
      type: Number,
      default: 200
    },
    height: {
      type: Number,
      default: 200
    }
  },
  data: function() {
    return {
      id: "echart" + ~~(Math.random() * 1000000),
      chart: null
    };
  },
  methods: {
    init() {
      if (!this.chart) {
            this.chart = echarts.init(this.$refs.myChart);
      }
      this.chart.setOption(this.option);
    }
  },
  mounted() {
    this.init();
    window.onresize = () => {
      this.chart.resize();
    };
  },
  beforeDestroy(){
     if (!this.chart) {
        this.chart.dispose();
        this.chart = null;z`
      }
  }
};
</script>
