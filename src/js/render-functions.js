import SimpleLightbox from 'simplelightbox'
import 'simplelightbox/dist/simple-lightbox.min.css'

const loadingIndicator = document.querySelector('.loading-indicator')
const imageGallery = document.querySelector('.image-gallery')

let simplelightbox = new SimpleLightbox('.gallery-link', {
	captionsData: 'alt',
	captionPosition: 'bottom',
	captionDelay: 250,
})

function renderImageGallery(images) {
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
			}) => `<li class="gallery-item">
      <a class="gallery-link" href=${largeImageURL}>
      <div class="image-container">
        <img class="gallery-image" src="${webformatURL}" alt="${tags}" />
        </div>
        <div class="image-info">
          <div class="info-item">
            <h3 class="info-title">Likes</h3>
            <span class="info-text">${likes}</span>
          </div>
          <div class="info-item">
            <h3 class="info-title">Views</h3>
            <span class="info-text">${views}</span>
          </div>
          <div class="info-item">
            <h3 class="info-title">Comments</h3>
            <span class="info-text">${comments}</span>
          </div>
          <div class="info-item">
            <h3 class="info-title">Downloads</h3>
            <span class="info-text">${downloads}</span>
          </div>
        </div>
      </a>
    </li>`
		)
		.join('')

	imageGallery.innerHTML = markup
	simplelightbox.refresh()
}

function resetGallery() {
	imageGallery.innerHTML = ''
}

function displayLoader() {
	loadingIndicator.classList.remove('hidden')
}

function hideLoadingIndicator() {
	loadingIndicator.classList.add('hidden')
}

export { displayLoader, hideLoadingIndicator, renderImageGallery, resetGallery }
