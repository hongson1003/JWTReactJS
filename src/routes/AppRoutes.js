import {
    Route,
    Redirect
} from "react-router-dom";
import Home from '../Container/Client/Home';
import Login from "../Component/Login";
import ManageUsers from "../Container/System/ManageUsers";
import ManageGroupRole from "../Container/System/ManageGroupRole";
import PrivateRoute from "../Component/Authenticated/PrivateRoute";
import Navigator from "../Component/Navigator";
import ManageRoles from '../Container/System/ManageRoles';

const AppRoutes = () => {
    return (
        <>
            <div className='header'>
                <Navigator />
            </div>
            <Route exact path="/">
                <Redirect to="/home" />
            </Route>
            <Route path="/home">
                <Home />
            </Route>
            <Route path="/login">
                <Login />
            </Route>
            <Route path="/users">
                <PrivateRoute path="/users" component={<ManageUsers />} />
            </Route>
            <Route path="/roles">
                <PrivateRoute path="/roles" component={<ManageRoles />} />
            </Route>
            <Route path="/group-role">
                <PrivateRoute path="/group-role" component={<ManageGroupRole />} />
            </Route>



        </>
    )
}

export default AppRoutes;