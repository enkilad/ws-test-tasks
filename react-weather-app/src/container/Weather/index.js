const apiWeather = (lat, lon) =>
  `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=2b7a8efd8eef6e6ca7dbd4539f13bb02`;

function initMap() {
  const input = document.getElementById('pac-input');
  const tbody = document.getElementById('tbody');

  const autocomplete = new google.maps.places.Autocomplete(input);

  // Set the data fields to return when the user selects a place.
  autocomplete.setFields(['address_components', 'geometry', 'icon', 'name']);

  autocomplete.addListener('place_changed', () => {
    const place = autocomplete.getPlace();

    if (!place.geometry) {
      // User entered the name of a Place that was not suggested and
      // pressed the Enter key, or the Place Details request failed.
      window.alert(`No details available for input: '${place.name}'`);
      return;
    }

    const lat = place.geometry.location.lat();
    const lon = place.geometry.location.lng();

    fetchWeather(lat, lon);
  });
}

const fetchWeather = async (lat, lon) => {
  try {
    const response = await fetch(apiWeather(lat, lon));
    const weatherData = await response.json();
    for (let obj of weatherData.list) {
      let temp = Math.floor(obj.main.temp);
      if (+temp > 0) {
        temp = `+${temp}`;
      }
      tbody.insertAdjacentHTML(
        'afterbegin',
        `<tr>
          <td>${obj.dt_txt}</td>
          <td>${temp}</td>
          <td>${obj.weather[0].main}</td>
        </tr>`
      );
    }
  } catch (error) {
    console.error(error);
  }
};
