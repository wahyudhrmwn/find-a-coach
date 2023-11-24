import { createStore } from "vuex";

import CoachModules from './modules/coaches/index.js';
import RequestModules from './modules/requests/index.js';
import AutheticationModules from './modules/auth/index.js';

const store = createStore({
    modules: {
        coaches: CoachModules,
        requests: RequestModules,
        auth: AutheticationModules
    },
    // state() {
    //     return {
    //         userId: 'c3'
    //     }
    // },
    // getters: {
    //     userId(state) {
    //         return state.userId;
    //     }
    // }
});

export default store;