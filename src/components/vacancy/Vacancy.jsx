import React from 'react'
import Bookmark from '../bookmark/Bookmark'
import locationIcon from '../../assets/location.svg'
import './Vacancy.scss'

const Vacancy = ({
	detailedVacancy,
	id,
	profession,
	firm_name,
	favorite,
	changeBookmark,
	payment_to,
	payment_from,
	currency,
	type_of_work,
	town,
	classname
}) => {
	const handlerOpenVacancy = id => {
		if (classname === 'vacancy') {
			detailedVacancy(id)
		}
	}

	return (
		<div
			onClick={() => handlerOpenVacancy(id)}
			key={id}
			className={classname}>
			<div className='vacancy__title__container'>
				<span className='vacancy__title'>
					{profession} {firm_name ? firm_name : ''}
				</span>
				<Bookmark
					color={favorite ? '#5E96FC' : 'none'}
					onClick={() => changeBookmark(id)}
					id={id}
				/>
			</div>

			<div className='vacancy__description'>
				{payment_to > 0 && payment_from > 0 ? (
					<div className='vacancy__salary'>
						з/п {payment_from}
						{payment_to ? ' - ' + payment_to + ' ' + currency : ''}
						<div className='dot'>•</div>
					</div>
				) : payment_to > 0 && payment_from === 0 ? (
					<div className='vacancy__salary'>
						з/п от {payment_from} {currency}
						<div className='dot'>•</div>
					</div>
				) : payment_from === 0 && payment_to > 0 ? (
					<div className='vacancy__salary'>
						з/п {payment_to} {currency}
						<div className='dot'>•</div>
					</div>
				) : (
					''
				)}

				<div className='vacancy__type__work'>{type_of_work?.title}</div>
			</div>
			<div className='vacancy__location'>
				<img
					src={locationIcon}
					alt=''
				/>
				<div className='vacancy__location__city'>{town?.title}</div>
			</div>
		</div>
	)
}
export default Vacancy
