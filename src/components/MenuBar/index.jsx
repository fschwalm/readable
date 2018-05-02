import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
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
        <NavLink to="/">all</NavLink>
        {categories.map(category => (
          <div key={category.name}>
            <NavLink to={category.path}>{category.name} </NavLink>
          </div>
        ))}
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
