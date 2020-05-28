import "babel-polyfill";

import Vue from 'vue';
import router from '@/router/index';
import store from '@/store/index'
// import iView from 'iview'


import './common.less';


// Vue.use(iView)
import './importComponent';

import './permission';
Vue.config.performance = true;

import App from './App';
new Vue({
    el: "#app",
    router,
    store,
    render: h => h(App)
})
