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

  posts: [],
};

const postsReducer = (state = initialState, action) => {
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

    case actionTypes.FETCH_POST_BY_ID:
      return {
        ...state,
        isFetchingPost: true,
      };

    case actionTypes.RECEIVE_POST_BY_ID:
      return {
        ...state,
        posts: action.payload,
        isFetchingPost: false,
      };

    case actionTypes.ERROR_ON_FETCH_POST_BY_ID:
      return {
        ...state,
        isFetchingPost: false,
        hasErrorOnFetchPost: true,
        fetchPostErrorMessage: action.payload.message,
      };

    case actionTypes.UPDATE_POST:
      return {
        ...state,
        posts: state.posts.map((post) => {
          if (post.id !== action.post.id) {
            return post;
          }
          return {
            ...post,
            ...action.post,
          };
        }),
      };

    case actionTypes.SUCCESS_DELETE_POST_BY_ID:
      return {
        ...state,
        isDeletingPost: false,
        posts: state.posts.filter(p => p.id !== action.payload),
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

export default postsReducer;
