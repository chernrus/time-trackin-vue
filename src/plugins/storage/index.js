export default {
    namespaced: true,
    state: {},
    getters: {},
    mutations: {},
    actions: {
        initialiseStore({ state, rootState }, payload) {
            if (localStorage.getItem('storage')) {
                const storage = JSON.parse(localStorage.getItem('storage'));
                rootState.tasks = [...storage.tasks.map((obj) => ({
                    ...obj,
                    start_date: new Date(obj.start_date),
                    end_date: new Date(obj.end_date),
                }))];
            }
        },
    },
};
