import React from 'react'
import './Layout.scss'

export const Layout = ({ children }) => {
	return (
		<div className=''>
			<div>header</div>
			<div>content</div>
			{children}
		</div>
	)
}
