import { useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';
import {
    Route,
} from "react-router-dom";
import { useEffect } from "react";

let PrivateRoute = (props) => {
    let state = useSelector(state => state.appReducer);
    let history = useHistory();
    useEffect(() => {
        if (window.location.pathname !== '/home') {
            if (state.isLogin === false && props.path !== "/home")
                history.push('/login');
        }
    }, [state, history, props.path])
    return (
        <Route path={props.path}>
            {props.component}
        </Route>
    )
}

export default PrivateRoute;