import { combineReducers } from 'redux';
import categoriesReducer from './categories';
import postsReducer from './posts';
import commentsReducer from './comments';

const rootReducer = combineReducers({
  categoriesReducer,
  postsReducer,
  commentsReducer,
});

export default rootReducer;
