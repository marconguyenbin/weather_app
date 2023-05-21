const searchForm = document.querySelector('form');
const searchInput = document.querySelector('input');
const weatherBox = document.querySelector('.weather-box');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const windSpeed = document.querySelector('.wind-speed');
const windDirection = document.querySelector('.wind-direction');
const humidity = document.querySelector('.humidity');

searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const APIKey = "2b3e59b79911027ab9a9182cbefb932f";
  const city = searchInput.value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`;
  
  fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      // Update weather information
      location.textContent = `${data.name}, ${data.sys.country}`;
      temperature.textContent = `${data.main.temp.toFixed(1)}°C`;
      description.textContent = data.weather[0].description;
      windSpeed.textContent = `${data.wind.speed} mph`;
      windDirection.textContent = data.wind.deg;
      humidity.textContent = `${data.main.humidity}%`;
      weatherBox.style.display = "block";
    })
    .catch(error => {
      console.error(error);
      // Display error message to user
      location.textContent = "City not found";
      weatherBox.style.display = "none";
    });
});

//console.log("Hello, world!");
