import React from 'react'
import './Charging.css'

import charging from '../../../assets/image/Charging.jpg'

function Charging() {
    return (
        <>
            <div className='charging'>
                <h3>Charging Zone</h3>
                <div>
                    <div>
                        <div>
                            <h4>Convenience</h4>
                            <p>A charging zone provedes gym members with a convenience place to recharge their electronic devices.</p>
                        </div>
                        <div>
                            <h4>Extended Sessions</h4>
                            <p>With the availabilty of charging zone individuals may feel more inclined to extend their workout session without worrying about their devices running out of battery.</p>
                        </div>
                        <div>
                            <h4>Enhanced Experience</h4>
                            <p>Amenities like charging zone enhances the overall member experience</p>
                        </div>
                    </div>
                    <div>
                        <img src={charging} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Charging