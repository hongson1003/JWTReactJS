import axios from "../utils/CustomAxios/Axios";

let getAllUsers = () => {
    return axios.get('/api/get-all-users')
}

let createNewUser = (data) => {
    return axios.post('/api/create-new-user', data);
}

let login = (account) => {
    return axios.post('/api/login', account);
}

let appService = {
    getAllUsers,
    createNewUser,
    login
}
export default appService;