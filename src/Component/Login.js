import './Login.scss';
import '../assets/font/TiltNeon-Regular.ttf';
import user1 from '../assets/image/iphone14-gaixinh.jpg';
import plus from '../assets/image/plus.png';

const Login = (props) => {
    return (
        <div className="login">
            <div className='login-top container'>
                <div className='row account-info px-3 px-sm-5 pt-1'>
                    <div className='col-6 justify-content-center d-none d-md-flex'>
                        <div className='info-main'>
                            <h2>Facebook</h2>
                            <h4>Đăng nhập gần đây</h4>
                            <p>Nhấp vào ảnh của bạn hoặc thêm tài khoản.</p>
                            <div className='account-box d-flex justify-content-between'>
                                <div className='item'>
                                    <div className='item_image' style={{ backgroundImage: `url(${user1})` }}>
                                    </div>
                                    <div className='item_name d-flex justify-content-center align-items-center'>
                                        <span className='info-name'>Hồng Sơn Nguyễn</span>
                                    </div>
                                </div>
                                <div className='item'>
                                    <div className='item_image' >
                                        <div className='sub-item' style={{ backgroundImage: `url(${plus})` }}></div>
                                    </div>
                                    <div className='item_name d-flex justify-content-center align-items-center'>
                                        <span className='info-name'>Thêm Tài Khoản</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6 col-12 d-md-flex justify-content-center flex-column'>
                        <div className='text-center p-2 title d-md-none'>Facebook</div>
                        <div className='register-main'>
                            <form>
                                <div className="form-outline mb-4">
                                    <input type="email" className="form-control py-3" placeholder='Email hoặc số điện thoại' />
                                </div>

                                <div className="form-outline mb-4">
                                    <input type="password" className="form-control py-3" placeholder='Mật khẩu' />
                                </div>

                                <button type="button" className="btn btn-primary btn-block mb-4 form-control">Đăng nhập</button>

                                <div className="text-center border-bottom forgot-pass">
                                    <span className='mb-3 d-inline-block'>Quên mật khẩu ?</span>
                                </div>
                                <div className='text-center'>
                                    <button type='button' className='btn btn-success btn-block mt-4 mb-2'>Tạo tài khoản mới</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className='row-6'></div>
            </div>
        </div>
    )
}

export default Login;