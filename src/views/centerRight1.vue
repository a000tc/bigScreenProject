<template>
  <div id="centerRight1">
    <div class="bg-color-black">
      <div class="d-flex pt-2 pl-2">
        <span>
          <icon iconName="icon-chart-line" class="text-icon"></icon>
        </span>
        <div class="d-flex">
          <span class="text mx-2">任务完成排行榜</span>
        </div>
      </div>
      <div class="d-flex jc-center body-box">
        <dv-scroll-board class="dv-scr-board" :config="config" />
      </div>
    </div>
  </div>
</template>
<script setup>
import { reactive, ref, watch, computed, onBeforeMount, onMounted } from 'vue'
import { getRanking } from "@/http/api/index.js"
onBeforeMount(() => {
})
onMounted(() => {
  getRankingData()
})
let config = reactive({})
const getRankingData = () => {
  const param = {}
  getRanking(param).then(res => {
    Object.assign(config, res)
  })
}
</script>
<style lang="scss" scoped>
$box-height: 410px;
$box-width: 300px;

#centerRight1 {
  padding: 16px;
  padding-top: 20px;
  height: $box-height;
  width: $box-width;
  border-radius: 5px;

  .bg-color-black {
    height: $box-height - 30px;
    border-radius: 10px;
  }

  .text {
    color: #c3cbde;
  }

  .body-box {
    border-radius: 10px;
    overflow: hidden;

    padding-bottom: 15px;
    .dv-scr-board {
      margin-top: 15px;
      padding-bottom: 15px;
      width: 270px;
      height: 320px;
    }
  }
}</style>