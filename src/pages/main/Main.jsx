import { Pagination } from '@mantine/core'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Filter } from '../../components/filter/Filter'
import { SearchInput } from '../../components/searchInput/SearchInput'
import { Vacancies } from '../../components/vacancies/Vacancies'
import { fetchAuth, selectAuthData } from '../../redux/slices/auth'
import './Main.scss'

export const Main = () => {
	const dispatch = useDispatch()
	const isAuth = useSelector(selectAuthData)
	let token = window.localStorage.getItem('token')

	const authInitData = async () => {
		//promise all 
		await dispatch(
			fetchAuth({
				login: process.env.REACT_APP_LOGIN,
				password: process.env.REACT_APP_PASSWORD,
				client_id: process.env.REACT_APP_CLIENT_ID,
				client_secret: process.env.REACT_APP_CLIENT_SECRET,
				hr: process.env.REACT_APP_HR
			})
		)

		await console.log('2')
	}

	React.useEffect(() => {
		!token && authInitData()
	}, [token, dispatch])

	console.log('isAuth', isAuth)
	console.log('token', token)

	return (
		<div className='main__container'>
			<Filter />
			<div className='content__container'>
				<div className='vacancies__container'>
					<SearchInput />
					<Vacancies />
				</div>
				<div className='pagination'>
					<Pagination />
				</div>
			</div>
		</div>
	)
}
