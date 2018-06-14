import { getAllCategories } from '../../../api/ReadableAPI';
import { FETCH_CATEGORIES, RECEIVE_CATEGORIES, ERROR_ON_FETCH_CATEGORIES } from './types';

const fetchCategories = () => ({
  types: [FETCH_CATEGORIES, RECEIVE_CATEGORIES, ERROR_ON_FETCH_CATEGORIES],
  callAPI: () => getAllCategories(),
});

export { fetchCategories };
