import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
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
import yoga from '../../../assets/image/yoga.jpg'

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
            <section className='last'>
                <img src={yoga} alt="" />
                <div>
                    <h3>Believe & Achieve</h3>
                    <p>
                        We believe that everyone has the potential to achieve their peak physical health
                        and mental well-being.
                    </p>
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
                    <div className='service grid-col-span-2' data-service='charging'>
                        <img src={charging} alt="" />
                        <div>
                            <Link to='/charging'>Charging Zone</Link>
                            <p>Your go to destination for fast, convenient device charging anytime, anywhere!</p>
                        </div>
                    </div>
                    <div className='service' data-service='steam'>
                        <img src={steam} alt="" />
                        <div>
                            <Link to='/steam'>Steam</Link>
                            <p>A haven for relaxation and wellness, where the soothing embrace of steam emhances your mind and body harmony</p>
                        </div>
                    </div>
                    <div className='service' data-service='towel'>
                        <img src={towel} alt="" />
                        <div>
                            <Link to='/towel'>Hand & Bath Towel</Link>
                            <p>A perfect blend of softness and absorbency for a spa-like experience at home</p>
                        </div>
                    </div>
                    <div className='service' data-service='bmi'>
                        <img src={bmi} alt="" />
                        <div>
                            <Link to='/bmi'>BMI</Link>
                            <p>Precision technology for personalised insights into your body composition and welness journey</p>
                        </div>
                    </div>
                    <div className='service' data-service='test'>
                        <img src={test} alt="" />
                        <div>
                            <Link to='test'>Fitness Test</Link>
                            <p>Embark on monthly journey of self-improvement with our fitness test, sculpting a stronger, healthier version of yourself</p>
                        </div>
                    </div>
                    <div className='service' data-service='ice'>
                        <img src={ice} alt="" />
                        <div>
                            <Link to='bath'>Ice Bath</Link>
                            <p>A transformative journey to soothe muscles and rejuvenate your well-being</p>
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
        </>
    )
}

export default Home
