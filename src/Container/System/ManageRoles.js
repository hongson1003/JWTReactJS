import { useState } from 'react';
import './ManageRoles.scss';
import adminService from '../../Services/adminService';
import { useEffect } from 'react';
import { toast } from 'react-toastify';


const ManageRoles = () => {

    const [list, setList] = useState([{ key: 1, url: '', moTa: '' }]);
    const [roles, setRoles] = useState([]);

    let handleAddItem = (tempp) => {
        let newArr = [];
        list.forEach(item => {
            newArr.push(item);
            if (item.key === tempp.key)
                newArr.push({ key: list.length + 1, url: '', moTa: '' });
        })
        setList(prev => ([
            ...newArr
        ]))
    }
    let handleDeleteItem = (tempp) => {
        let newArr = list.filter(item => item.key !== tempp.key)
        setList(prev => (
            [
                ...newArr
            ]
        ))
    }

    const isEmptyList = () => {
        return list.some(item => item.url === '')
    }

    let handleOnSave = async () => {
        if (isEmptyList()) {
            toast.error('Thêm thất bại, vui lòng nhập đầy đủ thông tin');
            return;
        }
        let response = await adminService.createRoles(list);
        if (response.errCode === 0) {
            toast.success('Thêm quyền thành công')
            getRoles();
            setList([{ key: 1, url: '', moTa: '' }]);
            getRoles();
        } else {
            toast.error('Thêm quyền thất bại');
        }
    }
    let getRoles = async () => {
        let response = await adminService.getAllRoles();
        if (response.errCode === 0) {
            setRoles(response.data);
        }
    }
    useEffect(() => {
        const getAllRoles = async () => {
            await getRoles();
        }
        getAllRoles();
    }, [])

    let handleOnChange = (value, key, name) => {
        let newArr = [...list].map(item => {
            let k = item;
            if (item.key === key) {
                k[name] = value;
            }
            return k;
        })
        setList(newArr);
    }

    const handleDeleteRole = async (roleID) => {
        let rs = await adminService.deleteRole(roleID);
        if (rs.errCode === 0) {
            toast.success('Xóa quyền thành công');
            getRoles();
        } else {
            toast.error('Xóa quyền thất bại');
        }
    }

    return (
        <div className='manage-roles'>
            <h1 className='text-center'>Quản lý quyền hạn người dùng</h1>
            <h4 className='px-5 text-center mt-3 font-italic'>Thêm quyền</h4>
            <div className='list-roles'>
                {list?.length > 0 &&
                    list.map(item => (
                        <div key={item.key} className='row role-item'>
                            <div className='col-5'>
                                <label>Url</label>
                                <input className='form-control'
                                    value={item.url}
                                    onChange={(e) => handleOnChange(e.target.value, item.key, 'url')}
                                />
                            </div>
                            <div className='col-5'>
                                <label>Mô tả</label>
                                <input className='form-control'
                                    value={item.moTa}
                                    onChange={(e) => handleOnChange(e.target.value, item.key, 'moTa')}
                                />
                            </div>
                            <div className='col-2 item'>
                                <i className="fa fa-plus" aria-hidden="true"
                                    onClick={() => handleAddItem(item)}
                                ></i>
                                {list?.length === 1 ?
                                    <i hidden className="fa fa-trash-o" aria-hidden="true"
                                        onClick={() => handleDeleteItem(item)}
                                    ></i> :
                                    <i className="fa fa-trash-o" aria-hidden="true"
                                        onClick={() => handleDeleteItem(item)}
                                    ></i>
                                }
                            </div>

                        </div>

                    ))
                }
            </div>
            <div className='row d-flex save-item justify-content-center mt-3'>
                <button className='btn btn-primary'
                    onClick={() => handleOnSave()}
                >Lưu</button>
            </div>

            <div className='table-roles'>
                <hr />
                {roles?.length > 0 &&
                    <>
                        <h2 className='text-center mt-3'>Danh sách quyền người dùng</h2>
                        <table id="customers">
                            <thead>
                                <tr>
                                    <th>STT</th>
                                    <th>URL</th>
                                    <th>Mô tả</th>
                                    <th>Hành động</th>
                                </tr>
                            </thead>
                            <tbody>
                                {roles.map((item, index) => (
                                    <tr key={item.roleID}>
                                        <td>{index + 1}</td>
                                        <td>{item.url}</td>
                                        <td>{item.description}</td>
                                        <td>
                                            <button className='btn btn-primary'><i className="fa fa-trash-o " aria-hidden="true"
                                                onClick={() => handleDeleteRole(item.roleID)}
                                            ></i></button>
                                        </td>
                                    </tr>
                                ))}

                            </tbody>


                        </table>
                    </>
                }

            </div>
        </div>
    )
}
export default ManageRoles;