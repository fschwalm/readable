import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore';
import PostsDisplayList from './components/PostsDisplayList';
import PostPage from './components/PostPage';
import NewPost from './components/NewPost';
import EditPost from './components/EditPost';
import NotFound from './components/NotFound';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Route path="/" component={App} />
        <Switch>
          <Route path="/posts/new" component={NewPost} />
          <Route path="/not-found" component={NotFound} />
          <Route path="/posts/edit/:id" component={EditPost} />
          <Route path="/:category/:id" component={PostPage} />
          <Route path="/:category?" component={PostsDisplayList} />
        </Switch>
      </div>
    </Router>
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
