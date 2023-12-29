import React from 'react'
import './BMI.css'

import bmi from '../../../assets/image/BMI.png'

function BMI() {
    return (
        <>
            <div className='BMI'>
                <h3>BMI</h3>
                <div>
                    <div>
                        <div>
                            <h4>Health Assesments</h4>
                            <p>BMI is often used to assess and address health trends at a border level.</p>
                        </div>
                        <div>
                            <h4>Risk Identification</h4>
                            <p>BMI can help identify individuals who may be at a higher risk for health issues.</p>
                        </div>
                        <div>
                            <h4>Monitoring Changes</h4>
                            <p>Calculating BMI at different points in time allows individuals and healthcare providers to monitor changes in weight status.</p>
                        </div>
                    </div>
                    <div>
                        <img src={bmi} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default BMI