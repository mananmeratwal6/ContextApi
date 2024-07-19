import React, { useState } from 'react'
import MovieContext from './MovieContext'


const MovieProvider = ({children}) => {
    const [movies,setMovies] = useState([
        {name:"Fir hera pheri",image:"https://i.scdn.co/image/ab67616d0000b27348ebfb6ce95843384d0508de" ,rating:9.3},
        {name:"Golmal 3",image:"https://m.media-amazon.com/images/M/MV5BNGFmMmJiNjktYTMxZS00NDFiLTg1YjMtMzZmNGJiNDU5ZDIyXkEyXkFqcGdeQXVyMTI5Njg5OTQz._V1_.jpg" ,rating:8.5},
        {name:"Dhamal",image:"https://upload.wikimedia.org/wikipedia/en/6/60/Dhamaal_2007.jpg", rating:9.1},
    ])
  return (
    <div>
        <MovieContext.Provider value={{movies}}>
            {children}
        </MovieContext.Provider>
    </div>
  )
}

export default MovieProvider