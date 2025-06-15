import iziToast from 'izitoast'
import 'izitoast/dist/css/iziToast.min.css'

import getImagesByQuery from './js/pixabay-api'
import {
	clearGallery,
	createGallery,
	hideLoader,
	showLoader,
} from './js/render-functions'

const form = document.querySelector('.form')

form.addEventListener('submit', handleImageSearch)

hideLoader()

function handleImageSearch(event) {
	event.preventDefault()
	clearGallery()
	showLoader()
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
		hideLoader()
		return
	}

	getImagesByQuery(searchQuery)
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
				hideLoader()
				return
			}
			createGallery(hits)
		})
		.catch(error =>
			iziToast.error({
				message: `${error.message}. Please try again later`,
				closeOnClick: true,
				position: 'topRight',
			})
		)
		.finally(() => {
			hideLoader()
			form.reset()
		})
}
