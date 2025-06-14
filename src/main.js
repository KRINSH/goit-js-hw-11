import iziToast from 'izitoast'
import 'izitoast/dist/css/iziToast.min.css'

import fetchImageData from './js/pixabay-api'
import {
	displayGallery,
	displayLoadingIndicator,
	removeGalleryContent,
	removeLoadingIndicator,
} from './js/render-functions'

const imageSearchForm = document.querySelector('.search-container')

imageSearchForm.addEventListener('submit', processImageSearch)

function processImageSearch(event) {
	event.preventDefault()

	const searchInput = event.target.elements['search-text'].value.trim()

	if (!searchInput) {
		displayErrorMessage('Please enter a search query')
		return
	}

	removeGalleryContent()
	displayLoadingIndicator()

	fetchImageData(searchInput)
		.then(({ hits }) => {
			if (hits.length === 0) {
				displayInfoMessage(
					'No images found. Please try a different search term.'
				)
				return
			}
			displayGallery(hits)
		})
		.catch(error => {
			displayErrorMessage('Failed to fetch images. Please try again later.')
		})
		.finally(() => {
			removeLoadingIndicator()
			event.target.reset()
		})
}

function displayErrorMessage(message) {
	iziToast.error({
		message,
		position: 'topRight',
		messageSize: '16px',
		messageLineHeight: '24px',
		messageColor: '#fafafb',
		closeOnClick: true,
	})
}

function displayInfoMessage(message) {
	iziToast.info({
		message,
		position: 'topRight',
		messageSize: '16px',
		messageLineHeight: '24px',
		messageColor: '#fafafb',
		closeOnClick: true,
	})
}
