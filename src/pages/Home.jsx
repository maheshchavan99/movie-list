import React, { useEffect, useState } from 'react'
import MovieCard from '../components/MovieCard'
import { useDispatch } from 'react-redux'
import { moviesList } from '../store/MoviesDetails'
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import './home.css'
import { generData, moviesRuntime } from '../utils'
const Home = ({ filtterMoviesList }) => {
  const [moviesData, setMoviesData] = useState()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  let imges="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/action-movie-poster-template-design-0f5fff6262fdefb855e3a9a3f0fdd361_screen.jpg?ts=1636996054"
  useEffect(() => {
    const fetchMovieData = async () => {
      const response = await axios.get("http://localhost:3000/movies")
      setMoviesData(response)
    }
    fetchMovieData()

  }, [])
  useEffect(() => {
    dispatch(moviesList({ responsData: moviesData }))
  }, [moviesData])

  const clickMoviesCard = (data) => {
    const payload = {
      id: data.id,
      movie_name: data.movie_name,
      cast: generData(data.cast),
      director: data.director,
      producer: data.producer,
      description: data.description,
      ratings: data.ratings,
      genre: generData(data.genre),
      poster: imges || data.poster,
      release_date: data.release_date,
      runtime: moviesRuntime(data.runtime)
    }
    if (data) {
      dispatch(moviesList({ moviesList: payload }))
      navigate('/moviesdetails')
    }
  }
  return (
    <div className='main-home'>
      <h1 style={{marginBottom:"20px"}}>Movie List</h1>
      <div className='home-container'>
        {(filtterMoviesList ? filtterMoviesList : moviesData?.data)?.map((data) => {
          return (
            <div>
              <MovieCard
                movies={data}
                clickMoviesCard={clickMoviesCard}
              />
            </div>
          )

        }
        )}
      </div>
    </div>
  )
}

export default Home
