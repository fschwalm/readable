import * as actionTypes from '../../actions/sort/types';
import * as SortTypes from '../../../utils/sort/types';

const initialState = {
  posts: SortTypes.MOST_RECENT,
  comments: SortTypes.MOST_RECENT,
};

const sortReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_SORT_MODE_POSTS:
      return {
        ...state,
        posts: action.filter,
      };

    case actionTypes.SET_SORT_MODE_COMMENTS:
      return {
        ...state,
        comments: action.filter,
      };

    default:
      return state;
  }
};

export default sortReducer;
