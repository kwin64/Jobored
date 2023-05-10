import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import VacanciesService from '../../services/vacanciesService'

export const fetchVacancies = createAsyncThunk('auth/fetchVacancies', async params => {
	const { data } = await VacanciesService.fetchVacancies(params)
	return data
})

const initialState = {
	data: [],
	status: 'loading'
}

const vacanciesSlice = createSlice({
	name: 'auth',
	initialState,
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
		}
	}
})

export const vacanciesReducer = vacanciesSlice.reducer
