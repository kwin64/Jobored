import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import './index.scss'
import { Layout } from './layout/Layout'
import { fetchAuth } from './redux/slices/auth'
import { fetchCatalogues } from './redux/slices/vacancies'
import { paths } from './utils/routes'
import { Loader } from './components/loader/Loader'

function App() {
	const dispatch = useDispatch()

	const loadingAuthMe = useSelector(state => state.auth.status)

	const initData = async () => {
		await dispatch(
			fetchAuth({
				login: process.env.REACT_APP_LOGIN,
				password: process.env.REACT_APP_PASSWORD,
				client_id: process.env.REACT_APP_CLIENT_ID,
				client_secret: process.env.REACT_APP_CLIENT_SECRET,
				hr: process.env.REACT_APP_HR
			})
		)

		await dispatch(fetchCatalogues())
	}

	React.useEffect(() => {
		initData()

		!localStorage.getItem('bookmarks') && localStorage.setItem('bookmarks', JSON.stringify([]))

		return window.localStorage.setItem('token', '')
	}, [])

	if (loadingAuthMe === 'loading') {
		return <Loader />
	}

	return (
		<div className='app__container'>
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
		</div>
	)
}

export default App
