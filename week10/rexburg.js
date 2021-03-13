const requestURL = 'api.openweathermap.org/data/2.5/weather?q=rexburg&appid=fa929baa60ad417261f98f4213c9c309&units=imperial';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const api = jsonObject;
        console.table(jsonObject);

        let icon = document.getElementById('icon');

        document.getElementById('high-temp').textContent = api.main.temp;
        document.getElementById('humidity').textContent = api.main.humidity;
        document.getElementById('wind-speed').textContent = api.wind.speed;
        document.getElementById('currently').textContent = api.weather[0].description;

        const imagesrc = 'https://openweathermap.org/img/wn/' + api.weather[0].icon + '.png';
        const desc = api.weather[0].description;
        // document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
        icon.setAttribute('src', imagesrc);  // focus on the setAttribute() method
        icon.setAttribute('alt', desc);
    });