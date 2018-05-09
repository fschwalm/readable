import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { fetchPosts, setPostSortMode } from '../../store/actions';
import Post from '../Post';
import Sort from '../Sort';

import './index.css';
import { getSortFunctionByFilter } from '../../utils/sort';

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
    const {
      posts, category, onChangePostSortMode, postsSortMode,
    } = this.props;
    return (
      <div>
        <div className="post-list-container">
          <p>
            Showing {category}: {posts.length} posts.
          </p>
          <Sort currentSortMode={postsSortMode} onChangeSortMode={onChangePostSortMode} />
          {posts.map(post => <Post key={post.id} post={post} />)}
        </div>
        <div className="add-post">
          <Link to="/posts/new">+</Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  category: ownProps.match.params.category || 'all',
  posts: [...state.postsReducer.posts].sort(getSortFunctionByFilter(state.sortReducer.posts)),
  isFetchingPosts: state.httpReducer.isFetchingPosts,
  hasErrorOnFetchPosts: state.httpReducer.hasErrorOnFetchPosts,
  fetchPostsErrorMessage: state.httpReducer.fetchPostsErrorMessage,
  postsSortMode: state.sortReducer.posts,
});

const mapDispatchToProps = dispatch => ({
  onFetchPosts: category => dispatch(fetchPosts(category)),
  onChangePostSortMode: filter => dispatch(setPostSortMode(filter)),
});

PostsDisplayList = withRouter(connect(mapStateToProps, mapDispatchToProps)(PostsDisplayList));

export default PostsDisplayList;
