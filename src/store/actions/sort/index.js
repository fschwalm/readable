import * as actionTypes from '../actionTypes';

const setPostSortMode = filter => ({
  type: actionTypes.SET_SORT_MODE_POSTS,
  filter,
});

const setCommentSortMode = filter => ({
  type: actionTypes.SET_SORT_MODE_COMMENTS,
  filter,
});

export { setPostSortMode, setCommentSortMode };
