import React from 'react';
import { connect } from 'react-redux';
import Comment from './Comment';
import Sort from '../Sort';
import { sortCommentsByFilter } from '../../store/actions';

function CommentList({ comments, onSortComments }) {
  return (
    <div>
      <h4>Comments</h4>
      <hr />
      <p>Showing: {comments.length} comments.</p>
      <Sort onSort={onSortComments} />
      {comments.map(comment => <Comment key={comment.id} comment={comment} />)}
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  onSortComments: filter => dispatch(sortCommentsByFilter(filter)),
});

export default connect(null, mapDispatchToProps)(CommentList);
