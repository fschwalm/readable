import { getAllCategories } from '../';
import responseMock from './contracts/GET_categories.json';

xdescribe('categories', () => {
  it('should return all categories', async () => {
    fetch = jest.fn(() => Promise.resolve(responseMock));
    const response = await getAllCategories();

    expect(response).toBe(responseMock);
  });
});
