import * as actionTypes from '../actionTypes';
import {
  upVoteComment,
  downVoteComment,
  deleteComment,
  addComment,
} from '../../../api/ReadableAPI';

const createComment = comment => async (dispatch) => {
  dispatch(requestCreateComment());
  try {
    const response = await addComment(comment);
    dispatch(successfulCreateComment(response));
  } catch (error) {
    dispatch(errorOnCreateComment(error));
  }
};

const requestCreateComment = () => ({
  type: actionTypes.CREATE_COMMENT_REQUEST,
});

const successfulCreateComment = comment => ({
  type: actionTypes.SUCCESS_CREATE_COMMENT,
  payload: comment,
});

const errorOnCreateComment = error => ({
  type: actionTypes.ERROR_CREATE_COMMENT,
  error,
});

const deleteCommentById = id => async (dispatch) => {
  dispatch(requestDeleteCommentById());
  try {
    await deleteComment(id);
    dispatch(successfulDeleteCommentById(id));
  } catch (error) {
    dispatch(errorOnDeleteCommentById(error));
  }
};

const requestDeleteCommentById = () => ({
  type: actionTypes.DELETE_COMMENT_BY_ID,
});

const successfulDeleteCommentById = id => ({
  type: actionTypes.SUCCESS_DELETE_COMMENT_BY_ID,
  payload: id,
});

const errorOnDeleteCommentById = error => ({
  type: actionTypes.ERROR_ON_DELETE_COMMENT_BY_ID,
  error,
});

const incrementVoteComment = id => async (dispatch) => {
  dispatch(requestIncrementComment());
  try {
    const response = await upVoteComment(id);
    dispatch(updateComment(response));
  } catch (error) {
    // dispatch error
  }
};

const requestIncrementComment = () => ({
  type: actionTypes.REQUEST_INCREMENT_VOTE_COMMENT,
});

const decrementVoteComment = id => async (dispatch) => {
  dispatch(requestDecrementVoteComment());
  try {
    const response = await downVoteComment(id);
    dispatch(updateComment(response));
  } catch (error) {
    // dispatch error
  }
};

const requestDecrementVoteComment = () => ({
  type: actionTypes.REQUEST_DECREMENT_VOTE_COMMENT,
});

const updateComment = comment => ({
  type: actionTypes.UPDATE_COMMENT,
  comment,
});

export { incrementVoteComment, decrementVoteComment, deleteCommentById, createComment };
