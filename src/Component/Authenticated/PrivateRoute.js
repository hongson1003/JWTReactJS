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
        if (state.isLogin === false)
            history.push('/login');
    }, [state, history])
    console.log('path', props.path, 'component', props.component);
    return (
        <Route path={props.path}>
            {props.component}
        </Route>
    )
}

export default PrivateRoute;