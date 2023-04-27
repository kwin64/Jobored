import { Favorites } from '../components/favorites/Favorites'
import { Main } from '../components/main/Main'
import { NotFound } from '../components/notFound/NotFound'

export const paths = [
	{ path: '/', component: <Main /> },
	{ path: '/favorites', component: <Favorites /> },
	{ path: '*', component: <NotFound /> }
]
