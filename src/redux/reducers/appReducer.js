
const initialState = {
    isLogin: false,
};
const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            let loginsc = { ...state };
            loginsc.isLogin = action.payload;
            return loginsc;

        case 'LOGIN_OUT':
            let logout = { ...state };
            logout.isLogin = action.payload;
            return logout;
        default:
            return state;
    }
};

export default appReducer;