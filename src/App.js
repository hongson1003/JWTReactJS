import './App.scss';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import AppRoutes from './routes/AppRoutes';
import 'bootstrap/scss/bootstrap.scss';
import Navigator from './Component/Navigator';

const App = () => {
  return (
    <div className="App color-change">
      <Router>
        <div className='header'>
          <Navigator />
        </div>
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

    </div >
  );
}

export default App;
