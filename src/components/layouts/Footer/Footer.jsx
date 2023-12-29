import React from 'react'
import { Link } from 'react-router-dom'

import './Footer.css'
import logo from '../../../assets/logo/white.png'

function Footer() {
    return (
        <>
            <footer className='primary-footer'>
                <nav>
                    <ul className='secondary-navigation'>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </nav>

                <div>
                    <Link className='logo-footer' to=""><img src={logo} alt="Image" /></Link>
                    <p>#BEASHARK</p>
                </div>

                <nav>
                    <ul className='social-navigation'>
                        <li>
                            <a target='_blank' href="https://www.instagram.com/_.sharkfitness._/">Instagram</a>
                        </li>
                        <li>
                            <a target='_blank' href="https://www.facebook.com/profile.php?id=61554658661455">Facebook</a>
                        </li>
                        <li>
                            <a target='_blank' href="https://www.youtube.com/@SharkFitIndia">Youtube</a>
                        </li>
                    </ul>
                </nav>
            </footer>
        </>
    )
}

export default Footer
