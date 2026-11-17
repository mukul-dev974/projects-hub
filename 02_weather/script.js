document.addEventListener("DOMContentLoaded", () => {
const cityInput = document.getElementById("city-input");
const getWeatherBtn = document.getElementById("get-weather-btn");
const weatherInfo = document.getElementById("weather-info");
const cityNameDisplay = document.getElementById("city-name");
const temperatureDisplay = document.getElementById("temperature");
const descriptionDisplay = document.getElementById("description");
const errorMessage = document.getElementById("error-message");


    const API_KEY = "21y1y298189y81y2812223y7y873y287"; //env variables

 getWeatherBtn.addEventListener('click', async () => {
    const city = cityInput.value.trim();

    if(!city) return;
    // it may throw an error
    // server/database is always in anothe continent


    try {
        const weatherData = await fetchWeatherData(city);
        displayWeatherData(data);
    } catch (error) {
        showError();
    }
 

});

async function fetchWeatherData(city){
//gets the data
const url = `https://api.openweathermap.org/data/4.0/onecall/current?lat=52.2297&lon=21.0122&units=metric&lang=en&appid=${API_KEY}`;

    const response = await fetch(url);
    console.log(typeof response);
    console.log("RESPONSE", response);
    
    if (!response.ok) {
        throw new Error("city not found");
    }
    const data = await response.json();
    return data;
}

function displayWeatherData(data){
console.log(data);
const { name, main, weather } = data;
cityNameDisplay.textContent = name;
temperatureDisplay.textContent = `Temperature : ${main.temp}`;
descriptionDisplay.textContent = `Weather : ${weather[0].description}`;


//unlock the display
weatherInfo.classList.remove("hidden");
errorMessage.classList.add("hidden");
}

function showError(){
weatherInfo.classList.add("hidden");
errorMessage.classList.remove("hidden");
}

});