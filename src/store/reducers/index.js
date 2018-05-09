import { combineReducers } from 'redux';
import categoriesReducer from './categories';
import postsReducer from './posts';
import commentsReducer from './comments';
import httpReducer from './http';
import sortReducer from './sort';

const rootReducer = combineReducers({
  categoriesReducer,
  postsReducer,
  commentsReducer,
  httpReducer,
  sortReducer,
});

export default rootReducer;
