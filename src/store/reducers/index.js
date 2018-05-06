import { combineReducers } from 'redux';
import categoriesReducer from './categories';
import postsReducer from './posts';
import commentsReducer from './comments';
import httpReducer from './http';

const rootReducer = combineReducers({
  categoriesReducer,
  postsReducer,
  commentsReducer,
  httpReducer,
});

export default rootReducer;
