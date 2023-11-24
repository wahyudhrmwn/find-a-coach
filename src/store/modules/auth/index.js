import authActions from './actions.js';
import authGetters from './getters.js';
import authMutations from './mutations.js';

export default {
    // namespaced: true,
    state() {
        return {
            userId: null,
            token: null,
            tokenExpiration: null,
            didAutoLogout: false
        }
    },
    actions: authActions,
    getters: authGetters,
    mutations: authMutations
}