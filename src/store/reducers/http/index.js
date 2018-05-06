import * as actionTypes from '../../actions/actionTypes';

const initialState = {
  isFetchingPost: false,
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
    case actionTypes.FETCH_POSTS:
      return {
        ...state,
        isFetchingPosts: true,
      };

    case actionTypes.RECEIVE_POSTS:
      return {
        ...state,
        posts: action.payload,
        isFetchingPosts: false,
      };

    case actionTypes.ERROR_ON_FETCH_POSTS:
      return {
        ...state,
        isFetchingPosts: false,
        hasErrorOnFetchPosts: true,
        fetchPostsErrorMessage: action.payload.message,
      };

    case actionTypes.CREATE_POST_REQUEST:
      return {
        ...state,
        isCreatingPost: true,
      };

    case actionTypes.SUCCESS_CREATE_POST:
      return {
        ...state,
        isCreatingPost: false,
      };

    case actionTypes.ERROR_CREATE_POST:
      return {
        ...state,
        isCreatingPost: false,
        hasErrorCreatePost: true,
        createPostErrorMessage: action.payload.message,
      };

    case actionTypes.FETCH_POST_BY_ID:
      return {
        ...state,
        isFetchingPost: true,
      };

    case actionTypes.RECEIVE_POST_BY_ID:
      return {
        ...state,
        isFetchingPost: false,
      };

    case actionTypes.ERROR_ON_FETCH_POST_BY_ID:
      return {
        ...state,
        isFetchingPost: false,
        hasErrorOnFetchPost: true,
        fetchPostErrorMessage: action.payload.message,
      };

    case actionTypes.SUCCESS_DELETE_POST_BY_ID:
      return {
        ...state,
        isDeletingPost: false,
      };

    case actionTypes.DELETE_POST_BY_ID:
      return {
        ...state,
        isDeletingPost: true,
      };

    default:
      return state;
  }
};

export default httpReducer;
