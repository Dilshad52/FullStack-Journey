async function getWeather(){

    let city=document.getElementById("city").value;

    let apiKey="739e293ffbe83198c1b6ad5573d0eff4";

    let url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try{

        let response=await fetch(url);

        let data=await response.json();

        if(data.cod!=200){

            alert("City not found");

            return;

        }

        document.getElementById("weather").innerHTML=`

        <h2>${data.name}</h2>

        <p>🌡 Temperature : ${data.main.temp} °C</p>

        <p>☁ Weather : ${data.weather[0].main}</p>

        <p>💧 Humidity : ${data.main.humidity}%</p>

        <p>🌬 Wind : ${data.wind.speed} m/s</p>

        `;

    }

    catch(error){

        alert("Something went wrong.");

    }

}