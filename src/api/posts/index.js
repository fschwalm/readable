import { api, headers } from '../apiUtils';

export const getPosts = () => fetch(`${api}/posts`, { headers }).then(res => res.json());

export const getPostById = id => fetch(`${api}/posts/${id}`, { headers }).then(res => res.json());

export const getAllPostsByCategory = category =>
  fetch(`${api}/${category}/posts/`, {
    method: 'GET',
    headers,
  })
    .then(res => res.json())
    .then(data => data);

export const addPost = post =>
  fetch(`${api}/posts`, {
    method: 'POST',
    headers,
    body: JSON.stringify(post),
  })
    .then(res => res.json())
    .then(data => data);

export const editPost = post =>
  fetch(`${api}/posts/${post.id}`, {
    method: 'PUT',
    headers,
    body: JSON.stringify(post),
  })
    .then(res => res.json())
    .catch(error => error);

export const deletePost = postID =>
  fetch(`${api}/posts/${postID}`, {
    method: 'DELETE',
    headers,
  })
    .then(res => res.json())
    .catch(error => error);

export const upVotePost = postID =>
  fetch(`${api}/posts/${postID}`, {
    method: 'POST',
    headers,
    body: JSON.stringify({ option: 'upVote' }),
  })
    .then(res => res.json())
    .catch(error => error);

export const downVotePost = postID =>
  fetch(`${api}/posts/${postID}`, {
    method: 'POST',
    headers,
    body: JSON.stringify({ option: 'downVote' }),
  })
    .then(res => res.json())
    .catch(error => error);
