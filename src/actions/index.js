import * as actionTypes from './actionTypes';
import { getAllCategories, getPosts } from '../api/ReadableAPI';

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

const fetchPosts = () => async (dispatch) => {
  dispatch(requestPosts());
  try {
    const response = await getPosts();
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

export {
  fetchCategories,
  requestCategories,
  receiveCategories,
  errorOnFetchCategories,
  fetchPosts,
};
