import * as postsActionTypes from '../../actions/posts/types';
import * as postActionTypes from '../../actions/post/types';

const initialState = {
  posts: [],
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case postsActionTypes.RECEIVE_POSTS:
      return {
        ...state,
        posts: action.payload,
      };

    case postActionTypes.SUCCESS_CREATE_POST:
      return {
        ...state,
        posts: [...state.posts, action.payload],
        isCreatingPost: false,
      };

    case postActionTypes.RECEIVE_POST_BY_ID:
      return {
        ...state,
        posts: action.payload,
        isFetchingPost: false,
      };

    case postActionTypes.UPDATE_POST:
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

    case postActionTypes.SUCCESS_DELETE_POST_BY_ID:
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
