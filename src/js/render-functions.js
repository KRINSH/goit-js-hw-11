import SimpleLightbox from 'simplelightbox'
import 'simplelightbox/dist/simple-lightbox.min.css'

const loadingIndicator = document.querySelector('.loading-indicator')
const photoGrid = document.querySelector('.photo-grid')

const lightbox = new SimpleLightbox('.photo-link', {
	captionsData: 'alt',
	captionPosition: 'bottom',
	captionDelay: 250,
})

function createPhotoGrid(images) {
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

function clearPhotoGrid() {
	photoGrid.innerHTML = ''
}

function showLoadingIndicator() {
	loadingIndicator.classList.add('visible')
}

function hideLoadingIndicator() {
	loadingIndicator.classList.remove('visible')
}

export {
	clearPhotoGrid as clearGallery,
	createPhotoGrid as createGallery,
	hideLoadingIndicator as hideLoader,
	showLoadingIndicator as showLoader,
}
