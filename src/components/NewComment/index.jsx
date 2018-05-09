import React from 'react';
import { connect } from 'react-redux';
import './index.css';
import CommentModel from '../../model/comment';
import { createComment } from '../../store/actions/';
import CommentForm from '../CommentForm';

class NewComment extends React.Component {
  constructor(props) {
    super(props);
    this.handleCreate = this.handleCreate.bind(this);
  }

  handleCreate(comment) {
    this.props.onCreateComment(comment);
  }

  render() {
    return (
      <div className="new-comment-container">
        <CommentForm
          comment={new CommentModel({ parentId: this.props.postId })}
          action={this.handleCreate}
          actionLabel="Submit"
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onCreateComment: comment => dispatch(createComment(comment)),
});

export default connect(null, mapDispatchToProps)(NewComment);
