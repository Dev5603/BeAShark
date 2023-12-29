import React, { useRef } from 'react'
import './Navbar.css'

import logo from '../../../assets/logo/white.png'

function Navbar() {
    return (
        <>
            <header className='primary-header flex'> 
                <a className='logo' href=""><img src={logo} alt="Logo" /></a>
            </header>
        </>
    )
}

export default Navbar
