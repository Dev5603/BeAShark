import React, { useEffect, useRef } from 'react'
import './Home.css'

import videomp4 from '../../../assets/video/angelita.mp4'
import videowebm from '../../../assets/video/angelita.webm'
import image1 from '../../../assets/image/women.png'
import charging from '../../../assets/image/charging.png'
import steam from '../../../assets/image/steam.png'
import towel from '../../../assets/image/towel.png'
import bmi from '../../../assets/image/bmi.png'
import ice from '../../../assets/image/ice.png'
import test from '../../../assets/image/test.png'
import reel from '../../../assets/video/reel.mp4'

function Home() {
    const video = useRef(null)

    useEffect(() => {
        const handleScroll = () => {
            if (video.current) {
                const scrollY = window.scrollY
                video.current.style.transform = `translate3d(0, ${scrollY * 1}px, 0)`
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <>
            <section className='video'>
                <video ref={video} autoPlay loop muted >
                    <source src={videowebm} type="video/webm" />
                    <source src={videomp4} type="video/mp4" />
                </video>

                <div className='tag'>
                    <h1>
                        It doesn't get easier you get better
                        <span>
                            Unleash your inner beast
                        </span>
                    </h1>
                </div>
            </section>
            <section className='three'>
                <div>
                    <h3>Our Services</h3>
                    <p>
                        Experience unparalleld sevices that stand out like nowhere else in Navi Mumbai,
                        where excellence meets innovation to redefine your expectations
                    </p>
                </div>

                <div className='services'>
                    <div className='service' data-service='charging'>
                        <img src={charging} alt="" />
                        <div>
                            <h4>Charging Zone</h4>
                            <p>Your go to destination for fast, convenient device charging anytime, anywhere!</p>
                        </div>
                    </div>
                    <div className='service' data-service='steam'>
                        <img src={steam} alt="" />
                        <div>
                            <h4>Steam</h4>
                            <p>A haven for relaxation and wellness, where the soothing embrace of steam emhances your mind and body harmony</p>
                        </div>
                    </div>
                    <div className='service' data-service='towel'>
                        <img src={towel} alt="" />
                        <div>
                            <h4>Hand & Bath Towel</h4>
                            <p>A perfect blend of softness and absorbency for a spa-like experience at home</p>
                        </div>
                    </div>
                    <div className='service' data-service='bmi'>
                        <img src={bmi} alt="" />
                        <div>
                            <h4>BMI</h4>
                            <p>Precision technology for personalised insights into your body composition and welness journey</p>
                        </div>
                    </div>
                    <div className='service' data-service='ice'>
                        <img src={ice} alt="" />
                        <div>
                            <h4>Ice Bath</h4>
                            <p>A transformative journey to soothe muscles and rejuvenate your well-being</p>
                        </div>
                    </div>
                    <div className='service' data-service='test'>
                        <img src={test} alt="" />
                        <div>
                            <h4>Fitness Test</h4>
                            <p>Embark on monthly journey of self-improvement with our fitness test, sculpting a stronger, healthier version of yourself</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='two'>
                <h2>
                    Take the first step on a journey that pushes you to the limit
                </h2>
                <img className='blur' src={image1} alt="Women meditating" />
            </section>
            <section className='four'>
                <h3>Transform your body. Transform your life.</h3>
                <video autoPlay loop muted >
                    <source src={reel} type="video/mp4" />
                </video>
            </section>
            <section className='about'>
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
            <section className='contact'>
                <h3>Contact Us</h3>
                <p>Suggestions? Or feedback? Hit us up!</p>

                <div>
                    <p><span>Email: </span>sharkfitness@gmail.com</p>
                    <p><span>Phone: </span>+91 8451096123</p>
                </div>
            </section>
        </>
    )
}

export default Home
