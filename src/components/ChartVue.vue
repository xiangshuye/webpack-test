<template>
  <div :id="id" :style="{'width':width+'px','height':height+'px'}"></div>
</template>
<script>
import * as echarts from "echarts";
import func from "./vue-temp/vue-editor-bridge";
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
        this.chart = echarts.init(document.getElementById(this.id));
      }
      this.chart.setOption(this.option);
    }
  },
  mounted() {
    this.init();
    window.onresize = function() {
      this.chart.resize();
    }.bind(this);
  }
};
</script>
