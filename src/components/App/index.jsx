import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import MenuBar from '../MenuBar';
import PostsDisplayList from '../PostsDisplayList';
import PostPage from '../PostPage';
import NewPost from '../NewPost';
import EditPost from '../EditPost';
import NotFound from '../NotFound';

const App = () => (
  <div className="App">
    <Router>
      <React.Fragment>
        <Route path="/" component={MenuBar} />
        <Switch>
          <Route path="/posts/new" component={NewPost} />
          <Route path="/not-found" component={NotFound} />
          <Route path="/posts/edit/:id" component={EditPost} />
          <Route path="/:category/:id" component={PostPage} />
          <Route path="/:category?" component={PostsDisplayList} />
        </Switch>
      </React.Fragment>
    </Router>
  </div>
);

export default App;
