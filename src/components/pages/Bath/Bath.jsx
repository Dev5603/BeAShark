import React from 'react'
import './bath.css'

import bath from '../../../assets/image/ice.png'

function Bath() {
    return (
        <>
            <div className='BMI'>
                <h3>Ice Bath</h3>
                <div>
                    <div>
                        <div>
                            <h4>Reduced Muscle Soreness</h4>
                            <p>Ice baths are believed to help reduce muscle soreness and inflamation.</p>
                        </div>
                        <div>
                            <h4>Faster Recovery</h4>
                            <p>Exposure to cold water may help speed up the recovery process by reducing muscle soreness</p>
                        </div>
                        <div>
                            <h4>Improve Circulation</h4>
                            <p>Calculating BMI at different points in time allows individuals and healthcare providers to monitor changes in weight status.</p>
                        </div>
                    </div>
                    <div>
                        <img src={bath} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Bath