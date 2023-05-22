import { Pagination } from '@mantine/core'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Filter from '../../components/filter/Filter'
import { SearchInput } from '../../components/searchInput/SearchInput'
import { Vacancies } from '../../components/vacancies/Vacancies'
import { fetchVacancies } from '../../redux/slices/vacancies'
import './Main.scss'

const Main = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const dataVacancies = useSelector(state => state.vacancies.data.objects)
	const totalVacancies = useSelector(state => state.vacancies.data.total)
	const loadingVacancies = useSelector(state => state.vacancies.status)

	const [keywordVacancies, setKeywordVacancies] = React.useState('')
	const [paymentFromVacancies, setPaymentFromVacancies] = React.useState('')
	const [paymentToVacancies, setPaymentToVacancies] = React.useState('')
	const [currentCatalog, setCurrentCatalog] = React.useState(0)

	const [activePage, setPage] = React.useState(1)

	const changeFilterValues = (catalog, valueFrom, valueTo) => {
		setPaymentFromVacancies(valueFrom)
		setPaymentToVacancies(valueTo)
		setCurrentCatalog(catalog)
	}

	const getCurrentValueInput = value => {
		setKeywordVacancies(value)
		setPage(1)
	}

	React.useEffect(() => {
		let token = window.localStorage.getItem('token')

		token &&
			dispatch(
				fetchVacancies({
					published: 1,
					keyword: keywordVacancies,
					payment_from: paymentFromVacancies,
					payment_to: paymentToVacancies,
					catalogues: currentCatalog,
					count: 4,
					no_agreement: 1,
					page: activePage - 1
				})
			)

		navigate(
			{
				pathname: '/',
				search: `keyword=${keywordVacancies}&catalogues=${currentCatalog}&payment_from=${paymentFromVacancies}&payment_to=${paymentToVacancies}`
			},
			{ replace: false }
		)
	}, [
		dispatch,
		keywordVacancies,
		paymentFromVacancies,
		paymentToVacancies,
		currentCatalog,
		activePage
	])

	React.useEffect(() => {}, [])

	return (
		<div className='main__container'>
			<Filter
				changeFilterValues={changeFilterValues}
				paymentFromVacancies={paymentFromVacancies}
				paymentToVacancies={paymentToVacancies}
				currentCatalog={currentCatalog}
			/>
			<div className='content__container'>
				<div className='vacancies__container'>
					<SearchInput getCurrentValueInput={getCurrentValueInput} />
					<Vacancies vacancies={dataVacancies} />
				</div>
				<div className='pagination'>
					{(loadingVacancies === 'loaded' && dataVacancies?.length === 0) ||
					loadingVacancies === 'loading' ? null : (
						<Pagination
							total={totalVacancies > 500 ? 125 : Math.ceil(totalVacancies / 4)}
							value={activePage}
							onChange={setPage}
							disabled={loadingVacancies === 'loading' ? true : false}
							withControls={totalVacancies > 4 ? true : false}
						/>
					)}
				</div>
			</div>
		</div>
	)
}

export default Main
