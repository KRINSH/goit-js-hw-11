import iziToast from 'izitoast'
import 'izitoast/dist/css/iziToast.min.css'

import getImagesByQuery from './js/pixabay-api'
import {
	clearGallery,
	createGallery,
	hideLoader,
	showLoader,
} from './js/render-functions'

const searchForm = document.querySelector('.search-container')

searchForm.addEventListener('submit', handleSearch)

function handleSearch(event) {
	event.preventDefault()

	const searchQuery = event.target.elements['search-text'].value.trim()

	if (!searchQuery) {
		showError('Please enter a search query')
		return
	}

	clearGallery()
	showLoader()

	getImagesByQuery(searchQuery)
		.then(({ hits }) => {
			if (hits.length === 0) {
				showInfo('No images found. Please try a different search term.')
				return
			}
			createGallery(hits)
		})
		.catch(error => {
			showError('Failed to fetch images. Please try again later.')
		})
		.finally(() => {
			hideLoader()
			event.target.reset()
		})
}

function showError(message) {
	iziToast.error({
		message,
		position: 'topRight',
		messageSize: '16px',
		messageLineHeight: '24px',
		messageColor: '#fafafb',
		closeOnClick: true,
	})
}

function showInfo(message) {
	iziToast.info({
		message,
		position: 'topRight',
		messageSize: '16px',
		messageLineHeight: '24px',
		messageColor: '#fafafb',
		closeOnClick: true,
	})
}
