import Main from '../pages/main/Main'
import NotFound from '../pages/notFound/NotFound'
import Favorites from '../pages/favorites/Favorites'
import DetailedVacancy from '../pages/detailedVacancy/DetailedVacancy'

export const paths = [
	{ path: '/', component: <Main /> },
	{ path: '/favorites', component: <Favorites /> },
	{ path: '/vacancy/:idVacancy', component: <DetailedVacancy /> },
	{ path: '*', component: <NotFound /> }
]
