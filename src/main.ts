import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createVfm } from 'vue-final-modal'
import 'vue-final-modal/style.css'

const vfm = createVfm()
createApp(App).use(vfm).mount('#app')
