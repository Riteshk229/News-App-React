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
import Article from './Pages/Article'

function App(props) {
  
  const {
    getNews,
    dispatch
  } = props;

  useEffect(() => { 
    getNews()
  }, [dispatch]);
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        <Route exact path='/login' element={<SignIn/>}></Route>
        <Route exact path='/register' element={<SignUp/>}></Route>
        <Route exact path='/news/:newsID' element={<Article />}></Route>
        <Route path='*' element={<ErrorPage/>}></Route>
      </Routes>
    </>
  )
}
const mapDispatchToProps = (dispatch) => ({
  getNews:()=> dispatch(fetchNewsFromAPI()),
})

const mapStateToProps = (state) => {
  const localStoreage = window.localStorage;
  return {}
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
