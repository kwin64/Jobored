import { Loader } from '@mantine/core'
import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../components/header/Header'
import './Layout.scss'

export const Layout = () => {
	return (
		<div className='layout__container'>
			<Header />
			<div className='main__content'>
				<Suspense fallback={<Loader />}>
					<Outlet />
				</Suspense>
			</div>
		</div>
	)
}
