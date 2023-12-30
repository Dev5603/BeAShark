import React, { useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'

import './Navbar.css'

import logo from '../../../assets/logo/white.png'

function Navbar() {
    const location = useLocation()

    const isActive = ( path ) => {
        return location.pathname === path
    }

    const navBtn = useRef(false);
    const navBar = useRef(false);

    const handleClick = () => {
        const visible = navBar.current.getAttribute('data-visible');

        if (visible === "false") {
            navBtn.current.setAttribute('aria-expanded', true);
            navBar.current.setAttribute('data-visible', true);
        } else {
            navBtn.current.setAttribute('aria-expanded', false);
            navBar.current.setAttribute('data-visible', false);
        }
    }

    return (
        <>
            <header className={`primary-header flex ${!isActive('/') ? 'notHome' : ''}`}> 
                <Link className='logo' to="/"><img src={logo} alt="Logo" /></Link>

                <button className='navBtn' aria-controls='primary-navigation' ref={navBtn} aria-expanded={navBtn.current} onClick={handleClick}>
                    <span className='sr-only'>
                        Menu
                    </span>
                </button>

                <nav>
                    <ul className='primary-navigation flex' id='primary-navigation' ref={navBar} data-visible={navBar.current}>
                        <li className={isActive('/') ? 'active' : ''}>
                            <Link to="/">Home</Link>
                        </li>
                        <li className={isActive('/about') ? 'active' : ''}>
                            <Link to="/about">About</Link>
                        </li>
                        <li className={isActive('/contact') ? 'active' : ''}>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Navbar
