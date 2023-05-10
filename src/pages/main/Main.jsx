import { Loader, Pagination } from '@mantine/core'
import React from 'react'
import { useSelector } from 'react-redux'
import { Filter } from '../../components/filter/Filter'
import { SearchInput } from '../../components/searchInput/SearchInput'
import { Vacancies } from '../../components/vacancies/Vacancies'
import './Main.scss'

const Main = () => {
	const dataVacancies = useSelector(state => state.vacancies.data.objects)
	const loadingVacancies = useSelector(state => state.vacancies.status)

	if (loadingVacancies === 'loading') {
		return <Loader />
	}
	return (
		<div className='main__container'>
			<Filter />
			<div className='content__container'>
				<div className='vacancies__container'>
					<SearchInput />
					<Vacancies vacancies={dataVacancies} />
				</div>
				<div className='pagination'>
					<Pagination />
				</div>
			</div>
		</div>
	)
}

export default Main
