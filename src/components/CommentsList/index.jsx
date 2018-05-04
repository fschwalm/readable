import React from 'react';
import Comment from './Comment';

function CommentList({ comments }) {
  return (
    <div>
      <h4>Comments</h4>
      <hr />
      <p>Showing: {comments.length} comments.</p>
      {comments.map(comment => <Comment key={comment.id} {...comment} />)}
    </div>
  );
}

export default CommentList;
