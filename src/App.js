import './App.scss';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import AppRoutes from './routes/AppRoutes';
import 'bootstrap/scss/bootstrap.scss';
import { useSelector } from 'react-redux'
import { Rings } from 'react-loader-spinner'

const App = () => {
  let state = useSelector(state => state.appReducer);
  return (
    <div className="App color-change">
      {state.isLogin === -1 ?
        <div className='loading-container'>
          <Rings
            height="120"
            width="120"
            color="#0866FF"
            radius="6"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel="rings-loading"
          />
          <p>Loading data...</p>
        </div>
        :
        <Router>
          <div className='main'>
            <Switch>
              <AppRoutes />
            </Switch>
          </div>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </Router>
      }

    </div >
  );
}

export default App;
