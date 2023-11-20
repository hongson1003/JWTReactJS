import { useSelector } from 'react-redux';


const UseAuthenticated = () => {
    return useSelector((state) => state.appReducer.token);
}

export default UseAuthenticated;