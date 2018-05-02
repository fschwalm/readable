import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { upVotebyPostId } from '../../store/actions';

function Post({ post, onUpVotePost, match }) {
  const matchUrl = match.url === '/' ? `/${post.category}` : match.url;
  return (
    <div className="post-list-container">
      <article key={post.id}>
        <h3>
          <Link to={`${matchUrl}/${post.id}`}>{post.title}</Link>
        </h3>
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

export default withRouter(connect(null, mapDispatchToProps)(Post));
