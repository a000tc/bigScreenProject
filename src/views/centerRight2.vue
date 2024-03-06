<template>
    <div id="centerRight2">
        <div class="bg-color-black">
            <div class="d-flex pt-2 pl-2">
                <span>
                    <icon iconName="icon-align-left" class="text-icon" />
                </span><span class=" text mx-2">产品销售渠道分析</span>
            </div>
            <div class="d-flex ai-center flex-column body-box">
                <dv-capsule-chart class="dv-cap-chart" :config="config" />
                <radarChart :radarData="radarData" />
            </div>
        </div>
    </div>
</template>
<script setup>
import { reactive, ref, watch, computed, onBeforeMount, onMounted } from 'vue'
import { getChannel, getRadar } from "@/http/api/index.js"
import radarChart from '@/components/radarChart.vue';
onBeforeMount(() => {
    getChannelData();
    getRadarData()
})
onMounted(() => {
})
let config = reactive(
    {}
)
let radarData = reactive({})
const getChannelData = () => {
    const param = {}
    getChannel(param).then(res => {
        Object.assign(config, { data: res.data })
    }).catch(err => {
        console.log(err)
    })
}
const getRadarData = () => {
    const param = {}
    getRadar(param).then(res => {
        Object.assign(radarData, res)
    }).catch(err => { 
        console.log(err)
    })
}
</script>
<style lang="scss" scoped>
#centerRight2 {
    $box-height: 410px;
    $box-width: 340px;
    padding: 5px;
    height: $box-height;
    width: $box-width;
    border-radius: 5px;

    .bg-color-black {
        padding: 5px;
        height: $box-height;
        width: $box-width;
        border-radius: 10px;
    }

    .text {
        color: #c3cbde;
    }

    .body-box {
        border-radius: 10px;
        overflow: hidden;

        .dv-cap-chart {
            width: 100%;
            height: 160px;
        }
    }
}
</style>