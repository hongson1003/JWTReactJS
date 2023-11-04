
let ContentModalConfirmDelete = (props) => {
    let { closeModal, handleDeleteUser } = props;

    return (
        <>
            <div className='border-bottom p-3 gradient-danger' >
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
                                            <div className="col-12">
                                                <h4>Bạn có chắc chắn muốn xóa người dùng này</h4>
                                            </div>
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
                    onClick={(e) => {
                        handleDeleteUser();
                        closeModal(e)
                    }}
                >Xác nhận</button>
                <button onClick={(e) => closeModal(e)} className='btn btn-danger'>Hủy bỏ</button>
            </footer>
        </>
    )
}

export default ContentModalConfirmDelete;