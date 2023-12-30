import React from 'react'
import './Contact.css'

import squat from '../../../assets/image/squat.jpg'

function Contact() {
    return (
        <>
            <section className='contact'>
                <img src={squat} alt="" />
                <h3>Contact Us</h3>
                <p>Suggestions? Or feedback? Hit us up!</p>

                <div>
                    <p><span>Email: </span>sharkfitindia@gmail.com</p>
                    <p><span>Phone: </span>+91 8451096123</p>
                </div>
            </section>
        </>
    )
}

export default Contact
