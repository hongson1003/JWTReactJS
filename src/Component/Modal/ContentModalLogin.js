import { useState } from "react";

let ContentModalLogin = (props) => {
    console.log(props)
    let { closeModal, handleSetSubtitle } = props;
    return (
        <>

            <div className='d-flex justify-content-between border-bottom pb-2'>
                <h2 className='font-weight-bold' ref={(_subtitle) => (handleSetSubtitle(_subtitle))}>Tạo tài khoản</h2>
                <button className='login-close d-flex justify-content-center align-items-center' onClick={closeModal}><i className="fa fa-window-close btn-btn-dark px-2 text-danger" aria-hidden="true"></i></button>
            </div>
            <div className='border-bottom p-3 gradient-custom'>

                <section className="">
                    <div className="">
                        <div className="row justify-content-around align-items-center">
                            <div className="col-12">
                                <div
                                    className="card shadow-2-strong card-registration"
                                    style={{ borderRadius: '0' }}
                                >
                                    <div className="card-body px-2"
                                        style={{
                                            backgroundImage: `url(https://png.pngtree.com/thumb_back/fw800/background/20230613/pngtree-beautiful-anime-girl-in-flower-crown-image_2899145.jpg)`,
                                            backgroundSize: 'cover'
                                        }}
                                    >
                                        <h3 className="myfont text-center text-light text-uppercase mb-4">Registration Form</h3>
                                        <form>
                                            <div className="row d-flex justify-content-around">
                                                <div className="col-5 mb-3">
                                                    <div className="form-outline">
                                                        <input type="text" id="firstName" className="form-control form-control-lg" placeholder='First Name' />
                                                    </div>
                                                </div>
                                                <div className="col-5 mb-3">

                                                    <div className="form-outline">
                                                        <input type="text" id="lastName" className="form-control form-control-lg" placeholder='Last Name' />
                                                    </div>

                                                </div>
                                            </div>
                                            <div className="row d-flex justify-content-around">
                                                <div className="col-5 mb-3">
                                                    <div className="form-outline">
                                                        <input type="text" id="address" className="form-control form-control-lg" placeholder='Address' />
                                                    </div>
                                                </div>
                                                <div className="col-5 mb-3">

                                                    <div className="form-outline">
                                                        <input type="text" id="phone" className="form-control form-control-lg" placeholder='Phone' />
                                                    </div>

                                                </div>
                                            </div>

                                            <div className="row d-flex justify-content-around">
                                                <div className="col-5 mb-3">
                                                    <input type="email" id="emailAddress" className="form-control form-control-lg" placeholder='Email' />
                                                </div>
                                                <div className="col-5 pb-3">
                                                    <input type="password" id="password" className="form-control form-control-lg" placeholder='Password' />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-5 mx-5 mb-3">
                                                    <h6 className="mb-2">Sex: </h6>
                                                    <div className=''>
                                                        <div className="form-check form-check-inline">
                                                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="femaleGender"
                                                                value="option1" defaultChecked />
                                                            <label className="form-check-label" htmlFor="femaleGender">Female</label>
                                                        </div>

                                                        <div className="form-check form-check-inline">
                                                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="maleGender"
                                                                value="option2" />
                                                            <label className="form-check-label" htmlFor="maleGender">Male</label>
                                                        </div>
                                                    </div>


                                                </div>
                                            </div>

                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
            <footer className='mt-2 d-flex justify-content-end'>
                <button className='btn btn-success mx-2'>Tạo mới</button>
                <button onClick={(e) => closeModal(e)} className='btn btn-warning'>Hủy bỏ</button>
            </footer>
        </>
    )
}

export default ContentModalLogin;