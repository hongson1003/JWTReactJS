import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import './ManageUsers.scss'
import adminService from '../../Services/adminService';
import ContentModalCreateNewUser from '../../Component/Modal/ContentModalCreateNewUser';
import Modal from 'react-modal';
import { toast } from 'react-toastify';
import ContentModalConfirmDelete from '../../Component/Modal/ContentModalConfirmDelete';
import Action from '../../utils/Action';
const ManageUsers = () => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [isConfirm, setIsconfirm] = useState(false);
    const [userDelete, setUserDelete] = useState({});
    const [userEdit, setUserEdit] = useState({});
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            borderRadius: '15px',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };
    const [status, setStatus] = useState('none');

    let handleSetSubtitle = (sub) => {
        subtitle = sub;
    }

    Modal.setAppElement('#root');
    let subtitle;
    let openModal = () => {
        setIsOpen(true);
        setStatus(Action.CREATE);
    }

    let afterOpenModal = () => {
        subtitle.style.color = '#333';
    }

    let closeModal = (e) => {
        setIsOpen(false);
        setIsconfirm(false);
    }

    const itemsPerPage = 3;
    const [itemOffset, setItemOffset] = useState(0);
    const [items, setItems] = useState([]);
    const [totalRows, setTotalRows] = useState(0);

    // Invoke when user click to request another page.
    const handlePageClick = async (event) => {
        const newOffset = (event.selected * itemsPerPage);
        await setItemOffset(newOffset);
    };


    // Sử dụng handleFetchUser trong useEffect
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                let response = await adminService.getUserWithPage(itemsPerPage, itemOffset);
                await setItems(response.data.data.users);
                await setTotalRows(Math.ceil(response.data.data.rows / itemsPerPage));
            } catch (e) {
                console.log(e);
            }
        }
        fetchUsers();
    }, [itemOffset, totalRows]);

    let handleDeleteUser = async () => {
        let response = await adminService.deleteUserWithID(userDelete.UserID);
        if (response.data.errCode === 0) {
            setTotalRows(totalRows - 1);
            toast.success('Xóa người dùng thành công');
        }
    }
    let openModalDeleteUser = (id) => {
        setIsconfirm(true);
    }

    let handleCreateNewUser = async (user) => {
        let response = await adminService.createNewUser(user);
        return response;
    }
    let openEdit = () => {
        setIsOpen(true);
        setStatus(Action.EDIT);
    }

    let handleEditUser = async (data) => {

    }
    return (
        <>
            <div className="manage-users">
                <h1 className="text-center">Quản lý người dùng</h1>
                <div className='tacvu'>
                    <div className='d-flex justify-content-center align-items-center p-2 rounded-2 refesh'
                        style={{ backgroundColor: 'green' }}
                        onClick={() => window.location.reload()}
                    >
                        <i className="fa fa-refresh text-light" aria-hidden="true" />
                        <span style={{ fontWeight: 'bold' }} className='px-2 text-light'>Refesh</span>
                    </div>
                    <button className='btn btn-primary mx-3'
                        onClick={() => openModal()}
                    >Thêm mới người dùng</button>
                </div>
                {items && items.length > 0 &&
                    <table className='mb-3'>
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>Tên</th>
                                <th className='d-none d-sm-table-cell'>Email</th>
                                <th className='d-none d-sm-table-cell'>Địa chỉ</th>
                                <th>Group</th>
                                <th>Tác vụ</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                items.map((item, index) => (
                                    <tr key={item.userID}>
                                        <td>{itemOffset + index + 1}</td>
                                        <td>{item.userName}</td>
                                        <td className='d-none d-sm-table-cell'>{item.email}</td>
                                        <td className='d-none d-sm-table-cell'>{item.address}</td>
                                        <td>{item.name}</td>
                                        <td>
                                            <button style={{ backgroundColor: 'violet' }} className='btn mx-3'
                                                onClick={() => {
                                                    openEdit();
                                                    setUserEdit(item);
                                                }}
                                            ><i className="fa fa-pencil" aria-hidden="true"></i></button>
                                            <button className='btn btn-danger'
                                                onClick={() => {
                                                    setUserDelete(item);
                                                    openModalDeleteUser(item.UserID)
                                                }}
                                            >
                                                <i className="fa fa-trash" aria-hidden="true"></i>
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                }
                <ReactPaginate
                    nextLabel="next >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={2}
                    marginPagesDisplayed={3}
                    pageCount={totalRows}
                    previousLabel="< previous"
                    pageClassName="page-item"
                    pageLinkClassName="page-link"
                    previousClassName="page-item"
                    previousLinkClassName="page-link"
                    nextClassName="page-item"
                    nextLinkClassName="page-link"
                    breakLabel="..."
                    breakClassName="page-item"
                    breakLinkClassName="page-link"
                    containerClassName="pagination"
                    activeClassName="active"
                    renderOnZeroPageCount={null}
                />

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
                className={'manageuser-modal'}
            >
                <ContentModalCreateNewUser
                    status={status}
                    handleSetSubtitle={handleSetSubtitle}
                    closeModal={closeModal}
                    handleCreateNewUser={handleCreateNewUser}
                    user={userEdit}
                />
            </Modal >

            <Modal
                isOpen={isConfirm}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
                shouldCloseOnOverlayClick={false}
                closeTimeoutMS={1000}
                overlayclassName="Overlay"
            // className={'modal-confirm'}
            >
                <ContentModalConfirmDelete
                    closeModal={closeModal}
                    user={userDelete}
                    handleDeleteUser={handleDeleteUser}
                />
            </Modal >
        </>

    )
}

export default ManageUsers;