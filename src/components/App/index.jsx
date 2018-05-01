import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCategories } from '../../store/actions';
import PostsDisplayList from '../PostsDisplayList';
import MenuBar from '../MenuBar';

class App extends Component {
  async componentDidMount() {
    this.props.onFetchCategories();
  }

  render() {
    return (
      <div className="App">
        <MenuBar />
        <PostsDisplayList />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categoriesReducer.categories,
  isFetchingCategories: state.categoriesReducer.isFetchingCategories,
  hasErrorOnFetchCategories: state.categoriesReducer.hasErrorOnFetchCategories,
  fetchCategoriesErrorMessage: state.categoriesReducer.fetchCategoriesErrorMessage,
});

const mapDispatchToProps = dispatch => ({
  onFetchCategories: () => dispatch(fetchCategories()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
