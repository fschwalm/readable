import React from 'react';
import { connect } from 'react-redux';
import Comment from './Comment';
import Sort from '../Sort';
import { setCommentSortMode } from '../../store/actions/sort';

function CommentList({ comments, onChangeCommentSortMode, commentsSortMode }) {
  return (
    <div>
      <h4>Comments</h4>
      <hr />
      <p>Showing: {comments.length} comments.</p>
      <Sort currentSortMode={commentsSortMode} onChangeSortMode={onChangeCommentSortMode} />
      {comments.map(comment => <Comment key={comment.id} comment={comment} />)}
    </div>
  );
}

const mapStateToProps = state => ({
  commentsSortMode: state.sortReducer.comments,
});

const mapDispatchToProps = dispatch => ({
  onChangeCommentSortMode: filter => dispatch(setCommentSortMode(filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentList);
