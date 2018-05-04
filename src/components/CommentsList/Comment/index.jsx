import React from 'react';
import Score from '../../Score';

function Comment({
  id, parentId, timestamp, body, author, voteScore, deleted, parentDeleted,
}) {
  return (
    <div>
      <h3>{body}</h3>
      <p><span>By </span>{author}</p>
      <Score score={voteScore} />
    </div>
  );
}

export default Comment;
