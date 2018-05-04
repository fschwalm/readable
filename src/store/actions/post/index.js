import * as actionTypes from '../actionTypes';
import { upVotePost, downVotePost, getPostById } from '../../../api/ReadableAPI';

const fetchPostById = id => async (dispatch) => {
  dispatch(requestPostById());
  try {
    const response = await getPostById(id);
    dispatch(receivePostById(response));
  } catch (error) {
    dispatch(errorOnFethPostById(error));
  }
};

const requestPostById = () => ({
  type: actionTypes.FETCH_POST_BY_ID,
});

const receivePostById = post => ({
  type: actionTypes.RECEIVE_POST_BY_ID,
  payload: [post],
});

const errorOnFethPostById = error => ({
  type: actionTypes.ERROR_ON_FETCH_POST_BY_ID,
  error,
});

const incrementVotePost = id => async (dispatch) => {
  dispatch(requestIncrementVotePost());
  try {
    const response = await upVotePost(id);
    dispatch(updatePost(response));
  } catch (error) {
    // dispatch(errorOnFetchPosts(error));
  }
};

const requestIncrementVotePost = () => ({
  type: actionTypes.REQUEST_INCREMENT_VOTE_POST,
});

const decrementVotePost = id => async (dispatch) => {
  dispatch(requestDecrementVotePost());
  try {
    const response = await downVotePost(id);
    dispatch(updatePost(response));
  } catch (error) {
    // dispatch(errorOnFetchPosts(error));
  }
};

const requestDecrementVotePost = () => ({
  type: actionTypes.REQUEST_DECREMENT_VOTE_POST,
});

const updatePost = post => ({
  type: actionTypes.UPDATE_POST,
  post,
});

export { incrementVotePost, decrementVotePost, fetchPostById };
