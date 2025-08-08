import React from 'react'
import ContextApi from './components/context/ContextApi'
import Header from './components/Header'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <ContextApi>
      <Header/>
      <Outlet/>
      <Footer/>
    </ContextApi>
  )
}

export default App