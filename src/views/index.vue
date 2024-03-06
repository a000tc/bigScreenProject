<template>
  <div id="index" ref="appRef">
    <div class="bg">
      <dv-loading v-if="isLoading">Loading</dv-loading>
      <div v-else class="host-body">
        <!-- 第一行 s -->
        <div class="d-flex jc-center">
          <dv-decoration-10 class="dv-dec-10" />
          <div class="d-flex jc-center">
            <dv-decoration-8 class="dv-dec-8" :color="decorationColor" />
            <div class="title">
              <span class="title-text">大数据可视化平台</span>
              <dv-decoration-6 class="dv-dec-6" :reverse="true" :color="['#50e3c2', '#67a1e5']" />
            </div>
            <dv-decoration-8 class="dv-dec-8" :reverse="true" :color="decorationColor" />
          </div>
          <dv-decoration-10 class="dv-dec-10-s" />
        </div>
        <!-- 第一行 e -->
        <!-- 第二行 s -->
        <div class="d-flex jc-between px-2">
          <div class="d-flex aside-width">
            <div class="react-left ml-4 react-l-s">
              <span class="react-left"></span>
              <span class="text">数据分析1</span>
            </div>
            <div class="react-left ml-3">
              <span class="text">数据分析2</span>
            </div>
          </div>
          <div class="d-flex aside-width">
            <div class="react-right bg-color-blue mr-3">
              <span class="text fw-b">vue-big-screen</span>
            </div>
            <div class="react-right mr-4 react-l-s">
              <span class="react-after"></span>
              <span class="text">{{ dateYear }} {{ dateWeek }} {{ dateDay }}</span>
            </div>
          </div>
        </div>
        <!-- 第二行 e-->
        <!-- 第三行 s -->
        <div class="body-box">

          <!-- 第三行 s-->
          <div class="content-box">
            <div>
              <dv-border-box-12>
                <centerLeft1 />
              </dv-border-box-12>
            </div>
            <div>
              <dv-border-box-12>
                <centerLeft2 />
              </dv-border-box-12>
            </div>
            <div>
              <centerVue />
            </div>
            <div>
              <centerRight2 />
            </div>
            <div>
              <dv-border-box-13>
                <centerRight1 />
              </dv-border-box-13>
            </div>
          </div>
          
        <!-- 第四行 s -->
        <div class="bottom-box">
          <dv-border-box-13> <bottomLeft /></dv-border-box-13>
          <dv-border-box-12> <bottomRight /></dv-border-box-12>
        </div>
        <!-- 第四行 e  -->
        </div>
        <!-- 第三行 e -->
      </div>
    </div>
  </div>
</template>
<script>
import drawMixin from '@/utils/drawMixin';
export default {
  mixins: [drawMixin]
}
</script>
<script setup>
import { onMounted, onBeforeMount, ref, reactive, computed, watch } from 'vue';
import centerLeft1 from './centerLeft1.vue';
import centerLeft2 from './centerLeft2.vue';
import centerVue from './centerVue.vue';
import centerRight1 from './centerRight1.vue';
import centerRight2 from './centerRight2.vue';
import bottomLeft from "./bottomLeft.vue"; 
import bottomRight from "./bottomRight.vue";
import { formateTime } from "@/utils/index.js";

onMounted(() => {
  setLoading()
  timeFn()
})
let isLoading = ref(true)
let timeing = ref(null)
let dateDay = ref(null)
let dateYear = ref(null)
let dateWeek = ref(null)
let weekday = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']

let decorationColor = ['#568aea', '#000000']
const setLoading = () => {
  setTimeout(() => {
    isLoading.value = false
  }, 800);
}
const timeFn = () => {
  timeing.value = setInterval(() => {
    dateDay.value = formateTime(new Date(), 'HH:mm:ss')
    dateYear.value = formateTime(new Date(), 'yyyy-MM-dd')
    dateWeek.value = weekday[new Date().getDay()]
  }, 1000);
}

</script>
<style lang="scss" scoped>@import '../assets/css/index.scss'</style>