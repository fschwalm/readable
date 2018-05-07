export { fetchCategories } from './categories';

export { fetchPosts } from './posts';

export {
  incrementVotePost,
  decrementVotePost,
  fetchPostById,
  deletePostById,
  createPost,
  editPostAction,
} from './post';

export { fetchCommentsByPostId } from './comments';

export { incrementVoteComment, decrementVoteComment, deleteCommentById } from './comment';
