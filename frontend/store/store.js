import { createStore } from 'redux';
import rootReducer from '../reducers/root_reducer';
import MasterMiddleware from '../middleware/master_middleware';



const configureStore = (preloadedState = {}) => (
  createStore(
    rootReducer,
    preloadedState,
    MasterMiddleware
  )
);



export default configureStore;
