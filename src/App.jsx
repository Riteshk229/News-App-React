import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import { fetchNewsFromAPI } from './features/newsSlice'
import {
  SignUp,
  SignIn,
  ErrorPage
} from './Pages'

function App(props) {
  const {
    getNews,
  } = props;

  useEffect(() => { 
    getNews()
  }, []);
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        <Route exact path='/login' element={<SignIn/>}></Route>
        <Route exact path='/register' element={<SignUp/>}></Route>
        <Route path='*' element={<ErrorPage/>}></Route>
      </Routes>
      "halfhalfaf"
    </>
  )
}
const mapDispatchToProps = (dispatch) => ({
  getNews:()=> dispatch(fetchNewsFromAPI()),
})

export default connect(null,mapDispatchToProps)(App);
