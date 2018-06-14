import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { callAPIMiddleware } from './middleware_async_actions';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = () => {
  const middlewares = [thunk, callAPIMiddleware];
  return createStore(rootReducer, composeEnhancers(applyMiddleware(...middlewares)));
};

export default configureStore;
