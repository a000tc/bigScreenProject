<template>
  <div id="bottomRight">
    <div class="bg-color-black">
      <div class="d-flex pt-2 pl-2">
        <span>
          <icon iconName="icon-chart-area" class="text-icon"></icon>
        </span>
        <div class="d-flex">
          <span class=" text mx-2">工单修复以及满意度统计图</span>
          <div class="decoration2">
            <dv-decoration-2 :reverse="true" style="width:5px;height:6rem;" />
          </div>
        </div>
      </div>
      <div>
        <bottomRightChart :chartData="cData" />
      </div>
    </div>
  </div>
</template>

<script setup>
import bottomRightChart from '@/components/bottomRightChart.vue'
import { reactive, ref, watch, computed, onBeforeMount, onMounted } from 'vue';
import {formateTime} from "@/utils/index"
onBeforeMount(() => {
  setData()
  // console.log('2.组件挂载页面之前执行----onBeforeMount')
})
onMounted(() => {
  // drawTimingFn()
  // console.log('3.-组件挂载到页面之后执行-------onMounted')
})
let drawTiming = reactive(null)
let cData = reactive({
  year: null,
  weekCategory: [],
  radarData: [],
  maxData: 12000,
  weekMaxData: [],
  weekLineData: []
})
let drawTimingFn = () => {
  setData();
  // drawTiming = setInterval(() => {
  //   setData();
  // }, 6000);
}
let setData = () => {
  // 清空轮询数据
  cData.weekCategory = [];
  cData.weekMaxData = [];
  cData.weekLineData = [];
  cData.radarData = [];
  cData.radarDataAvg = [];

  let dateBase = new Date();
  cData.year = dateBase.getFullYear();
  // 周数据
  for (let i = 0; i < 7; i++) {
    // 日期
    let date = new Date();
    var today = new Date(); // 获取当前日期
    date.setDate(date.getDate() - i); // 设置日期为前numDays天
   date.toDateString(); 
  //   let previousDate = new Date(date.getTime() - (i * 24 * 60 * 60 * 1000)); // 获取前numDays天的日期
  //  let previousDateStr=previousDate.toDateString();
    // cData.weekCategory.unshift([date.getMonth() + 1, date.getDate() - i].join("/"));
    cData.weekCategory.unshift(formateTime(date.toDateString(),"yyyy-MM-dd"));

    // 折线图数据
    cData.weekMaxData.push(cData.maxData);
    let distance = Math.round(Math.random() * 11000 + 500);
    cData.weekLineData.push(distance);

    // 雷达图数据
    // 我的指标
    let averageSpeed = +(Math.random() * 5 + 3).toFixed(3);
    let maxSpeed = averageSpeed + +(Math.random() * 3).toFixed(2);
    let hour = +(distance / 1000 / averageSpeed).toFixed(1);
    let radarDayData = [distance, averageSpeed, maxSpeed, hour];
    cData.radarData.unshift(radarDayData);

    // 平均指标
    let distanceAvg = Math.round(Math.random() * 8000 + 4000);
    let averageSpeedAvg = +(Math.random() * 4 + 4).toFixed(3);
    let maxSpeedAvg = averageSpeedAvg + +(Math.random() * 2).toFixed(2);
    let hourAvg = +(distance / 1000 / averageSpeed).toFixed(1);
    let radarDayDataAvg = [
      distanceAvg,
      averageSpeedAvg,
      maxSpeedAvg,
      hourAvg
    ];
    cData.radarDataAvg.unshift(radarDayDataAvg);
  }

}
</script>

<style lang="scss" class>
$box-height: 520px;
$box-width: 100%;

#bottomRight {
  padding: 14px 16px;
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

  //下滑线动态
  .decoration2 {
    position: absolute;
    right: 0.125rem;
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