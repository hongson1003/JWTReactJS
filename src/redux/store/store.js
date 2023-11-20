// Trong tệp store.js
import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/rootReducer';
import authMiddleware from '../../middleware/authMiddleware';

const store = createStore(rootReducer, applyMiddleware(authMiddleware));

// Dispatch một action để thông báo rằng Redux store đã được khởi động
store.dispatch({ type: 'REDUX_INITIALIZED' });

export default store;
