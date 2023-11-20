import { useEffect, useState } from 'react';
import './ManageGroupRole.scss';
import adminService from '../../Services/adminService';
import { toast } from 'react-toastify';


let ManageGroupRole = () => {
    const [roles, setRoles] = useState([]);
    const [rolesRender, setRolesRender] = useState([]);
    const [groups, setGroups] = useState([]);
    const [selectGroup, setSelectGroup] = useState({ groupID: '', name: '' });

    useEffect(() => {
        let isMouted = true;
        const fetchGroupAndRoles = async () => {
            if (isMouted === true) {
                await getRoles();
                await getGroups();
            }
        }
        fetchGroupAndRoles();
        return () => {
            isMouted = false;
        }
    }, [])


    useEffect(() => {
        let isMouted = true;
        const fetchFirstGroups = async () => {
            if (groups && groups.length > 0 && isMouted === true) {
                let groupID = groups[0].GroupID;
                let response = await adminService.getRolesWithGroup(groupID);
                if (isMouted) {
                    setRolesRender(mergeChecked(response.data, roles));
                    setSelectGroup(groups[0])
                }
            }
        }
        fetchFirstGroups();

        return () => {
            isMouted = false;
        }
    }, [groups, roles])

    const getRoles = async () => {
        let response = await adminService.getAllRoles();
        if (response.errCode === 0) {
            setRoles(response.data);
            setRolesRender(response.data);
        }
    }
    const getGroups = async () => {
        let response = await adminService.getAllGroups();
        if (response.errCode === 0) {
            setGroups(response.data);
        }
    }
    const handleOnChangeGroup = async (value) => {
        let item = JSON.parse(value);
        let response = await adminService.getRolesWithGroup(item.GroupID);
        if (response.errCode === 0) {
            let rolesWithG = response.data;
            let merged = mergeChecked(rolesWithG, roles);
            setSelectGroup(item);
            setRolesRender(merged);
        }
    }
    const mergeChecked = (rolesWithG, roles) => {
        let arr = [];
        roles.forEach(item1 => {
            let temp = { ...item1 };
            for (let i = 0; i < rolesWithG?.length || 0; i++) {
                if (item1.roleID === rolesWithG[i].roleID) {
                    temp.checked = true;
                    arr.push(temp);
                    return;
                }
            }
            temp.checked = false;
            arr.push(temp);
        })
        return arr;
    }

    const handleOnChangeChecked = (value) => {
        let state = [...rolesRender].map(item => {
            if (item.roleID === value.roleID) {
                item.checked = !item.checked;
            }
            return item;
        });
        setRolesRender(state);
    }

    const buildRoles = () => {
        let arr = [];
        rolesRender.forEach(item => {
            let temp = { ...item };
            if (temp.checked === true) {
                let newItem = { groupID: selectGroup.GroupID, roleID: temp.roleID };
                arr.push(newItem);
            }

        })
        return arr;
    }

    const handleOnClick = async () => {
        let data = buildRoles();
        data = { groupID: selectGroup.GroupID, data: data };
        console.log(data)
        let response = await adminService.addRoleWithForGroup(data);
        if (response.errCode === 0) {
            toast.success('Thêm quyền thành công');

        }
    }

    const handleRefresh = async () => {
        let response = await adminService.getRolesWithGroup(selectGroup.GroupID);
        if (response.errCode === 0) {
            setRolesRender(mergeChecked(response.data, roles));
        }
    }

    return (
        <div className="manage-group-role">
            <h1 className="text-center">Quản lý quyền hạn của Group</h1>
            <div className='main-container'>
                <h3>Group Role</h3>
                <div className='row'>
                    <div className='col-6'>
                        <label>Chọn nhóm:</label>
                        <select className='form-control' value={JSON.stringify(selectGroup) || ''}
                            onChange={(e) => handleOnChangeGroup(e.target.value)}
                        >
                            {groups?.length > 0 &&
                                groups.map(item => (
                                    <option key={item.GroupID} value={JSON.stringify(item)}>{item.Name}</option>
                                ))}
                        </select>
                    </div>
                    <div className='col-3 d-flex flex-end'>
                        <button className='btn btn-primary'
                            onClick={handleOnClick}
                        >Lưu</button>
                    </div>
                    <div className='col-3 d-flex flex-end'>
                        <button className='btn btn-primary'
                            onClick={handleRefresh}
                        >Refresh</button>
                    </div>

                </div>
                <hr />
                <div className='row'>
                    <p className='assign-role'>Gán quyền: </p>
                    {rolesRender?.length > 0 &&
                        rolesRender.map(item => {
                            return (
                                <div key={item.roleID} className='role-setup'>
                                    <div className='col-5'>
                                        <input type='checkbox' checked={item.checked || false} readOnly
                                            onChange={() => handleOnChangeChecked(item)}
                                        />
                                        <label>{item.url}</label>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div >
    )
}

export default ManageGroupRole;