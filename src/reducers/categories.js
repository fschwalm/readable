import * as actionTypes from '../actions/actionTypes';

const initialState = {
  isFetchingCategories: false,
  hasErrorOnFetchCategories: false,
  fetchCategoriesErrorMessage: '',
  categories: [],
};

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_CATEGORIES:
      return {
        ...state,
        isFetchingCategories: true,
      };

    case actionTypes.RECEIVE_CATEGORIES:
      return {
        ...state,
        categories: action.payload.categories,
        isFetchingCategories: false,
      };

    case actionTypes.ERROR_ON_FETCH_CATEGORIES:
      return {
        ...state,
        isFetchingCategories: false,
        hasErrorOnFetchCategories: true,
        fetchCategoriesErrorMessage: action.payload.message,
      };

    default:
      return state;
  }
};

export default categoriesReducer;
