import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../components/header/Header'
import './Layout.scss'

export const Layout = () => {
	return (
		<div className='layout__container'>
			<Header />
			<div className='main__content'>
				<Outlet />
			</div>
		</div>
	)
}
