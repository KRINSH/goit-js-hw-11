import iziToast from 'izitoast'
import 'izitoast/dist/css/iziToast.min.css'
import getImagesByQuery from './pixabay-api'
import {
	clearGallery,
	createGallery,
	hideLoader,
	showLoader,
} from './render-functions'

const form = document.querySelector('.form')
const searchInput = form.querySelector('input[name="searchQuery"]')

form.addEventListener('submit', async event => {
	event.preventDefault()
	const query = searchInput.value.trim()

	if (!query) {
		iziToast.error({
			title: 'Error',
			message: 'Please enter a search query',
			position: 'topRight',
		})
		return
	}

	clearGallery()
	showLoader()

	try {
		const response = await getImagesByQuery(query)
		if (response.hits.length === 0) {
			iziToast.info({
				title: 'Info',
				message:
					'Sorry, there are no images matching your search query. Please try again!',
				position: 'topRight',
			})
		} else {
			createGallery(response)
		}
	} catch (error) {
		iziToast.error({
			title: 'Error',
			message:
				'An error occurred while fetching images. Please try again later.',
			position: 'topRight',
		})
	} finally {
		hideLoader()
	}
})
