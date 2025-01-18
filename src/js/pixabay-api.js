const API_KEY = '48288540-d41f150545e6f7b8d91ef3882';
const BASE_URL = 'https://pixabay.com/api/';

export const fetchImagesByQuery = (query, page = 1) => {
  const url = `${BASE_URL}?key=${API_KEY}&q=${encodeURIComponent(query)}&image_type=photo&orientation=horizontal&safesearch=true&per_page=20&page=${page}`;
  return fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    return response.json();
  });
};
