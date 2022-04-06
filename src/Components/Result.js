import { faBlackboard } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import './Result.css'
import Loader from "./Loader";

function Result(props) {
    console.log(props.weatherData)
    const { weatherData: data } = props;
    function KtoC(k) {
        return (k - 273.15).toFixed(2) + " ° C";
    }

    let showOnPage;
    function getTheDate(stamp) {
        const date = new Date(stamp * 1000)
        return date.toLocaleTimeString()
    }
    if (data == null) {
        showOnPage =   <Loader />
    } else {
        showOnPage =   <div className="row">
            <div className="col">
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">
                            <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="" />

                            {data.name} ({KtoC(data.main.temp)}) <span className="pl-2">{data.weather[0].description}</span>

                        </h4>
                        <div className="row">
                            <div className="col">
                                <div className="row">
                                    <div className="table">
                                        <tbody>
                                            <tr >
                                                <th >Feels Like</th>
                                                <td >{KtoC(data.main.feels_like)}</td>
                                            </tr>
                                            <tr style={{border:"10px solid red"}}>
                                                <th>Min Temp</th>
                                                <td>{KtoC(data.main.temp_min)}</td>
                                            </tr>
                                            <tr>
                                                <th>Max Temp</th>
                                                <td>{KtoC(data.main.temp_max)}</td>
                                            </tr>
                                            <tr>
                                                <th>Sun Rise</th>
                                                <td>{getTheDate(data.sys.sunrise)}</td>
                                            </tr>
                                            <tr>
                                                <th>Sun Set</th>
                                                <td>{getTheDate(data.sys.sunset)}</td>
                                            </tr>

                                        </tbody>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }

    return (
        <>
      
        {showOnPage}
        </>
    )
}

export default Result;