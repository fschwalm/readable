import React, { Component } from 'react';
import { getPosts, getCategories } from '../../api/ReadableAPI';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  async componentDidMount() {
    try {
      const posts = await getPosts();
      console.log(posts);
      this.setState({ posts });
    } catch (error) {
      console.log(error);
    }

    getCategories().then((data) => {
      console.log(data);
    });
  }

  render() {
    const { posts } = this.state;
    return (
      <div className="App">
        <div className="post-list-container">
          {posts.map(post => (
            <article key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
              <span className="post-category">{post.category}</span>
            </article>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
