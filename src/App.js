import { Navigate, Route, Routes } from 'react-router-dom'
import { Loader } from './components/loader/Loader'
import './index.scss'
import { Layout } from './layout/Layout'

function App() {
	return (
		<Layout>
			<Routes>
				<Route
					path='/'
					element={<Loader />}
				/>

				{/* <Route path="*" element={< />} /> */}
			</Routes>
		</Layout>
	)
}

export default App
