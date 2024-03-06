<template>
  <div id="bottomRightChart" class="bottomRightChart" ref="bottomRightChart">
  </div>
</template>

<script setup>
import { defineProps, nextTick, reactive, ref, watch, computed, onBeforeMount, onMounted } from 'vue'
import * as echarts from 'echarts';

// import bottomRightChart from '@/components/bottomRightChar.vue' 
onBeforeMount(() => {
  //   console.log('2.组件挂载页面之前执行----onBeforeMount')
})
onMounted(() => {

  //   console.log('3.-组件挂载到页面之后执行-------onMounted')
})
const props = defineProps({
  chartData: {
    type: Object
  }
})
let colorList = reactive({

  linearYtoG: {
    type: 'linear',
    x: 0,
    y: 0,
    x2: 1,
    y2: 1,
    colorStops: [
      {
        offset: 0,
        color: '#f5b44d'
      },
      {
        offset: 1,
        color: '#28f8de'
      }
    ]
  },
  linearGtoB: {
    type: 'linear',
    x: 0,
    y: 0,
    x2: 1,
    y2: 0,
    colorStops: [
      {
        offset: 0,
        color: '#43dfa2'
      },
      {
        offset: 1,
        color: '#28f8de'
      }
    ]
  },
  linearBtoG: {
    type: 'linear',
    x: 0,
    y: 0,
    x2: 1,
    y2: 0,
    colorStops: [
      {
        offset: 0,
        color: '#1c98e8'
      },
      {
        offset: 1,
        color: '#28f8de'
      }
    ]
  },
  areaBtoG: {
    type: 'linear',
    x: 0,
    y: 0,
    x2: 0,
    y2: 1,
    colorStops: [
      {
        offset: 0,
        color: 'rgba(35,184,210,.2)'
      },
      {
        offset: 1,
        color: 'rgba(35,184,210,0)'
      }
    ]
  }
}
)
let options = reactive({
  title: {
    text: '',
    textStyle: {
      color: '#D3D6DD',
      fontSize: 24,
      fontWeight: 'normal'
    },
    subtext:props.chartData.year + '/' + props.chartData.weekCategory[6],
    subtextStyle: {
      color: '#fff',
      fontSize: 16
    },
    top: 50,
    left: 80
  },
  legend: {
    top: 120,
    left: 80,
    orient: 'vertical',
    itemGap: 15,
    itemWidth: 12,
    itemHeight: 12,
    data: ['平均指标', '我的指标'],
    textStyle: {
      color: '#fff',
      fontSize: 14
    }
  },
  tooltip: {
    trigger: 'item'
  },
  radar: {
    center: ['68%', '27%'],
    radius: '40%',
    name: {
      color: '#fff'
    },
    splitNumber: 8,
    axisLine: {
      lineStyle: {
        color: colorList.linearYtoG,
        opacity: 0.6
      }
    },
    splitLine: {
      lineStyle: {
        color: colorList.linearYtoG,
        opacity: 0.6
      }
    },
    splitArea: {
      areaStyle: {
        color: '#fff',
        opacity: 0.1,
        shadowBlur: 25,
        shadowColor: '#000',
        shadowOffsetX: 0,
        shadowOffsetY: 5
      }
    },
    indicator: [
      {
        name: '服务态度',
        max: props.chartData.maxData
      },
      {
        name: '产品质量',
        max: 10
      },
      {
        name: '任务效率',
        max: 12
      },
      {
        name: '售后保障',
        max: 3.5
      }
    ]
  },
  grid: {
    left: 90,
    right: 80,
    bottom: 40,
    top: '60%'
  },
  xAxis: {
    type: 'category',
    position: 'bottom',
    axisLine: true,
    axisLabel: {
      color: 'rgba(255,255,255,.8)',
      fontSize: 12
    },
    data: props.chartData.weekCategory
  },
  // 下方Y轴
  yAxis: {
    name: '工单',
    nameLocation: 'end',
    nameGap: 24,
    nameTextStyle: {
      color: 'rgba(255,255,255,.5)',
      fontSize: 14
    },
    max: props.chartData.maxData,
    splitNumber: 4,

    axisLine: {
      lineStyle: {
        opacity: 0
      }
    },
    splitLine: {
      show: true,
      lineStyle: {
        color: '#fff',
        opacity: 0.1
      }
    },
    axisLabel: {
      color: 'rgba(255,255,255,.8)',
      fontSize: 12
    }
  },
  series: [
    {
      name: '',
      type: 'radar',
      symbolSize: 0,
      data: [
        {
          value: props.chartData.radarDataAvg[6],
          name: '平均指标',
          itemStyle: {
            normal: {
              color: '#f8d351'
            }
          },
          lineStyle: {
            normal: {
              opacity: 0
            }
          },
          areaStyle: {
            normal: {
              color: '#f8d351',
              shadowBlur: 25,
              shadowColor: 'rgba(248,211,81,.3)',
              shadowOffsetX: 0,
              shadowOffsetY: -10,
              opacity: 1
            }
          }
        },
        {
          value: props.chartData.radarData[6],
          name: '我的指标',
          itemStyle: {
            normal: {
              color: '#43dfa2'
            }
          },
          lineStyle: {
            normal: {
              opacity: 0
            }
          },
          areaStyle: {
            normal: {
              color: colorList.linearGtoB,
              shadowBlur: 15,
              shadowColor: 'rgba(0,0,0,.2)',
              shadowOffsetX: 0,
              shadowOffsetY: 5,
              opacity: 0.8
            }
          }
        }
      ]
    },
    {
      name: '',
      type: 'line',
      smooth: true,
      symbol: 'emptyCircle',
      symbolSize: 8,
      itemStyle: {
        normal: {
          color: '#fff'
        }
      },
      lineStyle: {
        color: colorList.linearBtoG,
        width: 3
      },
      areaStyle: {
        color: colorList.areaBtoG
      },
      data: props.chartData.weekLineData,
      lineSmooth: true,
      markLine: {
        silent: true,
        data: [
          {
            type: 'average',
            name: '平均值'
          }
        ],
        precision: 0,
        label: {
          normal: {
            formatter: '平均值: \n {c}'
          }
        },
        lineStyle: {
          normal: {
            color: 'rgba(248,211,81,.7)'
          }
        }
      },
      tooltip: {
        position: 'top',
        formatter: '{c} m',
        backgroundColor: 'rgba(28,152,232,.2)',
        padding: 6
      }
    },
    {
      name: '占位背景',
      type: 'bar',
      itemStyle: {
        normal: {
          show: true,
          color: '#000',
          opacity: 0
        }
      },
      silent: true,
      barWidth: '50%',
      data: props.chartData.weekMaxData,
      animation: false
    }
  ]
})
watch(props.chartData, (newValue, oldValue) => {
  nextTick(() => {
    // Object.assign(options.title, { subtext: newValue.year + '/' + newValue.weekCategory[6] })
    // Object.assign(options.xAxis, { data: newValue.weekCategory })
    // Object.assign(options.yAxis, { max: newValue.maxData })
    // Object.assign(options.series[0]["data"][0], { value: newValue.radarDataAvg[6] })
    // Object.assign(options.series[0]['data'][1], { value: newValue.radarData[6] })
    // Object.assign(options.series[1], { value: newValue.weekLineData[6] })
    // Object.assign(options.series[2], { value: newValue.weekMaxData })
    let chartContainer = document.getElementById("bottomRightChart")
    if (newValue && chartContainer) {
      let myChart = echarts.init(chartContainer)
      myChart.setOption(options)
    }
  })
}, { immediate: true, deep: true })
</script>

<style scoped>
.bottomRightChart{
  width: 100%;
  height: 480px;
}</style>