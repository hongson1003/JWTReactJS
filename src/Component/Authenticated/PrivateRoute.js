import { useSelector } from "react-redux";
import { Redirect } from 'react-router-dom';
import {
    Route,
} from "react-router-dom";

let PrivateRoute = (props) => {
    let state = useSelector(state => state.appReducer);
    return (
        <Route path={props.path}>
            {state.isLogin ? props.component : <Redirect to="/login" />}
        </Route>
    )
}

export default PrivateRoute;