import React from 'react';
import CommentList from '../CommentsList';

const comments = [
  {
    id: '894tuq4ut84ut8v4t8wun89g',
    parentId: '8xf0y6ziyjabvozdd253nd',
    timestamp: 1468166872634,
    body: 'Hi there! I am a COMMENT.',
    author: 'thingtwo',
    voteScore: 6,
    deleted: false,
    parentDeleted: false,
  },
  {
    id: '8tu4bsun805n8un48ve89',
    parentId: '8xf0y6ziyjabvozdd253nd',
    timestamp: 1469479767190,
    body: 'Comments. Are. Cool.',
    author: 'thingone',
    voteScore: -5,
    deleted: false,
    parentDeleted: false,
  },
];

function PostPage({ match }) {
  console.log(match);

  return (
    <div className="post-list-container">
      <h1>It works</h1>
      <CommentList comments={comments} />
    </div>
  );
}

export default PostPage;
