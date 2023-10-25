import { useHistory } from "react-router-dom";
import './Home.scss';
import { useSelector, useDispatch } from "react-redux";
import { addItem, deleteItem } from "../../redux/actions/cartAction";


const Home = (props) => {
    let history = useHistory();
    let handleRedirectLogin = () => {
        history.push('/login');
    }
    const state = useSelector((state) => state.cartReducer);
    const dispatch = useDispatch();
    return (
        <>
            <div className="home">
                <h2 className="text-center">Home Page</h2>
                <button className="btn btn-secondary px-5 py-3 d-block mx-auto" onClick={() => handleRedirectLogin()}>Đăng nhập</button>
                <div className="cart">
                    <h2>Number of items in Cart: {state.numOfItems}</h2>
                    <button className="green"
                        onClick={() => {
                            dispatch(addItem());
                        }}
                    >Add Item to Cart</button>
                    <button className="red"
                        disabled={state.numOfItems > 0 ? false : true}
                        onClick={() => {
                            dispatch(deleteItem());
                        }}
                    >Remove Item from Cart</button>
                </div>
            </div>
        </>

    )
}

export default Home;