import React from 'react'
import './Vacancies.scss'

export const Vacancies = ({ vacancies }) => {
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
							<div className='vacancy__bookmark'>bookmark</div>
						</div>
						<div>
							<div>
								з/п от {payment_to} {currency} - {payment_from ? payment_from + currency : ''}
							</div>
							<div>{type_of_work.title}</div>
						</div>
						<div>
							<div>icon</div>
							<div>{town.title}</div>
						</div>
					</div>
				)
			)}
		</div>
	)
}
