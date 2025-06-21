const API_KEY = "b53f72c52ab24d4e1b6d260b908bb606";
const API_URL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="
const weathericon = document.querySelector(".weather-icon");
const searchBox = document.querySelector(".searchbar input");
const searchBtn = document.querySelector(".searchbar button");

async function CheckWeather(city) {
    const response = await fetch(API_URL + city + `&appid=${API_KEY}`);
    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;  
    document.querySelector(".temp").innerHTML = data.main.temp + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    if (data.weather[0].main == "Clouds"){
        weathericon.src = "images/clouds.png"
    }
    if (data.weather[0].main == "Clear") {
        weathericon.src = "images/clear.png"
    }
    if (data.weather[0].main == "Rain") {
        weathericon.src = "images/rain.png"
    }
    if (data.weather[0].main == "Drizzle") {
        weathericon.src = "images/drizzle.png"
    }
    if (data.weather[0].main == "Mist") {
        weathericon.src = "images/mist.png"
    }

}

searchBtn.addEventListener("click", () => {
    CheckWeather(searchBox.value);
})

