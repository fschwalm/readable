import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../../store/actions';
import Post from '../Post';
import './index.css';

class PostsDisplayList extends Component {
  async componentDidMount() {
    this.props.onFetchPosts();
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

const mapStateToProps = state => ({
  posts: state.postsReducer.posts,
  isFetchingPosts: state.postsReducer.isFetchingPosts,
  hasErrorOnFetchPosts: state.postsReducer.hasErrorOnFetchPosts,
  fetchPostsErrorMessage: state.postsReducer.fetchPostsErrorMessage,
});

const mapDispatchToProps = dispatch => ({
  onFetchPosts: () => dispatch(fetchPosts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostsDisplayList);
