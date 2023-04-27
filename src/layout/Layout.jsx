import React from 'react'
import { Header } from '../components/header/Header'
import './Layout.scss'

export const Layout = ({ children }) => {
	return (
		<div className='layout__container'>
			<Header />
			<div className='main__content'>{children}</div>
		</div>
	)
}
