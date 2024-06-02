import React from 'react'
import Home from './Pages/Home'
import {Routes,Route} from "react-router-dom"
import Profile from './Pages/Profile'
import Bag from './Pages/Bag'
import Wishlist from './Pages/Wishlist'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={ <Home/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/bag' element={<Bag/>} />
        <Route path='/wishlist' element={<Wishlist/>} />
      </Routes>
     
    </div>
  )
}

export default App
