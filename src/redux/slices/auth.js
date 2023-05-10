import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import AuthService from '../../services/authService'

export const fetchAuth = createAsyncThunk('auth/fetchAuth', async params => {
	const { data } = await AuthService.authMe(params)
	return data
})

const initialState = {
	data: [],
	status: 'loading'
}

const authSlice = createSlice({
	name: 'auth',
	initialState,
	extraReducers: {
		[fetchAuth.pending]: state => {
			state.status = 'loading'
			state.data = []
		},
		[fetchAuth.fulfilled]: (state, action) => {
			state.status = 'loaded'
			window.localStorage.setItem('token', action.payload.access_token)
			state.data = action.payload
		},
		[fetchAuth.rejected]: state => {
			state.status = 'error'
			state.data = []
		}
	}
})

export const authReducer = authSlice.reducer
