import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCategories } from '../../actions';

class App extends Component {

  async componentDidMount() {
    this.props.onFetchCategories();
  }

  render() {
    const { posts } = this.state;
    return (
      <div className="App">
        <div>
          <ul>
            {this.props.categories.map(category => <li key={category.name}> {category.name} </li>)}
          </ul>
        </div>
        <div className="post-list-container">
          {posts.map(post => (
            <article key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
              <span className="post-category">{post.category}</span>
            </article>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categories,
  isFetchingCategories: state.isFetchingCategories,
  hasErrorOnFetchCategories: state.hasErrorOnFetchCategories,
  fetchCategoriesErrorMessage: state.fetchCategoriesErrorMessage,
});

const mapDispatchToProps = dispatch => ({
  onFetchCategories: () => dispatch(fetchCategories()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
