import * as actionTypes from '../actionTypes';
import {
  getPosts,
  upVotePost,
  getAllPostsByCategory,
  downVotePost,
} from '../../../api/ReadableAPI';

const fetchPosts = category => async (dispatch) => {
  try {
    let response;
    if (category === 'all') {
      dispatch(requestPosts());
      response = await getPosts();
    } else {
      response = await getAllPostsByCategory(category);
    }
    dispatch(receivePosts(response));
  } catch (error) {
    dispatch(errorOnFetchPosts(error));
  }
};

const requestPosts = () => ({
  type: actionTypes.FETCH_POSTS,
});

const receivePosts = payload => ({
  type: actionTypes.RECEIVE_POSTS,
  payload,
});

const errorOnFetchPosts = payload => ({
  type: actionTypes.ERROR_ON_FETCH_POSTS,
  payload,
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

export { fetchPosts, incrementVotePost, decrementVotePost };
