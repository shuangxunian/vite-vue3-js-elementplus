import { createApp } from 'vue'
import './style.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000/'

const app = createApp(App)

app.use(ElementPlus)
app.config.globalProperties.$http= axios
app.mount('#app')
