import * as actionTypes from '../actionTypes';
import { getCommentsByPostId } from '../../../api/ReadableAPI';

const fetchCommentsByPostId = id => async (dispatch) => {
  dispatch(requestComments());
  try {
    const response = await getCommentsByPostId(id);
    dispatch(receiveComments(response));
    dispatch(sortCommentsByFilter('MOST_RECENT'));
  } catch (error) {
    dispatch(errorOnFetchComments(error));
  }
};

const requestComments = () => ({
  type: actionTypes.FETCH_COMMENTS_BY_POST_ID,
});

const receiveComments = payload => ({
  type: actionTypes.RECEIVE_COMMENTS_BY_POST_ID,
  payload,
});

const errorOnFetchComments = payload => ({
  type: actionTypes.ERROR_ON_FETCH_COMMENTS,
  payload,
});

const sortCommentsByFilter = filter => ({
  type: actionTypes.SORT_COMMENTS,
  filter,
});

export { fetchCommentsByPostId, sortCommentsByFilter };
