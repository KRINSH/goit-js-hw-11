import iziToast from 'izitoast'
import 'izitoast/dist/css/iziToast.min.css'

import fetchPhotoCollection from './js/pixabay-api'
import {
	activateSpinner,
	buildPhotoGrid,
	deactivateSpinner,
	emptyPhotoContainer,
} from './js/render-functions'

const form = document.querySelector('.form')

form.addEventListener('submit', handleSearchImages)

deactivateSpinner()

function handleSearchImages(event) {
	event.preventDefault()
	emptyPhotoContainer()
	activateSpinner()
	const searchImage = event.target.elements['search-text'].value.trim()

	if (!searchImage) {
		iziToast.error({
			message: 'Please enter some valid search value!',
			messageSize: '16px',
			messageLineHeight: '24px',
			messageColor: '#fafafb',
			closeOnClick: true,
			position: 'topRight',
		})
		deactivateSpinner()
		return
	}

	fetchPhotoCollection(searchImage)
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
				deactivateSpinner()
				return
			}
			buildPhotoGrid(hits)
		})
		.catch(error =>
			iziToast.error({
				message: `${error.message}. Please try again later`,
				closeOnClick: true,
				position: 'topRight',
			})
		)
		.finally(() => {
			deactivateSpinner()
			form.reset()
		})
}
