<template>
    <div id="centreLeft2Chart" ref="centreLeft2Chart"></div>
</template>
<script setup>
import { reactive, nextTick, ref, watch, computed, onBeforeMount, onMounted, defineProps } from 'vue'
import * as echarts from 'echarts';
import gx from "../assets/map/450000.json"
let props = defineProps({
    mapData: {
        tyep: Object,
        default: {}
    }
})
onBeforeMount(() => {
})
onMounted(() => {
    // getGXDate()
})
let option = reactive({
    showLegendSymbol: true,
    tooltip: {
        trigger: 'item',
        formatter: '{b}<br/>{c}',
        backgroundColor: 'rgba(0,0,0,0.8)',
        textStyle: {
            fontSize: 14,
            color: "#fff",
            lineHeight: 22,
        },
        position: point => {
            // 固定在顶部
            return [point[0] + 50, point[1] - 20];
        },
    },
    visualMap: {
        min: 0,
        max: 10,
        show: false,
        seriesIndex: 0,
        // 颜色
        inRange: {
            color: ['rgba(41,166,206, .5)', 'rgba(69,117,245, .9)'],
        },
    },
    series: [
        {
            name: '相关指数',
            type: 'map',
            map: 'GX',
            aspectScale: 0.85, //长宽比
            zoom: 1.2,
            aspectScale: 0.85, //长宽比
            top: '18%',
            left: '0%',
            roam: false,
            label: {
                show: true,
                color: "#fff"
            },
            itemStyle: {

                areaColor: 'rgba(0,0,0,0)',
                shadowColor: 'rgba(7,114,204, .8)',
                shadowOffsetX: 5,
                shadowOffsetY: 5,

            },
            emphasis: {
                itemStyle: {
                    areaColor: '#00aeef',
                }
            }
        }
    ]
})

watch(props.mapData, (newValue, oldValue) => {
    nextTick(() => {
        let chartDom = document.getElementById('centreLeft2Chart');
        let myChart = echarts.init(chartDom);
        myChart.showLoading();
        myChart.hideLoading();
        echarts.registerMap('GX', gx);
        Object.assign(option.series[0], { data: newValue })
        if (newValue && myChart) { myChart.setOption(option); }
    })
}, { immediate: true, deep: true })
</script>
<style scoped>
#centreLeft2Chart {
    height: 360px;
    width: 330px
}
</style>