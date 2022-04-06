import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faLocationCrosshairs } from '@fortawesome/free-solid-svg-icons'
import './Search.css'

function Search(props) {
    return (
        <div>
            <div className="search-weather-container">
                <div className="city-name-area">
                    <form>
                        <div className="controlsForm">
                            <label htmlFor="">
                                Name:
                            </label>
                            <input type="text" className="form-control" name="city" value={props.city} onChange={props.change} />

                        </div>
                    </form>
                </div>
                <div className="cordinate-container">
                    <form>
                        <div className="get-co-areas">
                            <label htmlFor="">Get Co-ordinate &nbsp; </label>
                            <button className="getcoordinate-btn" onClick={props.getLocation}><FontAwesomeIcon icon={faLocationCrosshairs} /></button>
                            <div className="input-group mb-2 ">
                                <div className="input-group-prepend">
                                    <div className="input-group-text">Lat:</div>
                                </div>
                                <input type="number" name="lat" className="form-control" id="inlineFormInputGroup" value={props.lat} onChange={props.change} />
                            </div>
                        </div>

                        <div className="lon-cont">
                            <label htmlFor=""></label>

                            <div className="input-group mb-2">
                                <div className="input-group-prepend">
                                    <div className="input-group-text">Lon:</div>
                                </div>
                                <input type="number" name="lon" className="form-control" id="inlineFormInputGroup" value={props.lon} onChange={props.change} />
                            </div>
                        </div>

                        <div className="cordinate-search-btn">
                            <label htmlFor="">
                                Search
                            </label>

                            <div className="input-group mb-2 lot-lon-serach-btn">
                                <button type="button" className="btn btn-primary" onClick={props.searchbox} > <FontAwesomeIcon icon={faSearch} /> </button>

                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default Search;