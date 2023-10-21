import './Login.scss';
import '../assets/font/TiltNeon-Regular.ttf';
import user1 from '../assets/image/iphone14-gaixinh.jpg';
import plus from '../assets/image/plus.png';
import Modal from 'react-modal';
import React, { useState } from 'react';
import ContentModalLogin from './Modal/ContentModalLogin';
const Login = (props) => {

    const [modalIsOpen, setIsOpen] = useState(false);

    const customStyles = {
        content: {
            maxWidth: '1200px',
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            borderRadius: '15px',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            background: 'linear-gradient(135deg, rgba(2,0,36,1) 0%, rgba(117,34,206,0.8660057773109244) 9%, rgba(115,28,185,0.8912158613445378) 19%, rgba(112,20,158,0.7819721638655462) 32%, rgba(127,52,137,0.5018601190476191) 53%, rgba(154,147,151,0.11810661764705888) 100%)'
        },
    };
    Modal.setAppElement('#root');
    let subtitle;
    let openModal = () => {
        setIsOpen(true);
    }

    let afterOpenModal = () => {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#fff';
        console.log(subtitle)
    }

    let closeModal = (e) => {
        setIsOpen(false);
    }
    let [accountName, setAccountName] = useState('');
    let [password, setPassword] = useState('');

    let handleLogin = () => {
        let account = {
            accountName,
            password
        }
        console.log(account)
    }

    let handleSetSubtitle = (sub) => {
        subtitle = sub;
    }
    return (
        <div className="login">
            <div className='login-top container'>
                <div className='row account-info px-3 px-md-5 pt-1 pt-md-4'>
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
                    <div className='col-md-6 col-12 d-md-flex justify-content-center flex-column flex-md-row pt-2'>
                        <div className='text-center p-2 title d-md-none'>Facebook</div>
                        <div className='register-main'>
                            <form>
                                <div className="form-outline mb-4">
                                    <input
                                        value={accountName}
                                        type="text"
                                        className="form-control py-3"
                                        placeholder='Email hoặc số điện thoại'
                                        onChange={(e) => setAccountName(e.target.value)}
                                    />
                                </div>

                                <div className="form-outline mb-4">
                                    <input
                                        value={password}
                                        type="password"
                                        className="form-control py-3"
                                        placeholder='Mật khẩu'
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>

                                <button
                                    type="button"
                                    className="btn btn-primary btn-block mb-4 form-control"
                                    onClick={() => handleLogin()}
                                >Đăng nhập</button>

                                <div className="text-center border-bottom forgot-pass">
                                    <span className='mb-3 d-inline-block'>Quên mật khẩu ?</span>
                                </div>
                                <div className='text-center'>
                                    <button type='button' className='btn btn-success btn-block mt-4 mb-2' onClick={openModal}>Tạo tài khoản mới</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className='row-6'></div>
            </div>

            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
                shouldCloseOnOverlayClick={false}
                closeTimeoutMS={1000}
                overlayclassName="Overlay"
            >
                <ContentModalLogin
                    handleSetSubtitle={handleSetSubtitle}
                    closeModal={closeModal}
                />
            </Modal >
        </div >
    )
}

export default Login;