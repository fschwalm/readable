const api = 'http://localhost:3001';

let token;

if (process.env.NODE_ENV === 'test') {
  token = null;
} else {
  token = localStorage.token;
}

const headers = {
  Accept: 'application/json',
  Authorization: token,
  'Content-Type': 'application/json',
};

export { api, headers };
