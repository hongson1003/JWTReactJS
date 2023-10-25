// import { useSelector } from "react-redux";
import './ManageUsers.scss'
const ManageUsers = () => {
    // const state = useSelector((state) => state.appReducer);
    return (
        <div className="manage-users">
            <h1 className="text-center">Quản lý người dùng</h1>
            <div className='row'>
                <div className='col-6 mx-5'>
                    <form>
                        <div className="form-group">
                            <label htmlFor="email">Địa chỉ email:</label>
                            <input type="email" className="form-control" id="email" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="pwd">Mật khẩu:</label>
                            <input type="password" className="form-control" id="pwd" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="usn">UserName</label>
                            <input type="text" className="form-control" id="usn" />
                        </div>
                        <button type="submit" className="btn btn-info mt-3">Đăng nhập</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ManageUsers;