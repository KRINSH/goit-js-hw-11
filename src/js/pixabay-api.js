import axios from 'axios'

const PIXABAY_API_KEY = '36979931-b9ebd2c49fac6caefdf5e0dc3'

function fetchImageData(searchTerm) {
	return axios
		.get(`https://pixabay.com/api/`, {
			params: {
				key: PIXABAY_API_KEY,
				q: searchTerm,
				image_type: 'photo',
				orientation: 'horizontal',
				safesearch: true,
			},
		})
		.then(response => response.data)
}

export default fetchImageData
