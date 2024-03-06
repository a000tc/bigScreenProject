<template>
  <div id="center">
    <div class="up">
      <div class="bg-color-black item" v-for="item in countData" :key="item.title">
        <p class="ml-3 colorBlue fw-b ">{{ item.title }}</p>
        <div>
          <dv-digital-flop :config="item.number" class="dv-dig-flop ml-1 mt-2 pl-3" />
        </div>
      </div>
    </div>
    <div class="down">
      <div class="ranking bg-color-black">
        <span>
          <icon iconName="icon-chart-line" color="#32c5e9" class="text-icon"></icon>
        </span>
        <span class=" text mx-2 mb-1 pl-3">年度负责人组件达标榜</span>
        <dv-scroll-ranking-board class="dv-scr-rank-board mt-1" :config="ranking" />
      </div>
      <div class="percent">
        <div class="item bg-color-black">
          <span>今日任务通过率</span>
          <circleChart :id="rate[0].id" :tips="rate[0].tips" :colorObj="rate[0].colorData" />
        </div>
        <div class="item bg-color-black">
          <span>今日任务达标率</span>
          <circleChart :id="rate[1].id" :tips="rate[1].tips" :colorObj="rate[1].colorData" />
        </div>
        <div class="water">
          <dv-water-level-pond class="dv-wa-le-po" :config="water" />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { getCountInfo, getStandards } from "@/http/api/index.js"
import circleChart from "@/components/circleChart.vue"
import { reactive, ref, watch, computed, onBeforeMount, onMounted } from 'vue'
onBeforeMount(() => {

})
onMounted(() => {
  getData();getStandardsData();

})
let countData = ref([])    // 通过率和达标率的组件复用数据
let rate = reactive([
  {
    id: 'centerRate1',
    tips: 60,
    colorData: {
      textStyle: '#3fc0fb',
      series: {
        color: ['#00bcd44a', 'transparent'],
        dataColor: {
          normal: '#03a9f4',
          shadowColor: '#97e2f5'
        }
      }
    }
  },
  {
    id: 'centerRate2',
    tips: 40,
    colorData: {
      textStyle: '#67e0e3',
      series: {
        color: ['#faf3a378', 'transparent'],
        dataColor: {
          normal: '#ff9800',
          shadowColor: '#fcebad'
        }
      }
    }
  }
])
let ranking = reactive({
  data: [
    {
      name: '南宁市',
      value: 55
    },
    {
      name: '柳州市',
      value: 120
    },
    {
      name: '梧州市',
      value: 78
    },
    {
      name: '桂林市',
      value: 66
    },
    {
      name: '防城港市',
      value: 80
    },
    {
      name: '北海市',
      value: 80
    },
    {
      name: '玉林市',
      value: 80
    },
    {
      name: '贵港市',
      value: 80
    },
    {
      name: '百色市',
      value: 80
    },
    {
      name: '新乡6',
      value: 80
    }
  ],
  carousel: 'single',
  unit: '人'
})
let water = reactive({
  data: [24, 45],
  shape: 'roundRect',
  formatter: '{value}%',
  waveNum: 3
})
const getData = () => {
  let param = {}
  getCountInfo(param).then(res => {
    countData.value = res.data;
  }).catch(err => {
    console.log(err)
  })
}
const getStandardsData=()=>{
  let param={}
  getStandards(param).then(res=>{
    Object.assign(ranking,res)
  }).catch(err=>{
    console.log(err)
  })
}
</script>
<style lang="scss" scoped>
#center {
  display: flex;
  flex-direction: column;

  .up {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    .item {
      border-radius: 6px;
      padding-top: 8px;
      margin-top: 8px;
      width: 32%;
      height: 70px;

      .dv-dig-flop {
        width: 150px;
        height: 30px;
      }
    }
  }

  .down {
    padding: 6px 4px;
    padding-bottom: 0;
    width: 100%;
    display: flex;
    height: 255px;
    justify-content: space-between;

    .bg-color-black {
      border-radius: 5px;
    }

    .ranking {
      padding: 10px;
      width: 59%;

      .dv-scr-rank-board {
        height: 225px;
      }
    }

    .percent {
      width: 40%;
      display: flex;
      flex-wrap: wrap;

      .item {
        width: 50%;
        height: 120px;

        span {
          margin-top: 8px;
          font-size: 14px;
          display: flex;
          justify-content: center;
        }
      }

      .water {
        width: 100%;

        .dv-wa-le-po {
          height: 120px;
        }
      }
    }
  }
}</style>
