import { fetchImagesByQuery } from './js/pixabay-api';
import { createGalleryCardTemplate } from './js/render-functions';
import iziToast from 'izitoast';
import SimpleLightbox from 'simplelightbox';

const searchFormEl = document.querySelector('.js-search-form');
const galleryEl = document.querySelector('.js-gallery');
const loaderEl = document.querySelector('.js-loader');
const loadMoreBtnEl = document.querySelector('.load-more');
const endMessageEl = document.querySelector('.end-message');

const simpleLightbox = new SimpleLightbox('.gallery a');

let page = 1;
let inputValue = '';
let cardHeight = 0;
const perPage = 15;

const onSearchFormSubmit = async event => {
	try {
		event.preventDefault();

		inputValue = event.currentTarget.elements.query.value.trim();

		if (inputValue === '') {
			iziToast.warning({
				title: 'Warning',
				message: 'The search field cannot be empty.',
				position: 'topRight',
			});

			return;
		}

		page = 1;

		loadMoreBtnEl.classList.add('is-hidden');

		endMessageEl.classList.add('is-hidden');

		loaderEl.classList.remove('is-hidden');

		const response = await fetchImagesByQuery(inputValue, page);

		if (response.data.total === 0) {
			iziToast.error({
				title: 'Error',
				message:
					'Sorry, there are no images matching your search query. Please try again!',
				position: 'topRight',
			});

			galleryEl.innerHTML = '';

			searchFormEl.reset();

			loaderEl.classList.add('is-hidden');

			return;
		}

		if (response.data.totalHits > perPage) {
			loadMoreBtnEl.classList.remove('is-hidden');

			loadMoreBtnEl.addEventListener('click', onLoadMoreBtnClick);
		} else {
			endMessageEl.classList.remove('is-hidden');
		}
		
		loaderEl.classList.add('is-hidden');

		galleryEl.innerHTML = createGalleryCardTemplate(response.data.hits);
		
		simpleLightbox.refresh();
		
		cardHeight = galleryEl.querySelector('li').getBoundingClientRect().height;

	} catch (err) {
		console.log(err);
	}
};

searchFormEl.addEventListener('submit', onSearchFormSubmit);

const onLoadMoreBtnClick = async event => {
	try {
		page++;

		const response = await fetchImagesByQuery(inputValue, page);

		galleryEl.insertAdjacentHTML('beforeend', createGalleryCardTemplate(response.data.hits));

		scrollBy({
			top: cardHeight * 2,
			behavior: 'smooth',
		})

		simpleLightbox.refresh();

		if (page * perPage >= response.data.totalHits) {
			loadMoreBtnEl.classList.add('is-hidden');

			endMessageEl.classList.remove('is-hidden');

			loadMoreBtnEl.removeEventListener('click', onLoadMoreBtnClick);
		}
	} catch (err) {
		console.log(err);
	}
}
