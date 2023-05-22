import { Loader } from '@mantine/core'
import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Vacancy from '../vacancy/Vacancy'
import './Vacancies.scss'
import NotFound from '../../pages/notFound/NotFound'

export const Vacancies = ({ vacancies }) => {
	const loadingVacancies = useSelector(state => state.vacancies.status)
	const navigate = useNavigate()

	const detailedVacancy = id => {
		navigate(`/vacancy/${id}`)
	}

	const addBookmark = id => {
		let storage = JSON.parse(localStorage.getItem('bookmarks'))
		const newVacancy = vacancies?.filter(item => item.id === id)[0]
		if (storage) {
			let bookmarks = JSON.parse(localStorage.getItem('bookmarks'))
			bookmarks.push(newVacancy)
			localStorage.setItem('bookmarks', JSON.stringify(bookmarks))
		}
		// if (storage && storage.map(item => item.id === id)) {
		// 	const bookmarks = JSON.parse(localStorage.getItem('bookmarks'))
		// 	const newBookmarks = bookmarks.filter(vacancy => vacancy.id !== id)
		// 	localStorage.setItem('bookmarks', JSON.stringify(newBookmarks))
		// }
		// else {
		// 	console.log('2')
		// 	let bookmarks = JSON.parse(localStorage.getItem('bookmarks'))
		// 	bookmarks.push(newVacancy)
		// 	localStorage.setItem('bookmarks', JSON.stringify(bookmarks))
		// }

		// if (storage.length > 0 && storage.filter(item => item.id === id)) {
		// 	const vacancies = storage.filter(item => item.id !== id)
		// 	localStorage.setItem('bookmarks', JSON.stringify(vacancies))
		// }

		// if (storage.filter(item => item.id !== id)) {
		// 	console.log(id)
		// 	const newVacancy = vacancies.data.objects?.filter(item => item.id === id)[0]
		// 	storage.push(newVacancy)
		// 	localStorage.setItem('bookmarks', JSON.stringify(storage))
		// }
		// if (storage.length === 0 || storage.filter(item => item.id !== id)) {
		// 	const newVacancy = vacancies.data.objects?.filter(item => item.id === id)
		// 	storage.push(newVacancy)
		// 	localStorage.setItem('bookmarks', JSON.stringify(storage))
		// }
	}

	return (
		<div className={loadingVacancies === 'loading' ? 'loader' : 'vacancies'}>
			{loadingVacancies === 'loading' ? (
				<Loader />
			) : vacancies?.length > 0 ? (
				vacancies?.map(
					({
						profession,
						firm_name,
						payment_to,
						currency,
						id,
						payment_from,
						type_of_work,
						town,
						favorite
					}) => (
						<Vacancy
							key={id}
							profession={profession}
							firm_name={firm_name}
							payment_to={payment_to}
							currency={currency}
							id={id}
							payment_from={payment_from}
							type_of_work={type_of_work}
							town={town}
							favorite={favorite}
							classname={'vacancy'}
							detailedVacancy={detailedVacancy}
							changeBookmark={addBookmark}
						/>
					)
				)
			) : (
				<NotFound description={'Упс, ничего не найдено!'}/>
			)}
		</div>
	)
}
