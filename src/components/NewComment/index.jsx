import React from 'react';
import { connect } from 'react-redux';
import './index.css';

class NewComment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: '',
      author: '',
    };
    this.handleBodyChange = this.handleBodyChange.bind(this);
    this.handleAuthorChange = this.handleAuthorChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleBodyChange(event) {
    this.setState({ body: event.target.value });
  }

  handleAuthorChange(event) {
    this.setState({ author: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div className="new-comment-container">
        <form onSubmit={this.handleSubmit}>
          <textarea
            rows="4"
            cols="50"
            placeholder="Write a comment"
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
          <button>submit</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categoriesReducer.categories,
  isFetchingCategories: state.httpReducer.isFetchingCategories,
  hasErrorOnFetchCategories: state.httpReducer.hasErrorOnFetchCategories,
  fetchCategoriesErrorMessage: state.httpReducer.fetchCategoriesErrorMessage,
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(NewComment);
