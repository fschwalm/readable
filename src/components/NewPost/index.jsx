import { connect } from 'react-redux';
import React from 'react';
import Post from './post';
import { createPost } from '../../store/actions';

class NewPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
      author: '',
      category: '',
    };
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleBodyChange = this.handleBodyChange.bind(this);
    this.handleAuthorChange = this.handleAuthorChange.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.redirectToCreatedPostCategory = this.redirectToCreatedPostCategory.bind(this);
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
    this.props.onCreatePost(new Post({ ...this.state }));
    this.redirectToCreatedPostCategory();
  }

  redirectToCreatedPostCategory() {
    this.props.history.push(`/${this.state.category}`);
  }

  render() {
    const {
      title, body, author, category,
    } = this.state;
    const isFormValid = title && body && author && category;
    return (
      <div>
        <h1>Create a new Post:</h1>
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
            <option value="react">Hardcoded react</option>
            <option value="redux">Hardcoded redux</option>
            <option value="udacity">Hardcoded udacity</option>
          </select>
          <br />
          <br />
          <button disabled={!isFormValid}>Create</button>
          {this.props.isCreatingPost && <p>Creating...</p>}
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isCreatingPost: state.postsReducer.isCreatingPost,
  hasErrorCreatePost: state.postsReducer.hasErrorCreatePost,
  createPostErrorMessage: state.postsReducer.createPostErrorMessage,
});

const mapDispatchToProps = dispatch => ({
  onCreatePost: post => dispatch(createPost(post)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewPost);
