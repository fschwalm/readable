import React from 'react';
import { connect } from 'react-redux';
import Score from '../../Score';
import './index.css';
import {
  incrementVoteComment,
  decrementVoteComment,
  deleteCommentById,
  editCommentAction,
} from '../../../store/actions';
import CommentForm from '../../CommentForm';
import CommentModel from '../../../model/comment';
import ReadableDate from '../../ReadableDate';

class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: false,
    };
    this.handleMode = this.handleMode.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleEdit(updatedComment) {
    this.props.onEditComment(updatedComment);
    this.handleMode();
  }

  handleMode() {
    this.setState(prevState => ({
      editMode: !prevState.editMode,
    }));
  }

  render() {
    const {
      comment, onIncrementVoteComment, onDecrementVoteComment, onDeleteComment,
    } = this.props;
    return (
      <div className="comment">
        {this.state.editMode === false ? (
          <div className="comment">
            <span className="edit-button">
              <button onClick={this.handleMode}>edit</button>
            </span>
            <span className="delete-button">
              <button onClick={() => onDeleteComment(comment.id)}>X</button>
            </span>
            <p>{comment.body}</p>
            <p>
              <span>By </span>
              {comment.author}
            </p>
            <ReadableDate timestamp={comment.timestamp} />
            <br />
            <Score
              score={comment.voteScore}
              onIncrementScore={() => onIncrementVoteComment(comment.id)}
              onDecrementScore={() => onDecrementVoteComment(comment.id)}
            />
          </div>
        ) : (
          <div className="comment">
            <span className="cancel-button">
              <button onClick={this.handleMode}>cancel</button>
            </span>
            <CommentForm
              comment={new CommentModel({ ...this.props.comment })}
              action={this.handleEdit}
              actionLabel="confirm edit"
            />
          </div>
        )}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onIncrementVoteComment: id => dispatch(incrementVoteComment(id)),
  onDecrementVoteComment: id => dispatch(decrementVoteComment(id)),
  onDeleteComment: id => dispatch(deleteCommentById(id)),
  onEditComment: comment => dispatch(editCommentAction(comment)),
});

export default connect(null, mapDispatchToProps)(Comment);
