import React from 'react'
import './towel.css'

import towel from '../../../assets/image/towel.png'

function Towel() {
    return (
        <>
            <div className='towel'>
                <h3>Towel</h3>
                <div>
                    <div>
                        <div>
                            <h4>Hygiene</h4>
                            <p>Towels help maintain cleanliness and hygiene by providing individuals with a way to wipe off sweat and bacteria after exercising.</p>
                        </div>
                        <div>
                            <h4>Comfort</h4>
                            <p>Towels provide comfort by allowing individuals to wipe away sweat, keeping them dry and more comfortable during their workout.</p>
                        </div>
                        <div>
                            <h4>Enhanced Member Experience</h4>
                            <p>Access to towels enhances the overall member experience, making the gym more appealing and encouraging regular attendance.</p>
                        </div>
                    </div>
                    <div>
                        <img src={towel} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Towel