import { api, headers } from '../apiUtils';

export const getAllCategories = () =>
  fetch(`${api}/categories`, { headers })
    .then(res => res.json());
// .catch(error => error);
