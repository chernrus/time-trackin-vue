import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        tasks: [],
    },
    getters: {
        taskList(state) {
            return state.tasks;
        },
    },
    mutations: {
        addTask(state, payload) {
            state.tasks.unshift(payload);
        },
        setTasks(state, payload) {
            state.tasks = [...payload];
        },
    },
    actions: {
        changeTaskValue({ commit, state }, payload) {
            const { tasks } = state;
            const objIndex = tasks.findIndex((obj) => obj.timestamp === payload.timestamp);
            tasks[objIndex] = payload;
            commit('setTasks', tasks);
        },
        removeTask({ commit, state }, payload) {
            const { tasks } = state;
            const objIndex = tasks.findIndex((obj) => obj.timestamp === payload);
            tasks.splice(objIndex, 1);
            commit('setTasks', tasks);
        },
    },
    modules: {
    },
});
