import { useHistory } from "react-router-dom";
const Home = (props) => {
    let history = useHistory();

    let handleRedirectLogin = () => {
        history.push('/login');
    }
    return (
        <>
            <h2 className="text-center">Home Page</h2>
            <button className="btn btn-secondary px-5 py-3 d-block mx-auto" onClick={() => handleRedirectLogin()}>Đăng nhập</button>
        </>

    )
}

export default Home;