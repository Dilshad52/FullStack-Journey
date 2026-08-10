const apiKey = "739e293ffbe83198c1b6ad5573d0eff4";

async function getWeather() {

    const city = document.getElementById("city").value;

    if(city===""){

        alert("Enter City Name");

        return;

    }

    loadWeather(city);

}

async function loadWeather(city){

    const weatherDiv = document.getElementById("weather");

    weatherDiv.innerHTML="<p class='loading'>Loading...</p>";

    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try{

        const response=await fetch(url);

        const data=await response.json();

        if(data.cod!=200){

            weatherDiv.innerHTML="<h3>City Not Found</h3>";

            return;

        }

        const icon=data.weather[0].icon;

        weatherDiv.innerHTML=`

        <div class="weather-card">

        <h2>${data.name}</h2>

        <img src="https://openweathermap.org/img/wn/${icon}@2x.png">

        <h3>${data.main.temp}°C</h3>

        <p>${data.weather[0].description}</p>

        <p>💧 Humidity : ${data.main.humidity}%</p>

        <p>🌬 Wind : ${data.wind.speed} m/s</p>

        </div>

        `;

    }

    catch{

        weatherDiv.innerHTML="<h3>Network Error</h3>";

    }

}

function getCurrentLocationWeather(){

    navigator.geolocation.getCurrentPosition(async(position)=>{

        const lat=position.coords.latitude;

        const lon=position.coords.longitude;

        const url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

        const response=await fetch(url);

        const data=await response.json();

        document.getElementById("city").value=data.name;

        loadWeather(data.name);

    });

}