import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { incrementVotePost, decrementVotePost, deletePostById } from '../../store/actions';
import Score from '../Score';

const propTypes = {
  post: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
  }),
};
const defaultProps = {
  post: {},
};

const getReadableDate = timestamp => new Date(timestamp).toLocaleDateString();

function Post({
  post, onIncrementVotePost, onDecrementVotePost, match, onDeletePost,
}) {
  const matchUrl = match.url === '/' ? `/${post.category}` : match.url;
  return (
    <div className="post-list-container">
      <article key={post.id}>
        <span className="post-category">{post.category}</span>
        <span className="delete-button">
          <button onClick={() => onDeletePost(post.id)}>X</button>
        </span>
        {/* TODO: Try use a HOC for this logic */}
        {match.path === '/:category/:id' ? (
          <h3>{post.title}</h3>
        ) : (
          <h3>
            <Link to={`${matchUrl}/${post.id}`}>{post.title}</Link>
          </h3>
        )}
        <p>{post.body}</p>
        <span>Comments: </span>
        <span>{post.commentCount}</span>
        <br />
        <Score
          score={post.voteScore}
          onIncrementScore={() => onIncrementVotePost(post.id)}
          onDecrementScore={() => onDecrementVotePost(post.id)}
        />
        <p>
          <span>By: </span>
          {post.author}
        </p>
        <span>{getReadableDate(post.timestamp)}</span>
      </article>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  onIncrementVotePost: id => dispatch(incrementVotePost(id)),
  onDecrementVotePost: id => dispatch(decrementVotePost(id)),
  onDeletePost: id => dispatch(deletePostById(id)),
});

Post.propTypes = propTypes;
Post.defaultProps = defaultProps;

export default withRouter(connect(null, mapDispatchToProps)(Post));
