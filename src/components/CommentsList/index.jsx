import React from 'react';
import Comment from './Comment';

function CommentList({ comments }) {
  return (
    <div>
      <p>Showing: {comments.length} comments.</p>
      {comments.map(comment => <Comment key={comment.id} {...comment} />)}
    </div>
  );
}

export default CommentList;
