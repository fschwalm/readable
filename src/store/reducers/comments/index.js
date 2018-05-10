import * as actionTypesComments from '../../actions/comments/types';
import * as actionTypesComment from '../../actions/comment/types';

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
    case actionTypesComments.FETCH_COMMENTS_BY_POST_ID:
      return {
        ...state,
        isFetchingComments: true,
      };

    case actionTypesComments.RECEIVE_COMMENTS_BY_POST_ID:
      return {
        ...state,
        comments: action.payload,
        isFetchingComments: false,
      };

    case actionTypesComments.ERROR_ON_FETCH_COMMENTS:
      return {
        ...state,
        isFetchingComments: false,
        hasErrorOnFetchComments: true,
        fetchCommentsErrorMessage: action.payload.message,
      };

    case actionTypesComment.UPDATE_COMMENT:
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

    case actionTypesComment.SUCCESS_DELETE_COMMENT_BY_ID:
      return {
        ...state,
        isDeletingComment: false,
        comments: state.comments.filter(c => c.id !== action.payload),
      };

    case actionTypesComment.DELETE_COMMENT_BY_ID:
      return {
        ...state,
        isDeletingComment: true,
      };

    case actionTypesComment.SUCCESS_CREATE_COMMENT:
      return {
        ...state,
        comments: [...state.comments, action.payload],
      };

    default:
      return state;
  }
};

export default commentsReducer;
