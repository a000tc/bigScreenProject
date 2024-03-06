<template>
    <div id="bottomLeft">
        <div class="bg-color-black">
            <div class="d-flex pt-2 pl-2">
                <span>
                    <icon iconName="icon-chart-bar" class="text-icon"></icon>
                </span>
                <div class="d-flex">
                    <span class=" text mx-2">数据统计图</span>
                </div>
            </div>
            <div>
                <bottomLeftChart  />
            </div>
        </div>
    </div>
</template>

<script setup>
import bottomLeftChart from '@/components/bottomLeftChart.vue'
import { reactive, ref, watch, computed, onBeforeMount, onMounted } from 'vue'
onBeforeMount(() => { 
})
onMounted(() => {
})

</script>

<style lang="scss" scoped>
$box-height: 520px;
$box-width: 100%;

#bottomLeft {
    padding: 20px 16px;
    height: $box-height;
    width: $box-width;
    border-radius: 5px;

    .bg-color-black {
        height: $box-height - 35px;
        border-radius: 10px;
    }

    .text {
        color: #c3cbde;
    }

    .chart-box {
        margin-top: 16px;
        width: 170px;
        height: 170px;

        .active-ring-name {
            padding-top: 10px;
        }
    }
}
</style>