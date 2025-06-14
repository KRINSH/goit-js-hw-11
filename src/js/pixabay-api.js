import axios from 'axios'

const API_KEY = '36979931-b9ebd2c49fac6caefdf5e0dc3'
const BASE_URL = 'https://pixabay.com/api/'

const fetchImages = async searchQuery => {
	const params = {
		key: API_KEY,
		q: searchQuery,
		image_type: 'photo',
		orientation: 'horizontal',
		safesearch: true,
	}

	try {
		const response = await axios.get(BASE_URL, { params })
		return response.data
	} catch (error) {
		throw new Error('Failed to fetch images')
	}
}

export default fetchImages
