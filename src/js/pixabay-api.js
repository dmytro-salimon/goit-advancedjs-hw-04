import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export const fetchImagesByQuery = (searchedQuery, page) => {
  const requestParams = {
    key: '48288540-d41f150545e6f7b8d91ef3882',
    q: searchedQuery,
    image_type: 'photo',
    orientation: 'horizontal',
    page: page,
    per_page: 15,
  };
  
  return axios.get('/', { params: requestParams });
};
