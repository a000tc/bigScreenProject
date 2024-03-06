<template>
    <div id="centerLeft2">
        <div class="bg-color-black">
            <div class="d-flex pt-2 pl-2">
                <span> 
                     <icon iconName="icon-chart-area" color="#37a2da"  class="text-icon"></icon>
                </span>
                <div class="d-flex">
                    <span class=" text mx-2">地图数据</span>
                    <dv-decoration-1 class="dv-dec-1" />
                </div>
            </div>
            <div class="d-flex jc-center">
                <mapChart :mapData="mapData" />
            </div>
        </div>
    </div>
</template>
<script setup>
import mapChart from '@/components/mapChart.vue';
import { reactive, ref, watch, computed, onBeforeMount, onMounted } from 'vue'
onBeforeMount(() => {
})

let mapData = reactive([
    {
        // 名字需要与 “common/map/450000.js” 地图数据文件里面定义的一一对应，不能是 “福州” 或者 “闽” 之类的缩写
        name: '南宁市',
        value: 10,
        elseData: {
            // 这里放置地图 tooltip 里想显示的数据
        }
    },
    {
        name: '柳州市',
        value: 9,
    },
    {
        name: '桂林市',
        value: 8,
    },
    {
        name: '玉林市',
        value: 7,
    },
    {
        name: '贵港市',
        value: 6,
    },
    {
        name: '来宾市',
        value: 5,
    },
    {
        name: '北海市',
        value: 4,
    },
    {
        name: '防城港市',
        value: 3,
    },
    {
        name: '梧州市',
        value: 2,
    },
    {
        name: '钦州市',
        value: 2,
    },
    {
        name: '百色市',
        value: 5,
    },
    {
        name: '贺州市',
        value: 5,
    },
    {
        name: '河池市',
        value: 3,
    },
    {
        name: '崇左市',
        value: 7
    }
])
onMounted(() => {
    // console.log(mapData)
})
</script>
<style lang="scss" scoped>
#centerLeft2 {
    $box-width: 300px;
    $box-height: 410px;
    padding: 16px;
    height: $box-height;
    min-width: $box-width;
    border-radius: 5px;

    .bg-color-black {
        height: $box-height - 30px;
        border-radius: 10px;
    }

    .text {
        color: #c3cbde;
    }

    .dv-dec-1 {
        position: relative;
        width: 100px;
        height: 20px;
        top: -3px;
    }

    .chart-box {
        margin-top: 16px;
        width: 170px;
        height: 170px;

        .active-ring-name {
            padding-top: 10px;
        }
    }
}</style>