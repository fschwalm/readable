import uuidv4 from 'uuid/v4';

class Post {
  constructor({
    id = uuidv4(),
    title = '',
    body = '',
    author = '',
    category = '',
    timestamp = Date.now(),
    deleted = false,
    voteScore = 1,
    commentCount = 0,
  }) {
    this.id = id;
    this.title = title;
    this.body = body;
    this.author = author;
    this.category = category;
    this.timestamp = timestamp;
    this.deleted = deleted;
    this.voteScore = voteScore;
    this.commentCount = commentCount;
  }
}

export default Post;
