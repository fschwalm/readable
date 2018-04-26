import * as actionTypes from '../../actions/actionTypes';

const initialState = {
  isFetchingposts: false,
  hasErrorOnFetchposts: false,
  fetchpostsErrorMessage: '',
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

    case actionTypes.UPDATE_POST_VOTE_COUNT:
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

    default:
      return state;
  }
};

export default postsReducer;
