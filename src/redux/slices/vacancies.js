import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import VacanciesService from '../../services/vacanciesService'

export const fetchVacancies = createAsyncThunk('vacancies/fetchVacancies', async params => {
	const { data } = await VacanciesService.fetchVacancies(params)
	return data
})

export const fetchCatalogues = createAsyncThunk('vacancies/fetchCatalogues', async () => {
	const { data } = await VacanciesService.fetchCatalogues()
	return data
})

const initialState = {
	data: [],
	catalogues: [],
	status: 'loading',
	bookmarks: []
}

const vacanciesSlice = createSlice({
	name: 'vacancies',
	initialState,
	reducers: {
		setVacanciesFavorites(state, actions) {
			const vacancy = actions.payload
			const vacanciesFavoritesIndex = state.vacanciesFavorites.findIndex(
				value => value.id === vacancy.id
			)
			if (vacanciesFavoritesIndex === -1) {
				state.vacanciesFavorites.push(vacancy)
			} else {
				state.vacanciesFavorites.splice(vacanciesFavoritesIndex, 1)
			}
		}
	},
	extraReducers: {
		[fetchVacancies.pending]: state => {
			state.status = 'loading'
			state.data = []
		},
		[fetchVacancies.fulfilled]: (state, action) => {
			state.status = 'loaded'
			state.data = action.payload
		},
		[fetchVacancies.rejected]: state => {
			state.status = 'error'
			state.data = []
		},

		[fetchCatalogues.pending]: state => {
			state.status = 'loading'
			state.data = []
		},
		[fetchCatalogues.fulfilled]: (state, action) => {
			state.status = 'loaded'
			state.catalogues = action.payload
		},
		[fetchCatalogues.rejected]: state => {
			state.status = 'error'
			state.data = []
		}
	}
})

export const vacanciesReducer = vacanciesSlice.reducer
