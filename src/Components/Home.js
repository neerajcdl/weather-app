import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud } from '@fortawesome/free-solid-svg-icons'
import './Home.css'


function Home() {
    return (
        <div>
            <div className='home-container'>
                <div className='home-content-container' >
                    <div className='align-self-center' style={{ color: "#000" }}>
                        <h1 className='brand-font d-inline pr-3'>Welcome to Weather Conditions <FontAwesomeIcon icon={faCloud} style={{ color: '#0984e3' }} /></h1>

                        <h4 style={{textAlign: 'center'}}>Free Weather App</h4>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Home;