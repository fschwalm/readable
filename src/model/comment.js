import uuidv4 from 'uuid/v4';

class Comment {
  constructor({
    id = uuidv4(), timestamp = Date.now(), body = '', author = '', parentId = '',
  }) {
    this.id = id;
    this.timestamp = timestamp;
    this.body = body;
    this.author = author;
    this.timestamp = timestamp;
    this.parentId = parentId;
  }
}

export default Comment;
