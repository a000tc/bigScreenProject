<template>
    <div id="radarChartDiv" ref="radarChartDiv" class="radarChartDiv"></div>
</template>
<script setup>
import * as echarts from 'echarts';
import { nextTick, reactive, ref, watch, defineProps, onBeforeMount, onMounted } from 'vue'
onBeforeMount(() => {
})
onMounted(() => {
    nextTick(() => {
        let chartContainer = document.getElementById("radarChartDiv")
        let myChart = echarts.init(chartContainer)
        options && myChart.setOption(options)
    })
})
const props = defineProps({
    radarData: {
        type: Object,
        default: {
        }
    }
})
// 固定样式数据
let lineStyle = reactive({
    width: 1,
    opacity: 0.5
})
let options = reactive({
    radar: {
        indicator: props.radarData.indicatorData,
        shape: "circle",
        splitNumber: 5,
        radius: ["0%", "55%"],
        axisName: {
            // textStyle: {
            color: "rgb(238, 197, 102)"
            // }
        },
        splitLine: {
            lineStyle: {
                color: [
                    "rgba(238, 197, 102, 0.1)",
                    "rgba(238, 197, 102, 0.2)",
                    "rgba(238, 197, 102, 0.4)",
                    "rgba(238, 197, 102, 0.6)",
                    "rgba(238, 197, 102, 0.8)",
                    "rgba(238, 197, 102, 1)"
                ].reverse()
            }
        },
        splitArea: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: "rgba(238, 197, 102, 0.5)"
            }
        }
    },
    series: [
        {
            name: "北京",
            type: "radar",
            lineStyle: lineStyle,
            data: props.radarData.dataBJ,
            symbol: "none",
            itemStyle: {
                color: "#F9713C"

            },
            areaStyle: {
                opacity: 0.1
            }
        },
        {
            name: "上海",
            type: "radar",
            lineStyle: lineStyle,
            data: props.radarData.dataSH,
            symbol: "none",
            itemStyle: {
                color: "#B3E4A1"
            },
            areaStyle: {
                opacity: 0.05

            }
        },
        {
            name: "广州",
            type: "radar",
            lineStyle: lineStyle,
            data: props.radarData.dataGZ,
            symbol: "none",
            itemStyle: {
                color: "rgb(238, 197, 102)"
            },
            areaStyle: {
                opacity: 0.05
            }
        } //end
    ]
})

watch(props.radarData, (newValue, oldValue) => {
    nextTick(() => {
        let chartContainer = document.getElementById("radarChartDiv")
        let myChart = echarts.init(chartContainer)
        Object.assign(options.radar, { indicator: newValue.indicatorData })
        let seriesData = options.series
        for (let i = 0; i < seriesData.length; i++) {
            if (seriesData[i]['name'] === '北京') {
                Object.assign(seriesData[i], { data: newValue.dataBJ })

            } if (seriesData[i]['name'] === '上海') {
                Object.assign(seriesData[i], { data: newValue.dataSH })

            } if (seriesData[i]['name'] === '广州') {
                Object.assign(seriesData[i], { data: newValue.dataGZ })

            }

        }
        options && myChart.setOption(options)

    })
}, { immediate: true, deep: true })
</script>
<style scoped>
.radarChartDiv {
    height: 200px;
    width: 260px;
}
</style>