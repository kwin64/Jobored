import { Loader } from '@mantine/core'
import DOMPurify from 'dompurify'
import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Vacancy from '../../components/vacancy/Vacancy'
import VacanciesService from '../../services/vacanciesService'
import './DetailedVacancy.scss'

const DetailedVacancy = () => {
	const vacancies = useSelector(state => state.vacancies)
	const [loading, setLoading] = React.useState('loading')
	let { idVacancy } = useParams()
	const [currentVacancy, setCurrentVacancy] = React.useState('')

	const addBookmark = id => {
		let storage = JSON.parse(localStorage.getItem('bookmarks'))
		const newVacancy = vacancies.data.objects?.filter(item => item.id === id)[0]
		if (!localStorage.getItem('bookmarks')) {
			localStorage.setItem('bookmarks', JSON.stringify([newVacancy]))
		} else {
			let bookmarks = JSON.parse(localStorage.getItem('bookmarks'))
			bookmarks.push(newVacancy)
			localStorage.setItem('bookmarks', JSON.stringify(bookmarks))
		}
	}

	const fetchCurrentVacancy = async () => {
		await VacanciesService.fetchVacancy(idVacancy).then(vacancy => setCurrentVacancy(vacancy.data))
		setLoading('loaded')
	}

	React.useEffect(() => {
		fetchCurrentVacancy()
	}, [idVacancy])

	return loading === 'loading' ? (
		<div className='container__detailed_vacancy'>
			<Loader style={{ marginTop: '20vh' }} />
		</div>
	) : (
		<div className='container__detailed_vacancy'>
			<Vacancy
				profession={currentVacancy.profession}
				firm_name={currentVacancy.firm_name}
				payment_to={currentVacancy.payment_to}
				currency={currentVacancy.currency}
				id={currentVacancy.id}
				payment_from={currentVacancy.payment_from}
				type_of_work={currentVacancy.type_of_work}
				town={currentVacancy.town}
				favorite={currentVacancy.favorite}
				classname={'preview'}
				changeBookmark={addBookmark}
			/>
			<div
				className='description_vacancy'
				dangerouslySetInnerHTML={{
					__html: DOMPurify.sanitize(currentVacancy.vacancyRichText)
				}}></div>
		</div>
	)
}
export default DetailedVacancy
