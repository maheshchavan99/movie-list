import { configureStore } from '@reduxjs/toolkit'
import  moviesList  from './MoviesDetails'
export const store = configureStore({
  reducer: {
    moviesDetails:moviesList
  },
})