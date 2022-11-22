import Vue from 'vue'
import App from './App.vue'

import { createApp } from 'vue-demi'
import { MotionPlugin } from '@vueuse/motion'
Vue.config.productionTip = false

const app = createApp(App)

app.use(MotionPlugin)
app.mount('#app')
