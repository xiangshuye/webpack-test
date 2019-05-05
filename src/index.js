import Vue from 'vue';
import router from '@/router/index';

import App from './App';
// import "vditor/dist/index.classic.css";
new Vue({
    el:"#app",
    router,
    render: h => h(App)
})
