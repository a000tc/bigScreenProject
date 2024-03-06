<template>
  <div :id="id" :tips="tips" class="circleChart"></div>
</template>
<script setup>
import { defineProps, reactive, nextTick, ref, watch, computed, onBeforeMount, onMounted } from 'vue'
import * as echarts from 'echarts';
onBeforeMount(() => {
})
onMounted(() => {
})
const props = defineProps({
  id: {
    default: "circleChartRate",
    type: String,
    require: true,
  },
  tips: {
    type: Number,
    required: true,
    default: 50
  },
  colorObj: {
    type: Object,
    default: function () {
      return {
        textStyle: "#3fc0fb",
        series: {
          color: ["#00bcd44a", "transparent"],
          dataColor: {
            normal: "#03a9f4",
            shadowColor: "#97e2f5"
          }
        }
      };
    }
  }
})
let options = reactive({
  title: {
    text: props.tips * 1 + "%",
    x: "center",
    y: "center",
    textStyle: {
      color: props.colorObj.textStyle,
      fontSize: 16
    }
  },
  series: [
    {
      type: "pie",
      radius: ["75%", "80%"],
      center: ["50%", "50%"],
      emphasis:{scale:false},
      color: props.colorObj.series.color,
      label: {
        show: false
      },
      data: [
        {
          value: props.tips,
          itemStyle: {
              color: props.colorObj.series.dataColor.normal,
              shadowBlur: 10,
              shadowColor: props.colorObj.series.dataColor.shadowColor
          }
        },
        {
          value: 100 - props.tips
        }
      ]
    }
  ]
})
watch(props.colorObj, (newValue, oldValue) => {
  nextTick(() => {
    let chartContainer = document.getElementById(props.id)
    if (newValue && chartContainer) {
      let myChart = echarts.init(chartContainer)
      myChart.setOption(options)
    }
  })
}, { immediate: true, deep: true })
</script>
<style scoped>
.circleChart {
  height: 100px;
  width: 100px
}
</style>