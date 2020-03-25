import Vue from 'vue';
import VueRouter from 'vue-router'
import { router } from './routes'

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: router
})
