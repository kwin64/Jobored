import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import './index.scss'
import { Layout } from './layout/Layout'
import { fetchAuth } from './redux/slices/auth'
import { fetchVacancies } from './redux/slices/vacancies'
import { paths } from './utils/routes'

function App() {
	const dispatch = useDispatch()
	const keywordVacancies = React.useState('')
	const paymentFromVacancies = React.useState(0)
	const paymentToVacancies = React.useState(100000)

	const initData = async () => {
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

		await dispatch(
			fetchVacancies({
				published: 1,
				keywordVacancies,
				paymentFromVacancies,
				paymentToVacancies,
				catalogues: 33,
				count: 4,
				page: 4
			})
		)
	}

	React.useEffect(() => {
		// !window.localStorage.getItem('token') &&
		initData()
		return window.localStorage.setItem('token', '')
	}, [])

	return (
		<Routes>
			<Route
				path='/'
				element={<Layout />}>
				{paths.map(({ path, component }, index) => (
					<Route
						key={index}
						path={path}
						element={component}
					/>
				))}
			</Route>
		</Routes>
	)
}

export default App
