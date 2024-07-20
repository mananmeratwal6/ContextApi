import React from 'react'
import ContextProvider from './Day-Night-Theme-Context/ContextProvider';
import MovieProvider from './DynamicContext/MovieProvider';
import MovieList from './DynamicContext/MovieList';
import './App.css'

const App = () => {
  return (
    <div>

      <h1 style={{background:"blue"}}>Here is the example of ContextApi, I have used to make Dark and Light mode Theme</h1>
      <ContextProvider/>
      <br/>
      <br/>
      <br/>
      <h1 style={{background:"red"}}>Here is the example of Dynamic context, I send the the movie data from MovieContext to MovieList, and render the Data's </h1>

      <MovieProvider>
        <MovieList/>
      </MovieProvider>


    </div>
  )
}

export default App