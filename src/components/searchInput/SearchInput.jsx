import React from 'react'
import './SearchInput.scss'

export const SearchInput = () => {
	return (
		<div>
			<div className='search__img'></div>
			<input
				className='search'
				placeholder='Введите название вакансии'></input>
		</div>
	)
}
