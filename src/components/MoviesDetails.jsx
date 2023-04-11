import React from 'react';
import './topbar.css';
import { useSelector } from 'react-redux';
function MoviesDetails() {
    const storeValue = useSelector((state) => state.moviesDetails
    )
    const {moviesList}= storeValue||{}
    console.log(moviesList,"KKKKK")
    return (
        <div className='movies-details'>
            <div className="mvd-lfet">
                <h2>{moviesList.movie_name}</h2>
                <div className='desc'>{moviesList.description}</div>
                <div className='desc'>Release date: <span>{moviesList.release_date}  <span>{moviesList.runtime}</span> </span></div>
                <div className='desc'>Genre: <span>{moviesList.genre}</span></div>
                <div className='desc'>Producer: <span>{moviesList.producer}</span></div>
                <div className='desc'>Director:  <span>{moviesList.director}</span> </div>
                <div className='cast desc'>
                    <h2>Cast</h2>
                    <p>{moviesList.cast}</p>
                </div>
                <div className='rating'>
                    Ratinig: <span>{moviesList.ratings}</span>
                </div>
            </div>
            <div className="mvd-lfet">
                <img src={moviesList.poster} alt="" />
            </div>
        </div>
    )
}

export default MoviesDetails
