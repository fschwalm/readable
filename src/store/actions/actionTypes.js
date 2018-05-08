const FETCH_CATEGORIES = 'FETCH_CATEGORIES';
const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES';
const ERROR_ON_FETCH_CATEGORIES = 'ERROR_ON_FETCH_CATEGORIES';

const FETCH_POSTS = 'FETCH_POSTS';
const RECEIVE_POSTS = 'RECEIVE_POSTS';
const ERROR_ON_FETCH_POSTS = 'ERROR_ON_FETCH_POSTS';

const FETCH_POST_BY_ID = 'FETCH_POST_BY_ID';
const RECEIVE_POST_BY_ID = 'RECEIVE_POST_BY_ID';
const ERROR_ON_FETCH_POST_BY_ID = 'ERROR_ON_FETCH_POST_BY_ID';

const FETCH_COMMENTS_BY_POST_ID = 'FETCH_COMMENTS_BY_POST_ID';
const RECEIVE_COMMENTS_BY_POST_ID = 'RECEIVE_COMMENTS_BY_POST_ID';
const ERROR_ON_FETCH_COMMENTS = 'ERROR_ON_FETCH_COMMENTS';

const DELETE_POST_BY_ID = 'DELETE_POST_BY_ID';
const SUCCESS_DELETE_POST_BY_ID = 'SUCCESS_DELETE_POST_BY_ID';
const ERROR_ON_DELETE_POST_BY_ID = 'ERROR_ON_DELETE_POST_BY_ID';

const REQUEST_INCREMENT_VOTE_POST = 'REQUEST_INCREMENT_VOTE_POST';
const REQUEST_DECREMENT_VOTE_POST = 'REQUEST_DECREMENT_VOTE_POST';

const CREATE_POST_REQUEST = 'CREATE_POST_REQUEST';
const SUCCESS_CREATE_POST = 'SUCCESS_CREATE_POST';
const ERROR_CREATE_POST = 'ERROR_CREATE_POST';

const EDIT_POST_REQUEST = 'EDIT_POST_REQUEST';
const SUCCESS_EDIT_POST = 'SUCCESS_EDIT_POST';
const ERROR_EDIT_POST = 'ERROR_EDIT_POST';

const REQUEST_INCREMENT_VOTE_COMMENT = 'REQUEST_INCREMENT_VOTE_COMMENT';
const REQUEST_DECREMENT_VOTE_COMMENT = 'cREQUEST_DECREMENT_VOTE_COMMENT';

const DELETE_COMMENT_BY_ID = 'DELETE_COMMENT_BY_ID';
const SUCCESS_DELETE_COMMENT_BY_ID = 'SUCCESS_DELETE_COMMENT_BY_ID';
const ERROR_ON_DELETE_COMMENT_BY_ID = 'ERROR_ON_DELETE_COMMENT_BY_ID';

const CREATE_COMMENT_REQUEST = 'CREATE_COMMENT_REQUEST';
const SUCCESS_CREATE_COMMENT = 'SUCCESS_CREATE_COMMENT';
const ERROR_CREATE_COMMENT = 'ERROR_CREATE_COMMENT';

const UPDATE_POST = 'UPDATE_POST';
const UPDATE_COMMENT = 'UPDATE_COMMENT';

export {
  // categories
  FETCH_CATEGORIES,
  RECEIVE_CATEGORIES,
  ERROR_ON_FETCH_CATEGORIES,
  // posts
  FETCH_POSTS,
  RECEIVE_POSTS,
  ERROR_ON_FETCH_POSTS,
  // post
  UPDATE_POST,
  CREATE_POST_REQUEST,
  SUCCESS_CREATE_POST,
  ERROR_CREATE_POST,
  EDIT_POST_REQUEST,
  SUCCESS_EDIT_POST,
  ERROR_EDIT_POST,
  FETCH_POST_BY_ID,
  RECEIVE_POST_BY_ID,
  ERROR_ON_FETCH_POST_BY_ID,
  DELETE_POST_BY_ID,
  SUCCESS_DELETE_POST_BY_ID,
  ERROR_ON_DELETE_POST_BY_ID,
  REQUEST_INCREMENT_VOTE_POST,
  REQUEST_DECREMENT_VOTE_POST,
  // comments
  FETCH_COMMENTS_BY_POST_ID,
  RECEIVE_COMMENTS_BY_POST_ID,
  ERROR_ON_FETCH_COMMENTS,
  // comment
  UPDATE_COMMENT,
  REQUEST_INCREMENT_VOTE_COMMENT,
  REQUEST_DECREMENT_VOTE_COMMENT,
  DELETE_COMMENT_BY_ID,
  SUCCESS_DELETE_COMMENT_BY_ID,
  ERROR_ON_DELETE_COMMENT_BY_ID,
  CREATE_COMMENT_REQUEST,
  SUCCESS_CREATE_COMMENT,
  ERROR_CREATE_COMMENT,
};
