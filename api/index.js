import axios from 'axios';

const STORAGE_KEY = 'dreams';

export const loadDreams = (forceRefresh = false) => {
  let saved = localStorage.getItem(STORAGE_KEY);

  if (saved && !forceRefresh) {
    return JSON.parse(saved);
  }

  return axios.get('http://localhost:8000/api/v1/dreams')
    .then(({ data, status }) => {
      if (status < 400) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
        return data;
      }
      throw new Error(data);
    });
};
