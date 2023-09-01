import React from 'react'
import Header from './components/Header'
import Cards from './components/Cards'
import AddMovies from './components/AddMovies'
import {Routes, Route} from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Header/>
       <Routes>
          <Route path='/' element={<Cards/>}/>
          <Route path='/addmovie' element={<AddMovies/>}/>
       </Routes>
    </div>
  )
}

export default App

