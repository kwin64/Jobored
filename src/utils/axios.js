import axios from 'axios'

const instance = axios.create({
	baseURL: process.env.REACT_APP_URL,
	withCredentials: true
})

instance.interceptors.request.use(config => {
	let token = window.localStorage.getItem('token')

	if (token) {
		config.headers.Authorization = `Bearer ${token}`
	}
	config.headers['X-Api-App-Id'] = process.env.REACT_APP_CLIENT_SECRET
	config.headers['x-secret-key'] = process.env.REACT_APP_SECRET_KEY

	return config
})

export default instance
