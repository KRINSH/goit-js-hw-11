import SimpleLightbox from 'simplelightbox'
import 'simplelightbox/dist/simple-lightbox.min.css'

const gallery = document.querySelector('.gallery')
const loader = document.querySelector('.loader')

const lightbox = new SimpleLightbox('.gallery a', {
	captionsData: 'alt',
	captionPosition: 'bottom',
	captionDelay: 250,
})

const createGalleryItem = ({
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

const createGallery = images => {
	const markup = images.map(createGalleryItem).join('')
	gallery.innerHTML = markup
	lightbox.refresh()
}

const clearGallery = () => {
	gallery.innerHTML = ''
}

const showLoader = () => {
	loader.classList.remove('hidden')
}

const hideLoader = () => {
	loader.classList.add('hidden')
}

export { clearGallery, createGallery, hideLoader, showLoader }
