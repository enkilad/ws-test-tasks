// This example requires the Places library. Include the libraries=places
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">

let tbody = document.getElementById('tbody');

function initMap() {
  var input = document.getElementById('pac-input');

  var autocomplete = new google.maps.places.Autocomplete(input);

  // Set the data fields to return when the user selects a place.
  autocomplete.setFields(
    ['address_components', 'geometry', 'icon', 'name']);

  autocomplete.addListener('place_changed', function () {

    var place = autocomplete.getPlace();

    let lat = place.geometry.location.lat();
    let lon = place.geometry.location.lng();

    if (!place.geometry) {
      // User entered the name of a Place that was not suggested and
      // pressed the Enter key, or the Place Details request failed.
      window.alert("No details available for input: '" + place.name + "'");
      return;
    }

    if (place.address_components) {
      address = [
        (place.address_components[0] && place.address_components[0].short_name || ''),
        (place.address_components[1] && place.address_components[1].short_name || ''),
        (place.address_components[2] && place.address_components[2].short_name || '')
      ].join(' ');
    }

    fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=2b7a8efd8eef6e6ca7dbd4539f13bb02`)
      .then(response => {
        return response.json();
      })
      .then(weatherData => {
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
            </tr>`);
        }
      })
  });
}