import iziToast from 'izitoast'
import 'izitoast/dist/css/iziToast.min.css'

import { getImagesByQuery } from './js/pixabay-api'
import {
	clearGallery,
	createGallery,
	hideLoader,
	showLoader,
} from './js/render-functions'

const searchForm = document.querySelector('.form')

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
		const { hits } = await getImagesByQuery(searchQuery)

		if (hits.length === 0) {
			displayNotification(
				'Sorry, there are no images matching your search query. Please try again!',
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
