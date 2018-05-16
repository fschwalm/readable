import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import CommentList from '../CommentsList';
import NewComment from '../NewComment';
import Post from '../Post';
import { fetchPostById, fetchCommentsByPostId } from '../../store/actions';
import { getSortFunctionByFilter } from '../../utils/sort';

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
    const canRenderPost =
      !this.props.isFetchingPost && !this.props.hasErrorOnFetchPost && this.props.post[0];
    const isdeletedAfterRender = !this.props.post[0] && !this.props.isFetchingPost;

    return (
      <div className="post-list-container">
        {canRenderPost && (
          <React.Fragment>
            <Post post={this.props.post[0]} />
            <NewComment postId={this.props.post[0].id} />
            <CommentList comments={this.props.comments} />
          </React.Fragment>
        )}
        {isdeletedAfterRender && (
          <Redirect to="/" />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  post: state.postsReducer.posts,
  isFetchingPost: state.httpReducer.isFetchingPost,
  hasErrorOnFetchPost: state.httpReducer.hasErrorOnFetchPost,
  fetchPostErrorMessage: state.httpReducer.fetchPostErrorMessage,
  comments: [...state.commentsReducer.comments].sort(getSortFunctionByFilter(state.sortReducer.comments)),
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
