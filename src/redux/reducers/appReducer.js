
const initialState = {
    isLogin: -1,
    token: '',
};
const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            let loginsc = { ...state };
            loginsc.isLogin = action.payload.login;
            loginsc.token = action.payload.token;
            return loginsc;

        case 'LOGIN_OUT':
            let logout = { ...state };
            logout.isLogin = action.payload;
            logout.token = '';
            return logout;
        default:
            return state;
    }
};

export default appReducer;