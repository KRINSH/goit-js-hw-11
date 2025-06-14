import iziToast from 'izitoast'
import 'izitoast/dist/css/iziToast.min.css'
import { getImagesByQuery } from './js/pixabay-api'
import {
	clearGallery,
	createGallery,
	hideLoadMore,
	hideLoader,
	scrollToNewPhotos,
	showLoadMore,
	showLoader,
} from './js/render-functions'

const searchForm = document.querySelector('.search-form')
const loadMoreBtn = document.querySelector('.load-more-btn')

let currentPage = 1
let currentQuery = ''

searchForm.addEventListener('submit', async event => {
	event.preventDefault()
	currentPage = 1
	currentQuery = event.target.searchQuery.value.trim()

	if (!currentQuery) {
		iziToast.error({
			title: 'Error',
			message: 'Please enter a search query',
			position: 'topRight',
		})
		return
	}

	clearGallery()
	hideLoadMore()
	showLoader()

	try {
		const images = await getImagesByQuery(currentQuery, currentPage)

		if (images.hits.length === 0) {
			iziToast.info({
				title: 'Info',
				message:
					'Sorry, there are no images matching your search query. Please try again!',
				position: 'topRight',
			})
			return
		}

		createGallery(images.hits)

		if (images.totalHits > currentPage * 40) {
			showLoadMore()
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

loadMoreBtn.addEventListener('click', async () => {
	currentPage += 1
	showLoader()

	try {
		const images = await getImagesByQuery(currentQuery, currentPage)
		createGallery(images.hits)
		scrollToNewPhotos()

		if (images.totalHits <= currentPage * 40) {
			hideLoadMore()
			iziToast.info({
				title: 'Info',
				message: "We're sorry, but you've reached the end of search results.",
				position: 'topRight',
			})
		}
	} catch (error) {
		iziToast.error({
			title: 'Error',
			message:
				'An error occurred while loading more images. Please try again later.',
			position: 'topRight',
		})
	} finally {
		hideLoader()
	}
})
