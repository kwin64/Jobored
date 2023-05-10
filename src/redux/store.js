import { configureStore } from '@reduxjs/toolkit'
import { authReducer } from './slices/auth'
import { vacanciesReducer } from './slices/vacancies'

const store = configureStore({
	reducer: {
		auth: authReducer,
		vacancies: vacanciesReducer
	}
})

export default store
