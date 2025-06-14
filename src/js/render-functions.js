import SimpleLightbox from 'simplelightbox'
import 'simplelightbox/dist/simple-lightbox.min.css'

const galleryContainer = document.querySelector('.gallery')
const loadingSpinner = document.querySelector('.loader')

const lightboxInstance = new SimpleLightbox('.gallery a', {
	captionsData: 'alt',
	captionPosition: 'bottom',
	captionDelay: 250,
})

const generateImageCard = ({
	webformatURL,
	largeImageURL,
	tags,
	likes,
	views,
	comments,
	downloads,
}) => `
	<li class="gallery-item">
		<a class="gallery-link" href="${largeImageURL}">
			<img class="gallery-image" src="${webformatURL}" alt="${tags}" loading="lazy" />
			<div class="gallery-info">
				<p class="info-item"><b>Likes</b> ${likes}</p>
				<p class="info-item"><b>Views</b> ${views}</p>
				<p class="info-item"><b>Comments</b> ${comments}</p>
				<p class="info-item"><b>Downloads</b> ${downloads}</p>
			</div>
		</a>
	</li>
`

export function createGallery(images) {
	const markup = images.map(generateImageCard).join('')
	galleryContainer.innerHTML = markup
	lightboxInstance.refresh()
}

export function clearGallery() {
	galleryContainer.innerHTML = ''
}

export function showLoader() {
	loadingSpinner.classList.remove('hidden')
}

export function hideLoader() {
	loadingSpinner.classList.add('hidden')
}
