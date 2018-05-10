import { connect } from 'react-redux';
import React from 'react';
import Post from '../../model/post';
import { createPost } from '../../store/actions';
import PostForm from '../PostForm';

class NewPost extends React.Component {
  constructor(props) {
    super(props);
    this.handleCreate = this.handleCreate.bind(this);
  }

  handleCreate(post) {
    // TODO: Without redirect it needs generate a new post after the create
    // because the id
    this.props.onCreatePost(post);
    this.props.history.goBack()
  }

  render() {
    return (
      <div>
        <h1>Create a new Post:</h1>
        <PostForm post={new Post({})} action={this.handleCreate} actionLabel="Create" />
        {this.props.isCreatingPost && <p>Creating...</p>}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isCreatingPost: state.httpReducer.isCreatingPost,
  hasErrorCreatePost: state.httpReducer.hasErrorCreatePost,
  createPostErrorMessage: state.httpReducer.createPostErrorMessage,
});

const mapDispatchToProps = dispatch => ({
  onCreatePost: post => dispatch(createPost(post)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewPost);
