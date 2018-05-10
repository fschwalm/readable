import { connect } from 'react-redux';
import React from 'react';
import { editPostAction, fetchPostById } from '../../store/actions';
import PostForm from '../PostForm';

class EditPost extends React.Component {
  constructor(props) {
    super(props);
    this.handleEdit = this.handleEdit.bind(this);
  }

  async componentDidMount() {
    this.props.onFetchPostById(this.props.match.params.id);
  }

  componentDidUpdate() {
    if (this.props.hasErrorOnFetchPost) {
      this.props.history.push('/not-found');
    }
  }

  handleEdit(updatedPost) {
    this.props.onEditPost(updatedPost);
    this.props.history.goBack();
  }

  render() {
    return (
      <div>
        <h1>Edit Post:</h1>
        {/* TODO: Try find a better solution to post[0] */}
        {this.props.isFetchingPost === false && (
          <PostForm post={this.props.post[0]} action={this.handleEdit} actionLabel="Save" />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  post: state.postsReducer.posts,
  isFetchingPost: state.httpReducer.isFetchingPost,
  hasErrorOnFetchPost: state.httpReducer.hasErrorOnFetchPost,
});

const mapDispatchToProps = dispatch => ({
  onFetchPostById: id => dispatch(fetchPostById(id)),
  onEditPost: post => dispatch(editPostAction(post)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditPost);
