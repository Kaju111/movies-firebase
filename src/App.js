import React, { createContext, useState } from 'react'
import Header from './components/Header'
import Cards from './components/Cards'
import AddMovies from './components/AddMovies'
import {Routes, Route} from 'react-router-dom'
import Detail from './components/Detail'
import  Login  from "./components/Login"
import  Signup  from "./components/signup"

 const Appstate = createContext()

const App = () => {
  const [login, setLogin] = useState(false)
  const [userName, setUserName] = useState("")

  return (
    <Appstate.Provider value={{login, userName}}>
    <div className='App relative'>
      <Header/>
       <Routes>
          <Route path='/' element={<Cards/>}/>
          <Route path='/addmovie' element={<AddMovies/>}/>
          <Route path='/details/:id' element={<Detail/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
       </Routes>
    </div>
    </Appstate.Provider>
  )
}


export default App
export {Appstate}
