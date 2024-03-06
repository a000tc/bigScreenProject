import DataVVue3 from '@kjgl77/datav-vue3'
// 引入全局css
import './assets/css/style.scss';
import "./assets/font/iconfont.css"
import icon from './components/icon.vue'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/font/iconfont.js'
const app = createApp(App)
app.use(router)
app.use(DataVVue3)
app.component('icon', icon);
app.mount('#app')
