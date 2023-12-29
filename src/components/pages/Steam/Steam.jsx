import React from 'react'
import './Steam.css'

import steam from '../../../assets/image/Steam.png'

function Steam() {
    return (
        <>
            <div className='steam'>
                <h3>Steam</h3>
                <div>
                    <div>
                        <div>
                            <h4>Muscle Relaxation</h4>
                            <p>Steam can help relax muscle by increasing blood flow and promoting circulation..</p>
                        </div>
                        <div>
                            <h4>Skin Benefits</h4>
                            <p>Steam can open up pores and cleanse the skin.</p>
                        </div>
                        <div>
                            <h4>Stress Reduction</h4>
                            <p>The warmth & soothing nature of steam can promote relaxation and reduce stress.</p>
                        </div>
                    </div>
                    <div>
                        <img src={steam} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Steam