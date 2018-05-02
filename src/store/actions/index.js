import * as actionTypes from './actionTypes';
import {
  getAllCategories,
  getPosts,
  upVotePost,
  getAllPostsByCategory,
} from '../../api/ReadableAPI';

const fetchCategories = () => async (dispatch) => {
  dispatch(requestCategories());
  try {
    const response = await getAllCategories();
    dispatch(receiveCategories(response));
  } catch (error) {
    dispatch(errorOnFetchCategories(error));
  }
};

const requestCategories = () => ({
  type: actionTypes.FETCH_CATEGORIES,
});

const receiveCategories = payload => ({
  type: actionTypes.RECEIVE_CATEGORIES,
  payload,
});

const errorOnFetchCategories = payload => ({
  type: actionTypes.ERROR_ON_FETCH_CATEGORIES,
  payload,
});

const fetchPosts = category => async (dispatch) => {
  dispatch(requestPosts());
  try {
    let response;
    if (category === 'all') {
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

const updatePostVoteCount = post => ({
  type: actionTypes.UPDATE_POST_VOTE_COUNT,
  post,
});

const upVotebyPostId = id => async (dispatch) => {
  // dispatch(requestPosts());
  try {
    const response = await upVotePost(id);
    dispatch(updatePostVoteCount(response));
  } catch (error) {
    dispatch(errorOnFetchPosts(error));
  }
};
export {
  fetchCategories,
  requestCategories,
  receiveCategories,
  errorOnFetchCategories,
  fetchPosts,
  upVotebyPostId,
};
