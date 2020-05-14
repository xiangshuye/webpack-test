import Vue from 'vue';
import router from '@/router/index';
import store from '@/store/index'
import iView from 'iview'
import App from './App';

import './common.less';

// Vue.use(iView)
import './importComponent';

import './permission';


new Vue({
    el: "#app",
    router,
    store,
    render: h => h(App)
})
