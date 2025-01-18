import { fetchImagesByQuery } from './js/pixabay-api';
import { createGalleryCardTemplate } from './js/render-functions';
import iziToast from 'izitoast';
import SimpleLightbox from 'simplelightbox';

const searchFormEl = document.querySelector('.js-search-form');
const galleryEl = document.querySelector('.js-gallery');
const loaderEl = document.querySelector('.js-loader');

console.log(loaderEl);

let currentQuery = '';
let currentPage = 1;

const lightbox = new SimpleLightbox('.gallery a');

const showNotification = (message, type = 'info') => {
	iziToast[type]({
		title: type === 'error' ? 'Error' : 'Info',
		message: message,
		position: 'topRight',
		timeout: 3000,
	});
};

const onSearchFormSubmit = (event) => {
	event.preventDefault();
	currentQuery = event.currentTarget.elements.query.value.trim();

	if (currentQuery === '') {
		showNotification('The search field cannot be empty.', 'error');
		return;
	}

	galleryEl.innerHTML = '';
	currentPage = 1;
	fetchAndRenderImages();
	loaderEl.classList.remove('is-hidden');
};

const fetchAndRenderImages = () => {
	fetchImagesByQuery(currentQuery, currentPage)
		.finally(() => {
			loaderEl.classList.add('is-hidden')
		})
		.then((data) => {
			if (data.hits.length === 0 && currentPage === 1) {
				showNotification('No images found. Please try another search.', 'info');
				return;
			}

			galleryEl.insertAdjacentHTML('beforeend', createGalleryCardTemplate(data.hits));
			lightbox.refresh();
		})
		.catch((error) => {
			console.error('Error fetching images:', error);
			showNotification('An error occurred while fetching images.', 'error');
		});
};

searchFormEl.addEventListener('submit', onSearchFormSubmit);
