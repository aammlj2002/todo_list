import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "./assets/css/global.css"
import "material-icons"

createApp(App).use(router).mount('#app')
