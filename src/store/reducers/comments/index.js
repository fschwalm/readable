import * as actionTypes from '../../actions/actionTypes';

const initialState = {
  isFetchingComments: false,
  hasErrorOnFetchComments: false,
  fetchCommentsErrorMessage: '',
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

    default:
      return state;
  }
};

export default commentsReducer;
