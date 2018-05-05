import React from 'react';
import { connect } from 'react-redux';
import Score from '../../Score';
import './index.css';
import {
  incrementVoteComment,
  decrementVoteComment,
  deleteCommentById,
} from '../../../store/actions';

function Comment({
  id,
  parentId,
  timestamp,
  body,
  author,
  voteScore,
  deleted,
  parentDeleted,
  onIncrementVoteComment,
  onDecrementVoteComment,
  onDeleteComment,
}) {
  return (
    <div className="comment">
      <span className="delete-button">
        <button onClick={() => onDeleteComment(id)}>X</button>
      </span>
      <p>{body}</p>
      <p>
        <span>By </span>
        {author}
      </p>
      <Score
        score={voteScore}
        onIncrementScore={() => onIncrementVoteComment(id)}
        onDecrementScore={() => onDecrementVoteComment(id)}
      />
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  onIncrementVoteComment: id => dispatch(incrementVoteComment(id)),
  onDecrementVoteComment: id => dispatch(decrementVoteComment(id)),
  onDeleteComment: id => dispatch(deleteCommentById(id)),
});

export default connect(null, mapDispatchToProps)(Comment);
