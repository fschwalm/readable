import * as actionTypes from './types';
import {
  upVotePost,
  downVotePost,
  getPostById,
  deletePost,
  addPost,
  editPost,
} from '../../../api/ReadableAPI';

const editPostAction = post => async (dispatch) => {
  dispatch(requestEditPost());
  try {
    const response = await editPost(post);
    dispatch(updatePost(response));
    dispatch(successfulEditPost);
  } catch (error) {
    dispatch(errorOnEditPost(error));
  }
};

const requestEditPost = () => ({
  type: actionTypes.EDIT_POST_REQUEST,
});

const successfulEditPost = post => ({
  type: actionTypes.SUCCESS_EDIT_POST,
  payload: post,
});

const errorOnEditPost = error => ({
  type: actionTypes.ERROR_EDIT_POST,
  error,
});

const createPost = post => async (dispatch) => {
  dispatch(requestCreatePost());
  try {
    const response = await addPost(post);
    dispatch(successfulCreatePost(response));
  } catch (error) {
    dispatch(errorOnCreatePost(error));
  }
};

const requestCreatePost = () => ({
  type: actionTypes.CREATE_POST_REQUEST,
});

const successfulCreatePost = post => ({
  type: actionTypes.SUCCESS_CREATE_POST,
  payload: post,
});

const errorOnCreatePost = error => ({
  type: actionTypes.ERROR_CREATE_POST,
  error,
});

const deletePostById = id => async (dispatch) => {
  dispatch(requestDeletePostById());
  try {
    await deletePost(id);
    dispatch(successfulDeletePostById(id));
  } catch (error) {
    dispatch(errorOnDeletePostById(error));
  }
};

const requestDeletePostById = () => ({
  type: actionTypes.DELETE_POST_BY_ID,
});

const successfulDeletePostById = id => ({
  type: actionTypes.SUCCESS_DELETE_POST_BY_ID,
  payload: id,
});

const errorOnDeletePostById = error => ({
  type: actionTypes.ERROR_ON_DELETE_POST_BY_ID,
  error,
});

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

export {
  incrementVotePost,
  decrementVotePost,
  fetchPostById,
  deletePostById,
  createPost,
  editPostAction,
};
