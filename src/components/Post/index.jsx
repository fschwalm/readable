import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { incrementVotePost, decrementVotePost } from '../../store/actions';
import Score from '../Score';

function Post({
  post, onIncrementVotePost, onDecrementVotePost, match,
}) {
  const matchUrl = match.url === '/' ? `/${post.category}` : match.url;
  return (
    <div className="post-list-container">
      <article key={post.id}>
        <span className="post-category">{post.category}</span>
        <h3>
          <Link to={`${matchUrl}/${post.id}`}>{post.title}</Link>
        </h3>
        <p>{post.body}</p>
        <span>Comments: </span>
        <span>{post.commentCount}</span>
        <br />
        <Score
          score={post.voteScore}
          onIncrementScore={() => onIncrementVotePost(post.id)}
          onDecrementScore={() => onDecrementVotePost(post.id)}
        />
      </article>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  onIncrementVotePost: id => dispatch(incrementVotePost(id)),
  onDecrementVotePost: id => dispatch(decrementVotePost(id)),
});

export default withRouter(connect(null, mapDispatchToProps)(Post));
