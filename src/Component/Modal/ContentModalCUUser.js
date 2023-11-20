import { useEffect } from "react";
import { useState } from "react";
import adminService from "../../Services/adminService";
import { toast } from "react-toastify";
import Action from '../../utils/Action';

let ContentModalCUUser = (props) => {
    let { closeModal, handleSetSubtitle } = props;
    const [user, setUser] = useState({
        email: '',
        password: '',
        groupID: -1,
    });
    const [groups, setGroups] = useState([]);

    useEffect(() => {
        const fetchGroup = async () => {
            try {
                let response = await adminService.getAllGroups();
                if (response.errCode === 0) {
                    setGroups(response.data);
                } else if (response.errCode === 403) {
                    toast.error('Bạn không thể xem danh sách quyền hạn từ hệ thống')
                } else {
                    toast.error('Có lỗi xảy ra !!!');
                }
            } catch (e) {
                console.log(e)
            }
        }
        fetchGroup();
    }, [])

    useEffect(() => {
        if (props.status === Action.EDIT) {
            setUser(props.user);
        }

    }, [props.user, props.status]);



    let isEmpty = () => {
        let count = 0;
        let temp = [{ key: 'email', value: user.email }, { key: 'password', value: user.password }, { key: 'groupID', value: user.groupID }];
        temp.forEach(item => {
            if (item.value === '') {
                count++;
                document.getElementById(item.key).style.borderColor = 'red';
            }
        })
        return count;
    }

    let handleCreateNewUser = async () => {
        if (isEmpty() === 0) {
            let kq = await props.handleCreateNewUser(user);
            if (kq === true) {
                toast.success('Tạo mới người dùng thành công');
                closeModal();
            }
        }
    }
    let handleEditUser = async () => {
        if (isEmpty() === 0) {
            let kq = await props.handleEditUser(user);
            if (kq === true) {
                toast.success('Cập nhật người dùng thành công');
                closeModal();
            } else {
                toast.error('Bạn không có quyền chỉnh sửa người dùng');
            }
        }
    }

    let handleOnChange = (value, key) => {
        let temp = { ...user };
        temp[key] = value;
        setUser(temp);
    }
    return (
        <>
            <div className='d-flex justify-content-between border-bottom pb-2'>
                <h2 className='font-weight-bold' ref={(_subtitle) => (handleSetSubtitle(_subtitle))}>{props.status === Action.CREATE ? 'TẠO MỚI NGƯỜI DÙNG' : 'CHỈNH SỬA THÔNG TIN NGƯỜI DÙNG'}</h2>
                <button className='login-close d-flex justify-content-center align-items-center' onClick={closeModal}><i className="fa fa-window-close btn-btn-dark px-2 text-danger" aria-hidden="true"></i></button>
            </div>
            <div className='border-bottom p-3 gradient-custom' >
                <section className="">
                    <div className="">
                        <div className="row justify-content-around align-items-center">
                            <div className="col-12">
                                <div
                                    className="card shadow-2-strong card-registration"
                                    style={{ borderRadius: '0' }}
                                >
                                    <div className="card-body px-2">
                                        <div className="row">
                                            <div className="col-12 mb-3">
                                                {props.status === Action.CREATE ?
                                                    <input type="email" id="email"
                                                        pattern="[^ @]*@[^ @]*"
                                                        className="form-control form-control-lg"
                                                        placeholder='Email'
                                                        required
                                                        onFocus={() => {
                                                            document.getElementById('email').style.borderColor = 'grey'
                                                        }}
                                                        onChange={(e) => handleOnChange(e.target.value, 'email')}
                                                        value={user.email}
                                                    /> :
                                                    <input type="email" id="email"
                                                        pattern="[^ @]*@[^ @]*"
                                                        className="form-control form-control-lg"
                                                        placeholder='Email'
                                                        required
                                                        disabled
                                                        onFocus={() => {
                                                            document.getElementById('email').style.borderColor = 'grey'
                                                        }}
                                                        onChange={(e) => handleOnChange(e.target.value, 'email')}
                                                        value={user.email}
                                                    />
                                                }
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12 pb-3">
                                                {props.status === Action.CREATE ?
                                                    <input type="password" id="password" className="form-control form-control-lg" placeholder='Password'
                                                        onFocus={() => {
                                                            document.getElementById('password').style.borderColor = 'grey'
                                                        }}
                                                        onChange={(e) => handleOnChange(e.target.value, 'password')}
                                                        value={user.password}
                                                    /> :
                                                    <input type="password" id="password" className="form-control form-control-lg" placeholder='Password'
                                                        onFocus={() => {
                                                            document.getElementById('password').style.borderColor = 'grey'
                                                        }}
                                                        disabled
                                                        onChange={(e) => handleOnChange(e.target.value, 'password')}
                                                        value={user.password}
                                                    />
                                                }
                                            </div>
                                        </div>
                                        <div className="row">
                                            {groups && groups.length > 0 ?
                                                <div className="col-12">
                                                    <select
                                                        className="form-control"
                                                        onChange={(e) => handleOnChange(+e.target.value, 'groupID')}
                                                        value={user.groupID}
                                                    >
                                                        {groups && groups.length > 0 &&
                                                            groups.map(item => {
                                                                return (
                                                                    <option key={item.GroupID} value={+item.GroupID}>{item.Name}</option>
                                                                )
                                                            })}
                                                    </select>
                                                </div> :
                                                <p className="px-3 my-0 text-danger" style={{ fontWeight: 'bold', fontSize: '17px' }}>Kiểm tra quyền truy cập của bạn</p>
                                            }
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
            <footer className='mt-2 d-flex justify-content-end'>
                <button className='btn btn-success mx-2'
                    onClick={props.status === Action.CREATE ? handleCreateNewUser : handleEditUser}
                >{props.status === Action.CREATE ? 'Tạo mới' : 'Lưu thay đổi'}</button>
                <button onClick={(e) => closeModal(e)} className='btn btn-warning'>Hủy bỏ</button>
            </footer>
        </>
    )
}

export default ContentModalCUUser;