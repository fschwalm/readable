import React from 'react';
import { connect } from 'react-redux';
import CommentList from '../CommentsList';
import Post from '../Post';
import { fetchPostById } from '../../store/actions/post';

const comments = [
  {
    id: '894tuq4ut84ut8v4t8wun89g',
    parentId: '8xf0y6ziyjabvozdd253nd',
    timestamp: 1468166872634,
    body: 'Hi there! I am a COMMENT.',
    author: 'thingtwo',
    voteScore: 6,
    deleted: false,
    parentDeleted: false,
  },
  {
    id: '8tu4bsun805n8un48ve89',
    parentId: '8xf0y6ziyjabvozdd253nd',
    timestamp: 1469479767190,
    body: 'Comments. Are. Cool.',
    author: 'thingone',
    voteScore: -5,
    deleted: false,
    parentDeleted: false,
  },
];

class PostPage extends React.Component {
  async componentDidMount() {
    this.props.onFetchPostById(this.props.match.params.id);
  }
  render() {
    return (
      <div className="post-list-container">
        {/* TODO: Try find a better solution to post[0]*/}
        {this.props.isFetchingPost === false && <Post post={this.props.post[0]} />}
        <CommentList comments={comments} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  post: state.postsReducer.posts,
  isFetchingPost: state.postsReducer.isFetchingPost,
  hasErrorOnFetchPost: state.postsReducer.hasErrorOnFetchPost,
  fetchPostErrorMessage: state.postsReducer.fetchPostErrorMessage,
});

const mapDispatchToProps = dispatch => ({
  onFetchPostById: id => dispatch(fetchPostById(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostPage);
