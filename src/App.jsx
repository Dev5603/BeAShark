import React from 'react'

import Navbar from './components/layouts/Navbar/Navbar'
import Home from './components/pages/Home/Home'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/layouts/Footer/Footer'

function App() {
    return (
      <>
          <Navbar />

          <Routes>
              <Route path='/' element={<Home />} />
          </Routes>

          <Footer />
      </>
    )
}

export default App
