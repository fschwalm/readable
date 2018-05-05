import * as actionTypes from '../../actions/actionTypes';

const initialState = {
  isFetchingComments: false,
  hasErrorOnFetchComments: false,
  fetchCommentsErrorMessage: '',

  isDeletingComment: false,
  hasErrorOnDeleteComment: false,
  deleteCommentErrorMessage: '',

  comments: [],
};

const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_COMMENTS_BY_POST_ID:
      return {
        ...state,
        isFetchingComments: true,
      };

    case actionTypes.RECEIVE_COMMENTS_BY_POST_ID:
      return {
        ...state,
        comments: action.payload,
        isFetchingComments: false,
      };

    case actionTypes.ERROR_ON_FETCH_COMMENTS:
      return {
        ...state,
        isFetchingComments: false,
        hasErrorOnFetchComments: true,
        fetchCommentsErrorMessage: action.payload.message,
      };

    case actionTypes.UPDATE_COMMENT:
      return {
        ...state,
        comments: state.comments.map((comment) => {
          if (comment.id !== action.comment.id) {
            return comment;
          }
          return {
            ...comment,
            ...action.comment,
          };
        }),
      };

    case actionTypes.SUCCESS_DELETE_COMMENT_BY_ID:
      return {
        ...state,
        isDeletingComment: false,
        comments: state.comments.filter(c => c.id !== action.payload),
      };

    case actionTypes.DELETE_COMMENT_BY_ID:
      return {
        ...state,
        isDeletingComment: true,
      };

    default:
      return state;
  }
};

export default commentsReducer;
