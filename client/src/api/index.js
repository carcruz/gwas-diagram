const API_URL = 'http://localhost:8000/v1';

const filterFetcher = (filters) => {
  const baseURL = `${API_URL}/filter`;
  return fetch(baseURL, { method: 'POST' });
};
