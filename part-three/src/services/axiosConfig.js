import axios from 'axios';

const instance = axios.create();

instance.interceptors.request.use(config => ({
  ...config,
  headers: {
    ...config.headers,
    'Content-Type': 'application/json',
  },
}));

instance.interceptors.response.use(
  response => response.data,
  error => {
    let messages = [];
    const errorResponse = {
      messages,
      errors: (error.response && error.response.data && error.response.data.errors) || null,
      status: (error.response && error.response.status) || '',
    };

    return Promise.reject(errorResponse);
  },
);

export default instance;
