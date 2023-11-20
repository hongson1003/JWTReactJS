import checkJWT from "../utils/checkJWT";
import appAction from "../redux/actions/appAction";

const authMiddleware = (store) => (next) => (action) => {
    if (action.type === 'REDUX_INITIALIZED') {        // Redux store đã được khởi chạy, kiểm tra trạng thái đăng nhập ở đây
        checkJWT.checkJWTAndSetLoginStatus()
            .then((errCode) => {
                if (errCode === 0) {
                    setTimeout(() => {
                        store.dispatch(appAction.login());
                    }, 1500);
                } else {
                    store.dispatch(appAction.logout());
                }
            })
            .catch((error) => {
                console.log(error)
            });
    }
    return next(action);
};

export default authMiddleware;