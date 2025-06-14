import axios from 'axios'

const API_KEY = '43934597-0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c'
const BASE_URL = 'https://pixabay.com/api/'

export async function getImagesByQuery(query, page = 1) {
	const params = {
		key: API_KEY,
		q: query,
		image_type: 'photo',
		orientation: 'horizontal',
		safesearch: true,
		page: page,
		per_page: 40,
	}

	try {
		const response = await axios.get(BASE_URL, { params })
		return response.data
	} catch (error) {
		throw new Error('Failed to fetch images')
	}
}
