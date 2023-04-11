import "./topbar.css"
import Moment from 'react-moment';
import {moviesRuntime,generData} from '../utils'
function MovieCard({clickMoviesCard,movies}) {
  return (
    <div className='movie-card' onClick={()=>{clickMoviesCard(movies)}}>
      <div className="wrapper">
        <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/action-movie-poster-template-design-0f5fff6262fdefb855e3a9a3f0fdd361_screen.jpg?ts=1636996054" alt="" className="poster-name" />
        <div className="movie-card-contents">
          <div className="titles text">{movies.movie_name}</div>
          <div className="release-date timer text">Release Date: <span> <Moment format="DD/MM/YYYY">{movies.release_date}</Moment> <span>{moviesRuntime(movies.runtime)}</span> </span></div>
          <div className="release-date timer text">Gener: {generData(movies.genre)}</div>
          <div className="release-date text">{movies.description}</div>
        </div>
      </div>
    </div>
  )
}

export default MovieCard
