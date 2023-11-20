import './Navigator.scss'
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import appAction from '../redux/actions/appAction';
import { useHistory } from 'react-router-dom';
import appService from '../Services/appService';

let Navigator = () => {
    let state = useSelector(state => state.appReducer);
    let dispatch = useDispatch();
    let history = useHistory();
    let handleLogOut = async () => {
        try {
            let response = await appService.logout();
            if (response.errCode === 0) {
                dispatch(appAction.logout());
                history.push('/login');
            }
        } catch (e) {
            console.log(e);
        }
    }
    return (
        <>
            {
                state.isLogin === true && window.location.pathname !== '/home' &&
                <div className="topnav d-flex justify-content-between">
                    <div>
                        <NavLink activeClassName='active' to="/users">Users</NavLink>
                        <NavLink activeClassName='active' to="/roles">Roles</NavLink>
                        <NavLink activeClassName='active' to="/group-role">Group-Role</NavLink>
                    </div>
                    <div className='d-flex justify-content-center align-items-center m-0'>
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