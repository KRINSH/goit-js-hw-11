import iziToast from 'izitoast'
import 'izitoast/dist/css/iziToast.min.css'

import searchImages from './js/pixabay-api'
import {
	clearGallery,
	createGallery,
	hideLoader,
	showLoader,
} from './js/render-functions'

const searchForm = document.querySelector('.search-form')

const displayNotification = (message, type = 'error') => {
	iziToast[type]({
		message,
		position: 'topRight',
		messageSize: '16px',
		messageLineHeight: '24px',
		messageColor: '#fafafb',
		closeOnClick: true,
	})
}

const handleFormSubmit = async event => {
	event.preventDefault()

	const searchQuery = event.target.elements.searchQuery.value.trim()

	if (!searchQuery) {
		displayNotification('Please enter a search query')
		return
	}

	clearGallery()
	showLoader()

	try {
		const { hits } = await searchImages(searchQuery)

		if (hits.length === 0) {
			displayNotification(
				'No images found. Please try a different search term.',
				'info'
			)
			return
		}

		createGallery(hits)
	} catch (error) {
		displayNotification('Failed to fetch images. Please try again later.')
	} finally {
		hideLoader()
		event.target.reset()
	}
}

searchForm.addEventListener('submit', handleFormSubmit)
