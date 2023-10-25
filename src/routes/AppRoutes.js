import {
    Route,
    Redirect
} from "react-router-dom";
import Home from '../Container/Client/Home';
import Login from "../Component/Login";
import ManageUsers from "../Container/System/ManageUsers";
import ManageProject from "../Container/System/ManageProject";
import PrivateRoute from "../Component/Authenticated/PrivateRoute";
const AppRoutes = () => {
    return (
        <>
            <Route exact path="/">
                <Redirect to="/home" />
            </Route>
            <Route path="/home">
                <Home />
            </Route>
            <Route path="/login">
                <Login />
            </Route>
            {/* <Route path="/users">
                <ManageUsers />
            </Route>
            <Route path="/project">
                <ManageProject />
            </Route> */}
            <PrivateRoute path="/users" component={<ManageUsers />}/>
            <PrivateRoute path="/project" component={ <ManageProject />} />
        </>
    )
}

export default AppRoutes;