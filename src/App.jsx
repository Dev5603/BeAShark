import React from 'react'

import Home from './components/pages/Home/Home'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/layouts/Footer/Footer'
import Charging from './components/pages/Charging/Charging'
import Steam from './components/pages/Steam/Steam'
import Towel from './components/pages/Towel/Towel'
import BMI from './components/pages/BMI/BMI'
import Bath from './components/pages/Bath/Bath'
import Test from './components/pages/Test/Test'
import Navbar from './components/layouts/Navbar/Navbar'
import About from './components/layouts/About/About'
import Contact from './components/layouts/Contact/Contact'

function App() {
    return (
      <>
        <Navbar />

          <Routes>
              <Route path='/' element={<Home />} />
              
              <Route path='/charging' element={<Charging />} />
              <Route path='/steam' element={<Steam />} />
              <Route path='/towel' element={<Towel />} />
              <Route path='/bmi' element={<BMI />} />
              <Route path='/bath' element={<Bath />} />
              <Route path='/test' element={<Test />} />

              <Route path='/about' element={<About />} />
              <Route path='/contact' element={<Contact />} />
          </Routes>

          <Footer />
      </>
    )
}

export default App
