import Vue from 'vue';
import router from '@/router/index';
import store from '@/store/index'
import iView
// , {
//     Layout, Header, Sider, Content, Menu, Submenu, Page,
//     MenuItem, Form, Row, Col, FormItem, Input, Button, Table
// }
    from 'iview'
import App from './App';

import './common.less';

Vue.use(iView)
// Vue.component("Layout", Layout);
// Vue.component("Header", Header);
// Vue.component("Header", Header);
// Vue.component("Sider", Sider);
// Vue.component("Content", Content);
// Vue.component("Menu", Menu);
// Vue.component("Submenu", Submenu);
// Vue.component("MenuItem", MenuItem);
// Vue.component("Form", Form);
// Vue.component("Page", Page);
// Vue.component("Row", Row);
// Vue.component("Col", Col);
// Vue.component("FormItem", FormItem);
// Vue.component("Input", Input);
// Vue.component("Button", Button);
// Vue.component("Table", Table);

new Vue({
    el: "#app",
    router,
    store,
    render: h => h(App)
})
