import axios from 'axios';

export const loadDreams = () => {
  return axios.get('http://localhost:8000/api/v1/dreams')
    .then(({ data, status }) => {
      if (status < 400) {
        return data;
      }
      throw new Error(data);
    });
};
