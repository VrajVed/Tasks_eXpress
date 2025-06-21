const API_KEY = "b53f72c52ab24d4e1b6d260b908bb606";
const API_URL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=bangalore"


const searchBox = document.querySelector(".searchbar input");
const searchBtn = document.querySelector(".searchbar button");

async function CheckWeather() {
    const response = await fetch(API_URL + `&appid=${API_KEY}`);
    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = data.main.temp + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

}

searchBtn.addEventListener("click", () => {
    CheckWeather(searchBox.value);
})

