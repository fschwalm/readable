import React from 'react';
import { connect } from 'react-redux';
import { fetchCategories } from '../../../store/actions';

class FormPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.props.post,
    };
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleBodyChange = this.handleBodyChange.bind(this);
    this.handleAuthorChange = this.handleAuthorChange.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount() {
    this.props.onFetchCategories();
  }

  handleTitleChange(event) {
    this.setState({ title: event.target.value });
  }

  handleBodyChange(event) {
    this.setState({ body: event.target.value });
  }

  handleAuthorChange(event) {
    this.setState({ author: event.target.value });
  }

  handleCategoryChange(event) {
    this.setState({ category: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.action(this.state);
  }

  render() {
    const {
      title, body, author, category,
    } = this.state;
    const isFormValid = title && body && author && category;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          placeholder="Title"
          value={this.state.title}
          onChange={this.handleTitleChange}
          type="text"
        />
        <br />
        <br />
        <textarea
          rows="8"
          cols="100"
          placeholder="Body"
          value={this.state.body}
          onChange={this.handleBodyChange}
          type="text"
        />
        <br />
        <br />
        <input
          placeholder="Author"
          type="text"
          value={this.state.author}
          onChange={this.handleAuthorChange}
        />
        <br />
        <br />
        <select value={this.state.category} onChange={this.handleCategoryChange}>
          <option value="">Select a Category</option>
          {this.props.categories.map(category => (
            <option key={category.name} value={category.name}>{category.name}</option>
          ))}
        </select>
        <br />
        <br />
        <button disabled={!isFormValid}>Create</button>
      </form>
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

export default connect(mapStateToProps, mapDispatchToProps)(FormPost);
