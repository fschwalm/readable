import React from 'react';
import Score from '../../Score';
import './index.css';

function Comment({
  id, parentId, timestamp, body, author, voteScore, deleted, parentDeleted,
}) {
  return (
    <div className="comment">
      <p>{body}</p>
      <p>
        <span>By </span>
        {author}
      </p>
      <Score score={voteScore} />
    </div>
  );
}

export default Comment;
