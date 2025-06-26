const cityName = document.getElementById("cityName");
const temperature = document.getElementById("temperature");
const humidity = document.getElementById("humidity");
const weather = document.getElementById("weather");
const emoji = document.getElementById("emoji");
const result = document.getElementById("result");
const outputError = document.getElementById("outputError");
const inputText = document.getElementById("inputText");
const btn = document.getElementById("btn");
const apiKey = "de1ed2631492ec22f714f69d08b5998d";

btn.addEventListener("click", async () => {
    const city = inputText.value.trim();

    if (!city) {
        displayError("Please enter a city");
        return;
    }

    try {
        const weatherData = await getWeatherData(city);
        displayResult(weatherData);
    } catch (error) {
        displayError("City not found or network error");
    }
});

async function getWeatherData(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const response = await fetch(apiUrl);
    if (!response.ok) {
        throw new Error("Couldn't fetch");
    }
    return response.json();
}

function displayResult(data) {
    const {
        name,
        main: { temp, humidity: hum },
        weather: [{ description, id }],
    } = data;

    cityName.textContent = name;
    temperature.textContent = `${temp.toFixed(1)}°C`;
    humidity.textContent = `Humidity: ${hum}%`;
    weather.textContent = description.charAt(0).toUpperCase() + description.slice(1);
    emoji.textContent = getWeatherEmoji(id);

    outputError.style.display = "none";
    result.style.display = "block";
}

function getWeatherEmoji(weatherId) {
    switch (true) {
        case weatherId >= 200 && weatherId < 300:
            return "⛈️";
        case weatherId >= 300 && weatherId < 400:
            return "🌧️";
        case weatherId >= 500 && weatherId < 600:
            return "🌧️";
        case weatherId >= 600 && weatherId < 700:
            return "❄️";
        case weatherId >= 700 && weatherId < 800:
            return "🌫";
        case weatherId === 800:
            return "☀️";
        case weatherId > 800 && weatherId < 810:
            return "☁️";
        default:
            return "❓";
    }
}

function displayError(message) {
    outputError.textContent = message;
    outputError.style.display = "block";
    result.style.display = "none";
}
