import { createApp } from 'vue'
import App from './App.vue'
import { createI18n, } from 'vue-i18n'
import router from './router'
import store from './store'

import './assets/css/main.css'
import './assets/css/global.css'
import 'materialize-css/dist/js/materialize.min'

import messages from "./locales/messages";

const i18n = createI18n({
    locale: 'ua',
    fallbackLocale: 'en',
    messages
});

createApp(App).use(i18n).use(store).use(router).mount('#app')

