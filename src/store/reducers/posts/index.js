import * as actionTypes from '../../actions/actionTypes';

const initialState = {
  posts: [],
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.RECEIVE_POSTS:
      return {
        ...state,
        posts: action.payload,
      };

    case actionTypes.SUCCESS_CREATE_POST:
      return {
        ...state,
        posts: [...state.posts, action.payload],
        isCreatingPost: false,
      };

    case actionTypes.RECEIVE_POST_BY_ID:
      return {
        ...state,
        posts: action.payload,
        isFetchingPost: false,
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

    default:
      return state;
  }
};

export default postsReducer;
