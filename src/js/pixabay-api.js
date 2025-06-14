import axios from 'axios'

const PIXABAY_SECRET_KEY = '36979931-b9ebd2c49fac6caefdf5e0dc3'

function fetchPhotoCollection(query) {
	return axios
		.get(`https://pixabay.com/api/`, {
			params: {
				key: PIXABAY_SECRET_KEY,
				q: query,
				image_type: 'photo',
				orientation: 'horizontal',
				safesearch: true,
			},
		})
		.then(resp => resp.data)
}

export default fetchPhotoCollection
