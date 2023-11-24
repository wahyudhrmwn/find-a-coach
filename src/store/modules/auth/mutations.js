export default {
    setUser(state, payload) {
        state.token = payload.token;
        state.userId = payload.userId;
        state.didAutoLogout = false;
        // state.tokenExpiration = payload.tokenExpiration;
    },
    didAutoLogout(state) {
        state.didAutoLogout = true;
    }
}