import axios from "../utils/CustomAxios/Axios";

let getUserWithPage = async (itemsPerPage, offset) => {
    return axios.get(`/api/get-user-with-page?itemsPerPage=${itemsPerPage}&offset=${offset}`);
}
let deleteUserWithID = async (id) => {
    return axios.post('/api/delete-user', {
        id: id,
    })
}

let getAllGroups = async () => {
    return axios.get('/api/get-all-group');
}

let createNewUser = async (data) => {
    return axios.post('/api/new-user', data);
}


const adminService = {
    getUserWithPage,
    deleteUserWithID,
    getAllGroups,
    createNewUser
}

export default adminService;