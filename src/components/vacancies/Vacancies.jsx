import React from 'react'
import './Vacancies.scss'
import Bookmark from '../bookmark/Bookmark'
import locationIcon from '../../assets/location.svg'

export const Vacancies = ({ vacancies }) => {
	const [bookmark, setBookmark] = React.useState(true)

	return (
		<div className='vacancies'>
			{vacancies?.map(
				({ profession, firm_name, payment_to, currency, id, payment_from, type_of_work, town }) => (
					<div
						key={id}
						className='vacancy'>
						<div className='vacancy__title__container'>
							<span className='vacancy__title'>
								{profession} {firm_name ? firm_name : ''}
							</span>
							<Bookmark color={bookmark ? '#5E96FC' : 'none'} />
						</div>

						<div className='vacancy__description'>
							{payment_to > 0 && payment_from > 0 ? (
								<div className='vacancy__salary'>
									з/п {payment_to}
									{payment_from ? ' - ' + payment_from + ' ' + currency : ''}
									<div className='dot'>•</div>
								</div>
							) : payment_to > 0 && payment_from === 0 ? (
								<div className='vacancy__salary'>
									з/п от {payment_to} {currency}
									<div className='dot'>•</div>
								</div>
							) : payment_to === 0 && payment_from > 0 ? (
								<div className='vacancy__salary'>
									з/п {payment_from} {currency}
									<div className='dot'>•</div>
								</div>
							) : (
								''
							)}

							<div className='vacancy__type__work'>{type_of_work.title}</div>
						</div>
						<div className='vacancy__location'>
							<img
								src={locationIcon}
								alt=''
							/>
							<div className='vacancy__location__city'>{town.title}</div>
						</div>
					</div>
				)
			)}
		</div>
	)
}
