import iziToast from 'izitoast'
import 'izitoast/dist/css/iziToast.min.css'

import fetchImageGallery from './js/pixabay-api'
import {
	displayLoader,
	hideLoadingIndicator,
	renderImageGallery,
	resetGallery,
} from './js/render-functions'

const searchForm = document.querySelector('.search-form')

searchForm.addEventListener('submit', handleImageSearch)

hideLoadingIndicator()

function handleImageSearch(event) {
	event.preventDefault()
	resetGallery()
	displayLoader()
	const searchQuery = event.target.elements['search-text'].value.trim()

	if (!searchQuery) {
		iziToast.error({
			message: 'Please enter some valid search value!',
			messageSize: '16px',
			messageLineHeight: '24px',
			messageColor: '#fafafb',
			closeOnClick: true,
			position: 'topRight',
		})
		hideLoadingIndicator()
		return
	}

	fetchImageGallery(searchQuery)
		.then(({ hits }) => {
			if (hits.length === 0) {
				iziToast.error({
					message:
						'Sorry, there are no images matching your search query. Please try again!',
					messageSize: '16px',
					messageLineHeight: '24px',
					messageColor: '#fafafb',
					closeOnClick: true,
					position: 'topRight',
				})
				hideLoadingIndicator()
				return
			}
			renderImageGallery(hits)
		})
		.catch(error =>
			iziToast.error({
				message: `${error.message}. Please try again later`,
				closeOnClick: true,
				position: 'topRight',
			})
		)
		.finally(() => {
			hideLoadingIndicator()
			searchForm.reset()
		})
}
