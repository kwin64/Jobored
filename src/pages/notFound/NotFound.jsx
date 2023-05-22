import React from 'react'
import frame from '../../assets/Frame.svg'
import Button from '../../components/button/Button'
import './NotFound.scss'

const NotFound = ({ description, onClick, buttonName, btnClassName }) => {
	return (
		<div className='container__notFound'>
			<img
				src={frame}
				alt='frame'
			/>
			<h1>{description}</h1>
			{onClick && (
				<Button
					name={buttonName}
					btnClassName={btnClassName}
					onClick={onClick}
				/>
			)}
		</div>
	)
}
export default NotFound
