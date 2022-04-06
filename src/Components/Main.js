import React from 'react';
import './Main'
import Header from './Header';
import Home from './Home';
import Weather from './Weather';
import { Route, Routes } from 'react-router-dom';


function Main() {
    return (
        <div className='container-fluid p-0 main-container'>
            <Header />


            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/weather" element={<Weather />} />
            </Routes>
        </div>
    )
}

export default Main;