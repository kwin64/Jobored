import { Route, Routes } from 'react-router-dom'
import './index.scss'
import { Layout } from './layout/Layout'
import { paths } from './utils/routes'

function App() {
	return (
		<Layout>
			<Routes>
				{paths.map(({ path, component }) => (
					<Route
						path={path}
						element={component}
					/>
				))}
			</Routes>
		</Layout>
	)
}

export default App
