import deepFreeze from 'deep-freeze';
import categoriesReducer from './';
import { requestCategories, receiveCategories, errorOnFetchCategories } from '../../actions/categories';
import GET_categories from '../../../api/categories/__tests__/contracts/GET_categories.json';

describe('categories reducer', () => {
  const initialState = {
    isFetchingCategories: false,
    hasErrorOnFetchCategories: false,
    fetchCategoriesErrorMessage: '',
    categories: [],
  };

  it('should return the default state', () => {
    expect(categoriesReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle FETCH_CATEGORIES', () => {
    const stateAfter = {
      isFetchingCategories: true,
      hasErrorOnFetchCategories: false,
      fetchCategoriesErrorMessage: '',
      categories: [],
    };

    deepFreeze(initialState);

    expect(categoriesReducer(initialState, requestCategories())).toEqual(stateAfter);
  });

  it('should handle RECEIVE_CATEGORIES', () => {
    const stateAfter = {
      isFetchingCategories: false,
      hasErrorOnFetchCategories: false,
      fetchCategoriesErrorMessage: '',
      categories: GET_categories.categories,
    };

    deepFreeze(initialState);

    expect(categoriesReducer(initialState, receiveCategories(GET_categories))).toEqual(stateAfter);
  });

  it('should handle ERROR_ON_FETCH_CATEGORIES', () => {
    const stateAfter = {
      isFetchingCategories: false,
      hasErrorOnFetchCategories: true,
      fetchCategoriesErrorMessage: 'Network Error',
      categories: [],
    };

    deepFreeze(initialState);

    expect(categoriesReducer(initialState, errorOnFetchCategories({ message: 'Network Error' }))).toEqual(stateAfter);
  });
});
