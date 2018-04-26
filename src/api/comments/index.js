import { api, headers } from '../apiUtils';

export const getCommentsByPostId = postID =>
  fetch(`${api}/posts/${postID}/comments`, {
    method: 'GET',
    headers,
  }).then(res => res.json());

export const addComment = comment =>
  fetch(`${api}/comments/`, {
    method: 'POST',
    headers,
    body: JSON.stringify(comment),
  })
    .then(res => res.json())
    .catch(error => error);

export const editComment = comment =>
  fetch(`${api}/comments/${comment.id}`, {
    method: 'PUT',
    headers,
    body: JSON.stringify(comment),
  })
    .then(res => res.json())
    .catch(error => error);

export const deleteComment = commentID =>
  fetch(`${api}/comments/${commentID}`, {
    method: 'DELETE',
    headers,
  })
    .then(res => res.json())
    .catch(error => error);

export const upVoteComment = commentID =>
  fetch(`${api}/comments/${commentID}`, {
    method: 'POST',
    headers,
    body: JSON.stringify({ option: 'upVote' }),
  })
    .then(res => res.json())
    .catch(error => error);

export const downVoteComment = commentID =>
  fetch(`${api}/comments/${commentID}`, {
    method: 'POST',
    headers,
    body: JSON.stringify({ option: 'downVote' }),
  })
    .then(res => res.json())
    .catch(error => error);
