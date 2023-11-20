import { LOGIN_SUCCESS, LOGIN_OUT } from "../actionTypes/actionTypes"
const login = (token) => {
    return {
        type: LOGIN_SUCCESS,
        payload: {
            login: true,
            token: token
        },
    }
}

const logout = () => {
    return {
        type: LOGIN_OUT,
        payload: false,
    }
}

const appAction = {
    login,
    logout
}
export default appAction;