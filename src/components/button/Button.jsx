import React from 'react'
import './Button.scss'

const Button = ({ name, btnClassName, onClick }) => {
	const onClickHandler = () => {
		onClick()
	}

	return (
		<button
			className={btnClassName}
			data-elem={'search-button'}
			onClick={onClickHandler}>
			{name}
		</button>
	)
}
export default Button
