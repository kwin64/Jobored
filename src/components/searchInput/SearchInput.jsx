import React from 'react'
import { useSelector } from 'react-redux'
import Button from '../button/Button'
import './SearchInput.scss'

export const SearchInput = ({ getCurrentValueInput }) => {
	const loadingVacancies = useSelector(state => state.vacancies.status)

	const [currentValueInput, setCurrentValueInput] = React.useState('')

	const handlerSearch = () => {
		getCurrentValueInput(currentValueInput.trim())
		setCurrentValueInput('')
	}

	const handleChangeInput = e => {
		setCurrentValueInput(e.target.value)
	}

	const handleKeyDown = e => {
		if (e.key === 'Enter') {
			e.preventDefault()
			getCurrentValueInput(currentValueInput.trim())
			setCurrentValueInput('')
		}
	}

	return (
		<div
			className='search'
			data-elem='search-input'>
			<div className='icon'></div>
			<input
				className='input'
				placeholder='Введите название вакансии'
				onChange={handleChangeInput}
				value={currentValueInput}
				onKeyDown={handleKeyDown}
				disabled={loadingVacancies === 'loading' ? true : false}
			/>
			<Button
				name={'Поиск'}
				btnClassName={'btn__input'}
				onClick={handlerSearch}
			/>
		</div>
	)
}
