import instance from '../utils/axios'

export default class AuthService {
	static async auth(params) {
		return instance.get('oauth2/password/', { params })
	}
}
