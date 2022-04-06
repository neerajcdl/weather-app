import React from "react";
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud, faHouseChimney } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'


function Header() {
    return (
        <div className="p-0 header-container">
            <nav className="navbar navbar-expand-lg navbar-light navbar-contianer-div">
                <NavLink className="navbar-brand" to='/'>Weather App <FontAwesomeIcon icon={faCloud} /></NavLink>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Home <FontAwesomeIcon icon={faHouseChimney} />  </NavLink>

                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" to="weather">Weather <FontAwesomeIcon icon={faCloud} /></NavLink>
                        </li>

                        <li>
                            <i className="fa-solid fa-cloud"></i>
                            <i className="fa-brands fa-facebook"></i>
                            <i className="fa fa-cloud"></i>
                        </li>

                    </ul>

                </div>
            </nav>
        </div >
    )
}

export default Header;