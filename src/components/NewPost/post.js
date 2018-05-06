import uuidv4 from 'uuid/v4';

class Post {
  constructor({
    id = uuidv4(), title = '', body = '', author = '', category = '', timestamp = Date.now(),
  }) {
    this.id = id;
    this.title = title;
    this.body = body;
    this.author = author;
    this.category = category;
    this.timestamp = timestamp;
  }
}

export default Post;
