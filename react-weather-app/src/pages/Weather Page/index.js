import React from 'react';
import Autocomplete from 'react-google-autocomplete';
import openWeatherMap from '../../api';
import { Button } from 'reactstrap';

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
        console.log(date);
        console.log(temp);
        console.log(weather);
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
          }}
        />
        <Button color="primary">Submit</Button>
      </div>
    );
  }
}

export default Weather;
