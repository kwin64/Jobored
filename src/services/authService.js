import instance from '../utils/axios'

export default class AuthService {
	static async authMe(params) {
		return instance.get('oauth2/password/', { params })
	}
}
