import uuidv4 from 'uuid/v4';

class CommentModel {
  constructor({
    id = uuidv4(),
    parentId = '',
    timestamp = Date.now(),
    body = '',
    author = '',
    voteScore = '1',
    deleted = false,
    parentDeleted = false,
  }) {
    this.id = id;
    this.parentId = parentId;
    this.timestamp = timestamp;
    this.body = body;
    this.author = author;
    this.voteScore = voteScore;
    this.deleted = deleted;
    this.parentDeleted = parentDeleted;
  }
}

export default CommentModel;
