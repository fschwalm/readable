import React from 'react';
import CommentModel from '../../model/comment';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.props.comment,
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
    this.props.action(new CommentModel({ ...this.state }));
    this.clear();
  }

  clear() {
    this.setState({ body: '', author: '' });
  }

  render() {
    const { body, author } = this.state;
    const isFormValid = body && author;
    return (
      <div className="new-comment-container">
        <form onSubmit={this.handleSubmit}>
          <textarea
            rows="4"
            cols="50"
            placeholder="Write a comment"
            value={body}
            onChange={this.handleBodyChange}
            type="text"
          />
          <br />
          <br />
          <input
            placeholder="Author"
            type="text"
            value={author}
            onChange={this.handleAuthorChange}
          />
          <button disabled={!isFormValid}>{this.props.actionLabel}</button>
        </form>
      </div>
    );
  }
}

export default CommentForm;
