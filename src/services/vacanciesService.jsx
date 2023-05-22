import instance from '../utils/axios'

export default class VacanciesService {
	static async fetchVacancies(params) {
		return instance.get('vacancies', { params })
	}
	static async fetchVacancy(id) {
		return instance.get(`vacancies/${id}`)
	}
	static async fetchCatalogues() {
		return instance.get(`catalogues`)
	}
}
