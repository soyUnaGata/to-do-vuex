import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/main.css'
import './assets/css/global.css'
import 'materialize-css/dist/js/materialize.min'


createApp(App).use(store).use(router).mount('#app')

