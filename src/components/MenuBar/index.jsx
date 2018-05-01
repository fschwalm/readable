import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCategories } from '../../store/actions';

class MenuBar extends Component {
  async componentDidMount() {
    this.props.onFetchCategories();
  }

  render() {
    const { categories } = this.props;
    return (
      <div>
        <ul>{categories.map(category => <li key={category.name}> {category.name} </li>)}</ul>
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

export default connect(mapStateToProps, mapDispatchToProps)(MenuBar);
