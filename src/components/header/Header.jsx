import React from 'react'
import './Header.scss'

export const Header = () => {
	return (
		<div className='header__container'>
			<div className='logo'></div>
			<div className='title'>Jobored</div>
			<a href=''>Поиск Вакансий</a>
			<a href=''>Избранное</a>
		</div>
	)
}
