import * as postsActionTypes from '../../actions/posts/types';
import * as postActionTypes from '../../actions/post/types';

const initialState = {
  isFetchingPost: true,
  hasErrorOnFetchPost: false,
  fetchPostErrorMessage: '',

  isFetchingPosts: false,
  hasErrorOnFetchPosts: false,
  fetchPostsErrorMessage: '',

  isDeletingPost: false,
  hasErrorOnDeletePost: false,
  deletePostErrorMessage: '',

  isCreatingPost: false,
  hasErrorCreatePost: false,
  createPostErrorMessage: '',
};

const httpReducer = (state = initialState, action) => {
  switch (action.type) {
    case postsActionTypes.FETCH_POSTS:
      return {
        ...state,
        isFetchingPosts: true,
      };

    case postsActionTypes.RECEIVE_POSTS:
      return {
        ...state,
        posts: action.payload,
        isFetchingPosts: false,
      };

    case postsActionTypes.ERROR_ON_FETCH_POSTS:
      return {
        ...state,
        isFetchingPosts: false,
        hasErrorOnFetchPosts: true,
        fetchPostsErrorMessage: action.payload.message,
      };

    case postActionTypes.CREATE_POST_REQUEST:
      return {
        ...state,
        isCreatingPost: true,
      };

    case postActionTypes.SUCCESS_CREATE_POST:
      return {
        ...state,
        isCreatingPost: false,
      };

    case postActionTypes.ERROR_CREATE_POST:
      return {
        ...state,
        isCreatingPost: false,
        hasErrorCreatePost: true,
        createPostErrorMessage: action.payload.message,
      };

    case postActionTypes.FETCH_POST_BY_ID:
      return {
        ...state,
        isFetchingPost: true,
        hasErrorOnFetchPost: false,
      };

    case postActionTypes.RECEIVE_POST_BY_ID:
      return {
        ...state,
        isFetchingPost: false,
        hasErrorOnFetchPost: false,
      };

    case postActionTypes.ERROR_ON_FETCH_POST_BY_ID:
      return {
        ...state,
        isFetchingPost: false,
        hasErrorOnFetchPost: true,
        fetchPostErrorMessage: action.payload,
      };

    case postActionTypes.SUCCESS_DELETE_POST_BY_ID:
      return {
        ...state,
        isDeletingPost: false,
      };

    case postActionTypes.DELETE_POST_BY_ID:
      return {
        ...state,
        isDeletingPost: true,
      };

    default:
      return state;
  }
};

export default httpReducer;
