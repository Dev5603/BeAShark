import React, { useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'

import './Navbar.css'

import logo from '../../../assets/logo/white.png'

function Navbar() {
    const location = useLocation()

    const navBtn = useRef(null)
    const navBar = useRef(null)

    const isActive = ( path ) => {
        return location.pathname === path
    }

    return (
        <>
            <header className='primary-header flex'> 
                <Link className={`logo ${isActive('/charging' ? 'inv': '')}`} to="/"><img src={logo} alt="Logo" /></Link>
            </header>
        </>
    )
}

export default Navbar
