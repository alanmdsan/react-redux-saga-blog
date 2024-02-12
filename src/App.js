import React from 'react'
import Home from './pages/Home'
import Singlepost from './pages/SinglePost'
import { Route, Routes } from 'react-router-dom'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import Navigation from './components/Navigation'

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Singlepost />} />
      </Routes>
    </div>
  )
}

export default App
