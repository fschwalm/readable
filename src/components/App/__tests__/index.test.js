import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import App from './..';
import * as ReadableAPI from '../../../api/ReadableAPI';
import configureStore from '../../../store/configureStore';

jest.mock('../../../api/ReadableAPI');

describe('App component', () => {
  let store;

  beforeAll(() => {
    store = configureStore();
  });

  beforeEach(() => {
    mockHttpRequests();
  });
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/']} initialIndex={0}>
          <App />
        </MemoryRouter>
      </Provider>,
      div,
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});

function mockHttpRequests() {
  ReadableAPI.getPosts = jest.fn(() => Promise.resolve([]));
  ReadableAPI.getCategories = jest.fn(() => Promise.resolve([]));
}
