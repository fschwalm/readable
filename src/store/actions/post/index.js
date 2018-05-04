import * as actionTypes from '../actionTypes';
import { upVotePost, downVotePost } from '../../../api/ReadableAPI';

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

export { incrementVotePost, decrementVotePost };
