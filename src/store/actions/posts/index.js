import * as actionTypes from '../actionTypes';
import { getPosts, getAllPostsByCategory } from '../../../api/ReadableAPI';

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
    // TODO: How i can get a selected category?
    dispatch(sortPostByFilter('MOST_RECENT'));
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

const sortPostByFilter = filter => ({
  type: actionTypes.SORT_POSTS,
  filter,
});

export { fetchPosts, sortPostByFilter };
