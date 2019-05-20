import Vue from 'vue';
import router from '@/router/index';
import store from '@/store/index'
import iView from 'iview'
import App from './App';

import 'iview/dist/styles/iview.css';

Vue.use(iView)

new Vue({
    el:"#app",
    router,
    store,
    render: h => h(App)
})
