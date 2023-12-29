import React from 'react'
import './Test.css'

import test from '../../../assets/image/test.png'

function Test() {
  return (
    <>
        <div className='test'>
                <h3>Fitness Test</h3>
                <div>
                    <div>
                        <div>
                            <h4>Progress Monitoring</h4>
                            <p>Regular fitness tests allow individuals to track their progress over time.</p>
                        </div>
                        <div>
                            <h4>Adaptation of Training Program</h4>
                            <p>Monthly fitness tests help in evaluating the effectiveness of current workout routines.</p>
                        </div>
                        <div>
                            <h4>Early Identification</h4>
                            <p>Sudden changes in fitness levels or unexpected result in certain tests may indicate underlying concerns that require attention.</p>
                        </div>
                    </div>
                    <div>
                        <img src={test} alt="" />
                    </div>
                </div>
            </div>
    </>
  )
}

export default Test