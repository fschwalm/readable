import React from 'react';
import ReactDOM from 'react-dom';
import App from './..';
import * as ReadableAPI from '../../../api/ReadableAPI';

jest.mock('../../../api/ReadableAPI');

describe('App component', () => {
  beforeEach(() => {
    mockHttpRequests();
  });
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

function mockHttpRequests() {
  ReadableAPI.getPosts = jest.fn(() => Promise.resolve([]));
  ReadableAPI.getCategories = jest.fn(() => Promise.resolve([]));
}
