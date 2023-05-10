import { lazy } from 'react'

const Favorites = lazy(() => import('../pages/favorites/Favorites'))
const Main = lazy(() => import('../pages/main/Main'))
const NotFound = lazy(() => import('../pages/notFound/NotFound'))

export const paths = [
	{ path: '/', component: <Main /> },
	{ path: '/favorites', component: <Favorites /> },
	{ path: '*', component: <NotFound /> }
]
