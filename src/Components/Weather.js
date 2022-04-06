import React from 'react';
import Search from './Search';
import Result from './Result';
import axios from 'axios';
import './Weather.css'

class Weather extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            lat: "",
            lon: "",
            weatherData: null,
            city: "",
        }
    }
    changeHandler = (event) => {
        // es line ki wjh se hume alg alg eventlistner bnane ki jarurat nhi hai "event.target.name ki help se ye input tag me name attribute ho ye pick kr rha hai to name=city,lat,lon"
        const name = event.target.name;
        if (name === "city") {
            this.setState({
                city: event.target.value
            })
        } else if (name === "lat") {
            this.setState({
                lat: event.target.value
            })
        } else if (name === "lon") {
            this.setState({
                lon: event.target.value
            })
        }
    }

    //search handler 

    searchHandler = () => {
        console.log("this is test")
        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.lon}&appid=662dea451226675cc24e736a55d73267`)
        .then(
            (result) => {
                this.setState({
                    city: result.data.name,
                    weatherData: result.data,
                })
            }).catch(
                (error) => {
                    console.log(error)
             }
        )
    }

        locationHandler = (e) => {
            e.preventDefault()
            this.setState({
                lat: "",
                lon: "",
                city: "",
                weatherData: null,
            })
    
         
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    (res) => {
                        setTimeout(() => {
                            this.setState({
                                lat: res.coords.latitude,
                                lon: res.coords.longitude,
                            })
    
                            axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.lon}&appid=662dea451226675cc24e736a55d73267`)
                                .then(
                                    (result) => {
                                        this.setState({
                                            city: result.data.name,
                                            weatherData: result.data,
                                        })
                                    }).catch(
                                        (error) => {
                                            console.log(error)
                                     }
                                )
    
                        }, 500)
    
                    },
                    (error) => {
                        console.log("error", error)
                    }
                );
            } else {
                console.log("location is not supported")
            }
        }

    
    render() {
        return (
            <div className='container extra-containers' style={{ marginTop: '30px' }}>
                <Search lat={this.state.lat} lon={this.state.lon} weatherData={this.state.WeatherData} city={this.state.city} change={this.changeHandler} getLocation={this.locationHandler}      searchbox={this.searchHandler} />
                <Result weatherData={this.state.weatherData} />
            </div>
        )
    }
}

export default Weather;