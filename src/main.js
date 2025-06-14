import iziToast from 'izitoast'
import 'izitoast/dist/css/iziToast.min.css'

import fetchImages from './js/pixabay-api'
import {
	clearGallery,
	createGallery,
	hideLoader,
	showLoader,
} from './js/render-functions'

const searchForm = document.querySelector('.search-form')

const showNotification = (message, type = 'error') => {
	iziToast[type]({
		message,
		position: 'topRight',
		messageSize: '16px',
		messageLineHeight: '24px',
		messageColor: '#fafafb',
		closeOnClick: true,
	})
}

const handleSearch = async event => {
	event.preventDefault()

	const searchQuery = event.target.elements.searchQuery.value.trim()

	if (!searchQuery) {
		showNotification('Please enter a search query')
		return
	}

	clearGallery()
	showLoader()

	try {
		const { hits } = await fetchImages(searchQuery)

		if (hits.length === 0) {
			showNotification(
				'No images found. Please try a different search term.',
				'info'
			)
			return
		}

		createGallery(hits)
	} catch (error) {
		showNotification('Failed to fetch images. Please try again later.')
	} finally {
		hideLoader()
		event.target.reset()
	}
}

searchForm.addEventListener('submit', handleSearch)
