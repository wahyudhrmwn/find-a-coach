import RequestMutations from './mutations.js';
import RequestActions from './actions.js';
import RequestGetters from './getters.js';

export default {
    namespaced: true,
    state() {
        return {
            requests: []
        }
    },
    mutations: RequestMutations,
    actions: RequestActions,
    getters: RequestGetters
}