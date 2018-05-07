import { connect } from 'react-redux';
import React from 'react';
import Post from '../../model/post';
import { createPost } from '../../store/actions';
import FormPost from '../FormPost';

class NewPost extends React.Component {
  constructor(props) {
    super(props);
    this.handleCreate = this.handleCreate.bind(this);
    this.redirectToCreatedPostCategory = this.redirectToCreatedPostCategory.bind(this);
  }

  handleCreate(post) {
    // TODO: Without redirect it needs generate a new post after the create
    // because the id
    this.props.onCreatePost(post);
    this.redirectToCreatedPostCategory(post.category);
  }

  redirectToCreatedPostCategory(category) {
    this.props.history.push(`/${category}`);
  }

  render() {
    return (
      <div>
        <h1>Create a new Post:</h1>
        <FormPost post={new Post({})} action={this.handleCreate} actionLabel="Create"/>
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
