import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchPosts } from '../../store/actions';
import Post from '../Post';
import './index.css';

class PostsDisplayList extends Component {
  async componentDidMount() {
    this.props.onFetchPosts(this.props.category);
  }

  componentDidUpdate(prevProps) {
    if (this.props.category !== prevProps.category) {
      this.props.onFetchPosts(this.props.category);
    }
  }

  render() {
    const { posts } = this.props;
    return (
      <div className="post-list-container">
        <p>Showing all: {posts.length} posts.</p>
        {posts.map(post => <Post key={post.id} post={post} />)}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  category: ownProps.match.params.category || 'all',
  posts: state.postsReducer.posts,
  isFetchingPosts: state.postsReducer.isFetchingPosts,
  hasErrorOnFetchPosts: state.postsReducer.hasErrorOnFetchPosts,
  fetchPostsErrorMessage: state.postsReducer.fetchPostsErrorMessage,
});

const mapDispatchToProps = dispatch => ({
  onFetchPosts: category => dispatch(fetchPosts(category)),
});

PostsDisplayList = withRouter(connect(mapStateToProps, mapDispatchToProps)(PostsDisplayList));

export default PostsDisplayList;
