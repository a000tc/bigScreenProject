<template>
  <div id="bottomLeftChart" ref="bottomLeftChart" class="bottomLeftChart"></div>
</template>

<script setup>import * as echarts from 'echarts';
import { getBarChart } from '@/http/api/index.js';
import { reactive, ref, watch, computed, onBeforeMount, onMounted, defineProps, nextTick } from 'vue';
onBeforeMount(() => {
  //   console.log('2.组件挂载页面之前执行----onBeforeMount')
})
onMounted(() => {
  getBarChartData()
})
const props = defineProps({

})
let options = reactive({
  tooltip: {
    trigger: "axis",
    backgroundColor: "rgba(255,255,255,0.1)",
    axisPointer: {
      type: "shadow",
      label: {
        show: true,
        backgroundColor: "#7B7DDC"
      }
    }
  },
  legend: {
    data: ["已贯通", "计划贯通", "贯通率"],
    textStyle: {
      color: "#B4B4B4"
    },
    top: "0%"
  },
  grid: {
    x: "8%",
    width: "85%",
    y: "6%"
  },
  xAxis: {
    axisLine: {
      lineStyle: {
        color: "#B4B4B4"
      }
    },
    axisTick: {
      show: false
    }
  },
  yAxis: [
    {
      splitLine: { show: false },
      axisLine: {
        lineStyle: {
          color: "#B4B4B4"
        }
      },

      axisLabel: {
        formatter: "{value} "
      }
    },
    {
      splitLine: { show: false },
      axisLine: {
        lineStyle: {
          color: "#B4B4B4"
        }
      },
      axisLabel: {
        formatter: "{value} "
      }
    }
  ],
  series: [
    {
      name: "贯通率",
      type: "line",
      smooth: true,
      showAllSymbol: true,
      symbol: "emptyCircle",
      symbolSize: 8,
      yAxisIndex: 1,
      itemStyle: {
        color: "#F02FC2"
      },
    },
    {
      name: "已贯通",
      type: "bar",
      barWidth: 10,
      itemStyle: {
        barBorderRadius: 5,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: "#956FD4" },
          { offset: 1, color: "#3EACE5" }
        ])
      },
    },
    {
      name: "计划贯通",
      type: "bar",
      barGap: "-100%",
      barWidth: 10,
      itemStyle: {
        barBorderRadius: 5,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: "rgba(156,107,211,0.8)" },
          { offset: 0.2, color: "rgba(156,107,211,0.5)" },
          { offset: 1, color: "rgba(156,107,211,0.2)" }
        ])

      },
      z: -12,
    }
  ]
})
let barData = reactive({})
const getBarChartData = () => {
  getBarChart().then(res => {
    for (let i = 0; i < res.barData.length - 1; i++) {
      let rate = res.barData[i] / res.lineData[i]
      res.rateData.push(rate.toFixed(2));
      Object.assign(barData, res)
      Object.assign(options.xAxis, { data: barData.category })
      Object.assign(options.series[0], { data: barData.rateData })
      Object.assign(options.series[1], { data: barData.barData })
      Object.assign(options.series[0], { data: barData.lineData })
      nextTick(() => {
        let chartDom = document.getElementById('bottomLeftChart');
        let myChart = echarts.init(chartDom);
        myChart.setOption(options)
      })
    }
  }).catch(err => {
    console.log(err)
  })
}
</script>

<style scoped>
.bottomLeftChart {
  width: 100%;
  height: 480px;
}
</style>