<template>
    <div id="centerLeftPieChart" ref="centerLeftPieChart" class="centerLeftPieChart"></div>
</template>
<script setup>
import * as echarts from 'echarts';
import { reactive, ref, watch, watchEffect, computed, nextTick, onMounted, defineProps } from 'vue'
onMounted(() => {
})
let props = defineProps({
    pieData: {
        tyep: Object,
        default: {}
    }
})
let options = reactive({
    grid: {
        top: '0%',       //柱状图距离父容器div顶端的距离
        // left: '2%',      //柱状图距离父容器div左端的距离
        // right: '15%',    //柱状图距离父容器div右端的距离
        // bottom: '20%',    //柱状图距离父容器div底端的距离
        // containLabel: true  //grid 区域是否包含坐标轴的刻度标签
    }
    ,
    color: [
        "#37a2da",
        "#32c5e9",
        "#9fe6b8",
        "#ffdb5c",
        "#ff9f7f",
        "#fb7293",
        "#e7bcf3",
        "#8378ea"
    ],
    tooltip: {
        trigger: 'item',
        formatter: `{b}:{c}%`,
        backgroundColor: 'rgba(0,0,0,0.8)',
        textStyle: {
            color: "#fff"
        }
    },
    legend: {
        top: '0',
        left: 'center',
        align: "left",
        textStyle: {
            color: "#fff",
            fontSize: 12,
            rich: {
                a: {
                    width: 60,
                    fontSize: 12,
                    lineHeight: 12
                }
            },
        }, formatter: [
            '{a|{name}}'
        ].join('\n'),
        orient: 'horizontal',
    },
    series: [
        {
            name: 'Access From',
            type: 'pie',
            top: "20%",
            radius: ['40%', '80%'],
            label: {
                show: true,
                position: 'center',
                formatter: `{b}:{c}%`
            },
        }
    ]
})

watch(() => props.pieData, (newVal, oldVal) => {
    nextTick(() => {
        let seriesData = props.pieData ? props.pieData.map(item => { return { name: item.name, value: item.rate * 100 } }) : []
        let chartContainer = document.getElementById("centerLeftPieChart")
        if (props.pieData && chartContainer) {
            Object.assign(options.series[0], { data: seriesData })
            let myChart = echarts.init(chartContainer)
            myChart.setOption(options)
        }
    })
}, { immediate: true, deep: true })
</script>
<style scoped>
.centerLeftPieChart {
    height: 220px;
    width: 260px;
}
</style>