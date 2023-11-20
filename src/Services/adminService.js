import axios from "../utils/CustomAxios/Axios";

let getUserWithPage = async (itemsPerPage, offset) => {
    return axios.get(`/api/get-user-with-page?itemsPerPage=${itemsPerPage}&offset=${offset}`);
}
let deleteUserWithID = async (id) => {
    return axios.delete(`/api/delete-user`, {
        params: { id: id },
    });
}

let getAllGroups = async () => {
    return axios.get('/api/get-all-group');
}

let createNewUser = async (data) => {
    return axios.post('/api/new-user', data);
}

let updateUser = async (data) => {
    return axios.put('/api/update-user', {
        data: data,
    })
}

let getAllRoles = async () => {
    return axios.get('/api/get-all-roles');
}

let createRoles = async (data) => {
    return axios.post('/api/create-roles', data);
}

let deleteRole = async (roleID) => {
    return axios.delete('/api/delete-role', {
        params: { roleID: roleID },
    })
}

let getRolesWithGroup = async (groupID) => {
    return axios.get(`/api/role-with-group?groupID=${groupID}`);
}

let addRoleWithForGroup = async (data) => {
    return axios.post('/api/add-roles-for-group', data)
}


const adminService = {
    getUserWithPage,
    deleteUserWithID,
    getAllGroups,
    createNewUser,
    updateUser,
    getAllRoles,
    createRoles,
    deleteRole,
    getRolesWithGroup,
    addRoleWithForGroup
}

export default adminService;