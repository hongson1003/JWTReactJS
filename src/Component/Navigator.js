import './Navigator.scss'
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import appAction from '../redux/actions/appAction';
import { useHistory } from 'react-router-dom';
let Navigator = () => {
    let state = useSelector(state => state.appReducer);
    let dispatch = useDispatch();
    let history = useHistory();
    let handleLogOut = () => {
        dispatch(appAction.logout());
        history.push('/login');
    }
    return (
        <>
            {
                state.isLogin === true &&
                <div className="topnav d-flex justify-content-between">
                    <div>
                        <NavLink activeClassName='active' to="/users">Users</NavLink>
                        <NavLink activeClassName='active' to="/project">Project</NavLink>
                    </div>
                    <div className='d-flex justify-content-center align-items-center'>
                        <i className="fa fa-sign-out font-weight-bold font-logout" aria-hidden="true"
                            onClick={handleLogOut}
                        ></i>
                    </div>
                </div >
            }
        </>
    )
}

export default Navigator;