import React, { useContext } from 'react'
import MovieContext from './MovieContext'

const MovieList = () => {
  const { movies } = useContext(MovieContext);
  return (
    <div className='container'>
      {movies.map(item => (
        <div className="main-section">
          <div className="section">
            <h1>{item.name}</h1>
            <img src={item.image} alt={item.name} width={"200px"} />
            <p>Rating: {item.rating}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default MovieList