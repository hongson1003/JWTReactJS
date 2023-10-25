import { LOGIN_SUCCESS, LOGIN_OUT } from "../actionTypes/actionTypes"
const login = () => {
    return {
        type: LOGIN_SUCCESS,
        payload: true,
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