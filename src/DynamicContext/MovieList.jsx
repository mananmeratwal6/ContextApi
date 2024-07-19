import React, { useContext } from 'react'
import MovieContext from './MovieContext'

const MovieList = () => {
    const{movies} = useContext(MovieContext);
  return (
    <div>
        {movies.map(item=>(
            <div>
                <h1>{item.name}</h1>
                <img src={item.image} alt={item.name} width={"200px"}/>
                <p>Rating: {item.rating}</p>
            </div>
        ))}
    </div>
  )
}

export default MovieList