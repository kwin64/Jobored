import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import AuthService from '../../services/auth.services'

export const fetchAuth = createAsyncThunk('posts/fetchAuth', async params => {
	const { data } = await AuthService.auth(params)
	return data
})

const initialState = {
	data: null,
	status: 'loading'
}

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {},
	extraReducers: {
		[fetchAuth.pending]: state => {
			state.status = 'loading'
			state.data = null
		},
		[fetchAuth.fulfilled]: (state, action) => {
			state.status = 'loaded'
			window.localStorage.setItem('token', action.payload.access_token)
			state.data = action.payload
		},
		[fetchAuth.rejected]: state => {
			state.status = 'error'
			state.data = null
		}
	}
})

export const selectAuthData = state => state.auth.data

export const authReducer = authSlice.reducer
