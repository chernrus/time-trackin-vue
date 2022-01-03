import Vue from 'vue';
import App from './App.vue';
import '@/assets/styles/index.scss';
import store from './store';
import '@/plugins/components';

const app = new Vue({
    template: '<App/>',
    store,
    render: (h) => h(App),
});
app.$mount('#app');
