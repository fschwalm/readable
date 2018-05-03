import * as actionTypes from '../actionTypes';
import { getAllCategories } from '../../../api/ReadableAPI';

const fetchCategories = () => async (dispatch) => {
  dispatch(requestCategories());
  try {
    const response = await getAllCategories();
    dispatch(receiveCategories(response));
  } catch (error) {
    dispatch(errorOnFetchCategories(error));
  }
};

const requestCategories = () => ({
  type: actionTypes.FETCH_CATEGORIES,
});

const receiveCategories = payload => ({
  type: actionTypes.RECEIVE_CATEGORIES,
  payload,
});

const errorOnFetchCategories = payload => ({
  type: actionTypes.ERROR_ON_FETCH_CATEGORIES,
  payload,
});

export { fetchCategories, requestCategories, receiveCategories, errorOnFetchCategories };
