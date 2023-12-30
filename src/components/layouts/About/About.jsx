import React from 'react'
import './About.css'

import fit from '../../../assets/image/fit.jpg'

function About() {
    return (
        <>
            <section className='about'>
                <img src={fit} alt="" />

                <h3>Who We Are</h3>
                <p>
                    Shark Fitness is more than just a fitness platform; we are a community of like-minded individuals
                    committed to embracing a lifestyle of vitality and self-improvement. Founded on the principles of
                    iclusivity, encouragement, and continuous growth, our platform welcomes individuals of all fitness
                    levels and backgrounds.

                    <span>
                        Welcome to a community that believes in your potential
                        <span>
                            Welcome to Shark Fitness
                        </span>
                    </span>
                </p>
            </section>
        </>
    )
}

export default About
