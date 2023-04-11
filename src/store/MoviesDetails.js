import { createSlice } from '@reduxjs/toolkit'
export const movieCreated = createSlice({
    name: 'movies',
    initialState: {},
    reducers: {
        moviesList: (state, action) => {
            return {
                ...state,
                ...action.payload
            }
        }
    }
})
export const { moviesList } = movieCreated.actions
export default movieCreated.reducer

