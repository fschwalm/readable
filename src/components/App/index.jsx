import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCategories, fetchPosts, upVotebyPostId } from '../../store/actions';

class App extends Component {
  async componentDidMount() {
    this.props.onFetchCategories();
    this.props.onFetchPosts();
  }

  render() {
    // const { posts } = this.state;
    return (
      <div className="App">
        <div>
          <ul>
            {this.props.categories.map(category => <li key={category.name}> {category.name} </li>)}
            <div className="post-list-container">
              <p>Showing all: {this.props.posts.length} posts.</p>
              {this.props.posts.map(post => (
                <article key={post.id}>
                  <h3>{post.title}</h3>
                  <p>{post.body}</p>
                  <span className="post-category">{post.category}</span>
                  <span>Comments: </span>
                  <span>{post.commentCount}</span>
                  <br />
                  <span>Vote score: </span>
                  <span onClick={() => this.props.onUpVotePost(post.id)}>{post.voteScore}</span>
                </article>
              ))}
            </div>
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categoriesReducer.categories,
  isFetchingCategories: state.categoriesReducer.isFetchingCategories,
  hasErrorOnFetchCategories: state.categoriesReducer.hasErrorOnFetchCategories,
  fetchCategoriesErrorMessage: state.categoriesReducer.fetchCategoriesErrorMessage,
  posts: state.postsReducer.posts,
  isFetchingPosts: state.postsReducer.isFetchingPosts,
  hasErrorOnFetchPosts: state.postsReducer.hasErrorOnFetchPosts,
  fetchPostsErrorMessage: state.postsReducer.fetchPostsErrorMessage,
});

const mapDispatchToProps = dispatch => ({
  onFetchCategories: () => dispatch(fetchCategories()),
  onFetchPosts: () => dispatch(fetchPosts()),
  onUpVotePost: id => dispatch(upVotebyPostId(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
