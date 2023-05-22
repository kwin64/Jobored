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

	const addBookmark = id => {}

	return (
		<div className={loadingVacancies === 'loading' ? 'loader' : 'vacancies'}>
			{loadingVacancies === 'loading' ? (
				<Loader />
			) : vacancies?.length > 0 && loadingVacancies === 'loaded' ? (
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
				<NotFound description={'Упс, ничего не найдено!'} />
			)}
		</div>
	)
}
