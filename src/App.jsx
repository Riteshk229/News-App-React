import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import SignIn from'./Pages/SignIn'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <SignIn/>
      "halfhalfaf"
    </>
  )
}

export default App
