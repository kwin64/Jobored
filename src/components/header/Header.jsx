import React from 'react'
import { NavLink } from 'react-router-dom'
import { paths } from '../../utils/routes'
import './Header.scss'

export const Header = () => {
	return (
		<div className='header__container'>
			<div className='logo'></div>
			<div className='title'>Jobored</div>
			<nav>
				<NavLink
					to={paths[0].path}
					className={({ isActive, isPending }) =>
						isPending ? 'pending' : isActive ? 'active' : ''
					}>
					Поиск Вакансий
				</NavLink>
				<NavLink
					to={paths[1].path}
					className={({ isActive, isPending }) =>
						isPending ? 'pending' : isActive ? 'active' : ''
					}>
					Избранное
				</NavLink>
			</nav>
		</div>
	)
}
