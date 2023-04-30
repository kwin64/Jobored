import axios from 'axios'

const instance = axios.create({
	baseURL: process.env.REACT_APP_URL,
	withCredentials: true
})

instance.interceptors.request.use(config => {
	config.headers['x-secret-key'] = process.env.REACT_APP_SECRET_KEY
	return config
})

export default instance
