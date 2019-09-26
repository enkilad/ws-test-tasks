import React from 'react';
import ReactDOM from 'react-dom';
import Autocomplete from 'react-google-autocomplete';
import openWeatherMap from '../../api';
// import WeatherTable from './WeatherTable';

class Weather extends React.Component {
  fetchWeather = async (lat, lon) => {
    try {
      const response = await openWeatherMap.get(
        `/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=2b7a8efd8eef6e6ca7dbd4539f13bb02`
      );
      for (let obj of response.data.list) {
        let temp = Math.floor(obj.main.temp);
        let date = obj.dt_txt;
        let weather = obj.weather[0].main;
        if (+temp > 0) {
          temp = `+${temp}`;
        }
        return temp;
      }
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    return (
      <div className="container">
        <Autocomplete
          className="form-control"
          onPlaceSelected={place => {
            const lat = place.geometry.location.lat();
            const lon = place.geometry.location.lng();
            console.log(lat, lon);
            this.fetchWeather(lat, lon);
            ReactDOM.render(
              <table className="table">
                <thead className="thead-dark">
                  <tr>
                    <th>Date</th>
                    <th>Temperature (Celsium)</th>
                    <th>Weather condition</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </table>,
              document.querySelector('#weather-table')
            );
          }}
        />
        <div id="weather-table"></div>
      </div>
    );
  }
}

export default Weather;
