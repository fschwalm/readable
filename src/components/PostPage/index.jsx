import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CommentList from '../CommentsList';
import NewComment from '../NewComment';
import Post from '../Post';
import { fetchPostById, fetchCommentsByPostId } from '../../store/actions';

const propTypes = {
  isFetchingPost: PropTypes.bool,
};

const defaultProps = {
  isFetchingPost: false,
};

class PostPage extends React.Component {
  async componentDidMount() {
    this.props.onFetchPostById(this.props.match.params.id);
    this.props.onfetchCommentsByPostId(this.props.match.params.id);
  }

  componentDidUpdate() {
    if (this.props.hasErrorOnFetchPost) {
      this.props.history.push('/not-found');
    }
  }

  render() {
    return (
      <div className="post-list-container">
        {/* TODO: Try find a better solution to post[0] */}
        {this.props.isFetchingPost === false && <Post post={this.props.post[0]} />}
        <br />
        <NewComment />
        <CommentList comments={this.props.comments} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  post: state.postsReducer.posts,
  isFetchingPost: state.httpReducer.isFetchingPost,
  hasErrorOnFetchPost: state.httpReducer.hasErrorOnFetchPost,
  fetchPostErrorMessage: state.httpReducer.fetchPostErrorMessage,
  comments: state.commentsReducer.comments,
  isFetchingComments: state.commentsReducer.isFetchingComments,
  hasErrorOnFetchComments: state.commentsReducer.hasErrorOnFetchComments,
  fetchCommentsErrorMessage: state.commentsReducer.fetchCommentsErrorMessage,
});

const mapDispatchToProps = dispatch => ({
  onFetchPostById: id => dispatch(fetchPostById(id)),
  onfetchCommentsByPostId: id => dispatch(fetchCommentsByPostId(id)),
});

PostPage.propTypes = propTypes;
PostPage.defaultProps = defaultProps;

export default connect(mapStateToProps, mapDispatchToProps)(PostPage);
