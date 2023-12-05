import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import {
  SignUp,
  SignIn,
  ErrorPage
} from './Pages'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path='/login' element={<SignIn/>}></Route>
        <Route exact path='/register' element={<SignUp/>}></Route>
        <Route path='*' element={<ErrorPage/>}></Route>
      </Routes>
      "halfhalfaf"
    </>
  )
}

export default App
