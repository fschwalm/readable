import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore';
import PostsDisplayList from './components/PostsDisplayList';
import PostPage from './components/PostPage';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <React.Fragment>
        <Route path="/" component={App} />
        <Route exact path="/:category?" component={PostsDisplayList} />
        <Route path="/:category/:id" component={PostPage} />
      </React.Fragment>
    </Router>
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
