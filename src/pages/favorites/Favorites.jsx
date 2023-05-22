import { Pagination } from '@mantine/core'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import NotFound from '../notFound/NotFound'
import './Favorites.scss'

const Favorites = () => {
	const navigate = useNavigate()

	const vacancies = 0
	const handlerOnClick = () => {
		navigate('/')
	}
	return vacancies > 0 ? (
		<div className='container'>
			<div className='favorites'>Favorites</div>
			<div className='pagination'>
				<Pagination />
			</div>
		</div>
	) : (
		<div className='container'>
			<NotFound
				description={'Упс, здесь еще ничего нет!'}
				onClick={handlerOnClick}
				buttonName={'Поиск Вакансий'}
				btnClassName={'btn__favorites'}
			/>
		</div>
	)
}
export default Favorites
