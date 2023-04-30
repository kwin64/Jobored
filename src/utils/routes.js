import { Favorites } from "../pages/favorites/Favorites";
import { Main } from "../pages/main/Main";
import { NotFound } from "../pages/notFound/NotFound";


export const paths = [
	{ path: '/', component: <Main /> },
	{ path: '/favorites', component: <Favorites /> },
	{ path: '*', component: <NotFound /> }
]
