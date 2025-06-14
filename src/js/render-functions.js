import SimpleLightbox from 'simplelightbox'
import 'simplelightbox/dist/simple-lightbox.min.css'

const loadingIndicator = document.querySelector('.loading-indicator')
const photoGrid = document.querySelector('.photo-grid')

const lightbox = new SimpleLightbox('.photo-link', {
	captionsData: 'alt',
	captionPosition: 'bottom',
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
        <div class="photo-card">
          <a class="photo-link" href="${largeImageURL}">
            <div class="photo-image-wrapper">
              <img class="photo-image" src="${webformatURL}" alt="${tags}" />
            </div>
            <div class="photo-info">
              <div class="info-item">
                <span class="info-label">Likes</span>
                <span class="info-value">${likes}</span>
              </div>
              <div class="info-item">
                <span class="info-label">Views</span>
                <span class="info-value">${views}</span>
              </div>
              <div class="info-item">
                <span class="info-label">Comments</span>
                <span class="info-value">${comments}</span>
              </div>
              <div class="info-item">
                <span class="info-label">Downloads</span>
                <span class="info-value">${downloads}</span>
              </div>
            </div>
          </a>
        </div>
      `
		)
		.join('')

	photoGrid.innerHTML = markup
	lightbox.refresh()
}

function clearGallery() {
	photoGrid.innerHTML = ''
}

function showLoader() {
	loadingIndicator.classList.add('visible')
}

function hideLoader() {
	loadingIndicator.classList.remove('visible')
}

export { clearGallery, createGallery, hideLoader, showLoader }
