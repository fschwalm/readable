import React from 'react';
import { connect } from 'react-redux';
import { upVotebyPostId } from '../../store/actions';

function Post({ post, onUpVotePost }) {
  return (
    <div className="post-list-container">
      <article key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
        <span className="post-category">{post.category}</span>
        <span>Comments: </span>
        <span>{post.commentCount}</span>
        <br />
        <span>Vote score: </span>
        <span onClick={() => onUpVotePost(post.id)}>{post.voteScore}</span>
      </article>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  onUpVotePost: id => dispatch(upVotebyPostId(id)),
});

export default connect(null, mapDispatchToProps)(Post);
