import { combineReducers } from 'redux';
import categoriesReducer from './categories';
import postsReducer from './posts';

const rootReducer = combineReducers({
  categoriesReducer,
  postsReducer,
});

export default rootReducer;
