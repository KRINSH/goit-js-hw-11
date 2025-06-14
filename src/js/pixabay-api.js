import axios from 'axios'

const API_KEY = '36979931-b9ebd2c49fac6caefdf5e0dc3'
const BASE_URL = 'https://pixabay.com/api/'

const searchImages = async searchTerm => {
	const requestParams = {
		key: API_KEY,
		q: searchTerm,
		image_type: 'photo',
		orientation: 'horizontal',
		safesearch: true,
	}

	try {
		const response = await axios.get(BASE_URL, { params: requestParams })
		return response.data
	} catch (error) {
		throw new Error('Failed to fetch images')
	}
}

export default searchImages
