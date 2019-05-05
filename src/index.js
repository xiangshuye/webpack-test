import Vue from 'vue';
import router from '@/router/index';
import store from '@/store/index'


import App from './App';
// import "vditor/dist/index.classic.css";
new Vue({
    el:"#app",
    router,
    store,
    render: h => h(App)
})
