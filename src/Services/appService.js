import axios from "../utils/CustomAxios/Axios";

let getAllUsers = () => {
    return axios.get('/api/get-all-users')
}

let createNewUser = (data) => {
    return axios.post('/api/register', data);
}

let login = (account) => {
    return axios.post('/api/login', account,);
}
let checkJWTLogin = async () => {
    return axios.get('/api/check-login');
}
let logout = async () => {
    return axios.get('/api/clear-cookie');
}
let appService = {
    getAllUsers,
    createNewUser,
    login,
    checkJWTLogin,
    logout
}
export default appService;