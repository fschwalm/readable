import React from 'react';

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
    this.props.createPost({ ...this.state });
    // TODO: redirect to all posts
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
            <option value="1">Hardcoded category</option>
          </select>
          <br />
          <br />
          <button disabled={!isFormValid}>Create</button>
        </form>
      </div>
    );
  }
}

export default NewPost;
