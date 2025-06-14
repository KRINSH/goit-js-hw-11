import SimpleLightbox from 'simplelightbox'
import 'simplelightbox/dist/simple-lightbox.min.css'

const loader = document.querySelector('.loader')
const gallery = document.querySelector('.gallery')
const loadMoreBtn = document.querySelector('.load-more-btn')

let lightbox = new SimpleLightbox('.gallery a', {
	captionsData: 'alt',
	captionDelay: 250,
})

function createGallery(images) {
	const markup = images
		.map(
			({
				webformatURL,
				largeImageURL,
				tags,
				likes,
				views,
				comments,
				downloads,
			}) => `
				<li class="gallery-item">
					<a href="${largeImageURL}">
						<img src="${webformatURL}" alt="${tags}" class="gallery-image" />
						<div class="image-inform">
							<div>
								<h3 class="image-inform-title">Likes</h3>
								<p class="image-inform-text">${likes}</p>
							</div>
							<div>
								<h3 class="image-inform-title">Views</h3>
								<p class="image-inform-text">${views}</p>
							</div>
							<div>
								<h3 class="image-inform-title">Comments</h3>
								<p class="image-inform-text">${comments}</p>
							</div>
							<div>
								<h3 class="image-inform-title">Downloads</h3>
								<p class="image-inform-text">${downloads}</p>
							</div>
						</div>
					</a>
				</li>
			`
		)
		.join('')

	gallery.insertAdjacentHTML('beforeend', markup)
	lightbox.refresh()
}

function clearGallery() {
	gallery.innerHTML = ''
}

function showLoader() {
	loader.classList.remove('hidden')
}

function hideLoader() {
	loader.classList.add('hidden')
}

function showLoadMore() {
	loadMoreBtn.classList.remove('hidden')
}

function hideLoadMore() {
	loadMoreBtn.classList.add('hidden')
}

function scrollToNewPhotos() {
	const { height: cardHeight } = document
		.querySelector('.gallery-item')
		.getBoundingClientRect()

	window.scrollBy({
		top: cardHeight * 2,
		behavior: 'smooth',
	})
}

export {
	clearGallery,
	createGallery,
	hideLoadMore,
	hideLoader,
	scrollToNewPhotos,
	showLoadMore,
	showLoader,
}
