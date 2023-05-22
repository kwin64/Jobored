import { NumberInput, Select } from '@mantine/core'
import React from 'react'
import { useSelector } from 'react-redux'
import Button from '../button/Button'
import './Filter.scss'

const Filter = ({
	changeFilterValues,
	paymentFromVacancies,
	paymentToVacancies,
	currentCatalog
}) => {
	const catalogues = useSelector(state => state.vacancies.catalogues)
	const [currentCatalogValue, setCurrentCatalogValue] = React.useState(currentCatalog)
	const [currentPaymentFromValue, setCurrentPaymentFromValue] = React.useState(paymentFromVacancies)
	const [currentPaymentToValue, setCurrentPaymentToValue] = React.useState(paymentToVacancies)

	const filteredVacancy = () => {
		changeFilterValues(currentCatalogValue, currentPaymentFromValue, currentPaymentToValue)
	}

	const resetFilter = () => {
		setCurrentCatalogValue(0)
		setCurrentPaymentFromValue(0)
		setCurrentPaymentToValue(0)
	}

	return (
		<div className='filter'>
			<div className='title'>
				<h1>Фильтры</h1>
				<div
					onClick={resetFilter}
					className='reset'>
					<p>Сбросить все</p>
					<div>x</div>
				</div>
			</div>
			<div className='industry'>
				<h2 className='select__title'>Отрасль</h2>
				<Select
					placeholder='Выберите отрасль'
					data-elem='industry-select'
					value={currentCatalogValue}
					onChange={setCurrentCatalogValue}
					data={catalogues.map(item => ({ value: item.key, label: item.title }))}
				/>
			</div>
			<div className='salary'>
				<h2 className='select__title'>Оклад</h2>
				<NumberInput
					type='number'
					placeholder='От'
					min={0}
					value={currentPaymentFromValue}
					onChange={setCurrentPaymentFromValue}
					data-elem={'salary-from-input'}
				/>
				<NumberInput
					type='number'
					placeholder='До'
					min={0}
					value={currentPaymentToValue}
					onChange={setCurrentPaymentToValue}
					data-elem='salary-to-input'
				/>
			</div>
			<Button
				name={'Применить'}
				btnClassName={'btn__filter'}
				onClick={filteredVacancy}
			/>
		</div>
	)
}

export default Filter
