import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import { Provider } from 'react-redux';
import store from './redux/store/store';
import LoadingView from './Component/LoadingView';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { persistor } from './redux/store/store';


ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={<LoadingView />} persistor={persistor}>
      <App />
    </PersistGate>

  </Provider>,
  document.getElementById('root')
);
