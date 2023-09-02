import React from 'react'
import Header from './components/Header'
import Cards from './components/Cards'
import AddMovies from './components/AddMovies'
import {Routes, Route} from 'react-router-dom'
import Detail from './components/Detail'

const App = () => {
  return (
    <div className='App relative'>
      <Header/>
       <Routes>
          <Route path='/' element={<Cards/>}/>
          <Route path='/addmovie' element={<AddMovies/>}/>
          <Route path='/detail/:id' element={<Detail/>}/>
       </Routes>
    </div>
  )
}

export default App

