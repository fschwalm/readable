import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCategories } from '../../store/actions';
import './index.css';

class MenuBar extends Component {
  async componentDidMount() {
    this.props.onFetchCategories();
  }

  render() {
    const { categories } = this.props;
    return (
      <ul>
        <li>
          <NavLink activeClassName="active" exact to="/">
            all
          </NavLink>
        </li>
        {categories.map(category => (
          <React.Fragment key={category.name}>
            <li>
              <NavLink activeClassName="active" to={`/${category.path}`}>
                {category.name}
              </NavLink>
            </li>
          </React.Fragment>
        ))}
      </ul>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categoriesReducer.categories,
  isFetchingCategories: state.httpReducer.isFetchingCategories,
  hasErrorOnFetchCategories: state.httpReducer.hasErrorOnFetchCategories,
  fetchCategoriesErrorMessage: state.httpReducer.fetchCategoriesErrorMessage,
});

const mapDispatchToProps = dispatch => ({
  onFetchCategories: () => dispatch(fetchCategories()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuBar);
