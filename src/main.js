import Vue from 'vue';
import App from './App.vue';
import '@/assets/styles/index.scss';
import store from './store';
import '@/plugins/components';

const app = new Vue({
    template: '<App/>',
    store,
    render: (h) => h(App),
    beforeCreate() {
        store.dispatch('storage/initialiseStore', true);
        store.subscribe((mutation, state) => {
            localStorage.setItem('storage', JSON.stringify(state));
            // if (mutation.type.startsWith('storage/')) {
            //     const { storage } = state;
            //     localStorage.setItem('storage', JSON.stringify(storage));
            // }
        });
    },
});
Vue.directive('click-outside', {
    bind: function (el, binding, vnode) { // eslint-disable-line
        el.event = function (event) {
            if (!(el === event.target || el.contains(event.target))) {
                vnode.context[binding.expression](event);
            }
        };
        document.body.addEventListener('click', el.event);
    },
    unbind(el) {
        document.body.removeEventListener('click', el.event);
    },
});
app.$mount('#app');
