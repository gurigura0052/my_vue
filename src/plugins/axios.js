import axios from 'axios';

export default axios.create({
  baseURL: 'https://example.com/api',
  xsrfHeaderName: 'X-CSRF-Token',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin':'*'
  }
});
