import API_TOKEN from "./config.js";

let cityName = document.getElementById("city-name")
let fahreinheitTemp = document.getElementById("current-temp-fah")
let celsiusTemp = document.getElementById("current-temp-cel")
let sunRiseTime = document.getElementById("sunrise")
let sunSetTime = document.getElementById("sunset")

let form = document.querySelector('form')

let cityToSearch = document.getElementById('input-city')

form.addEventListener('submit', (event) => {
    event.preventDefault();
    fetch(`http://api.weatherapi.com/v1/current.json?key=${API_TOKEN}&q=${cityToSearch.value}&aqi=no`)
    .then((response) => {
        return response.json ()
    })
    .then(data => {
        cityName.innerText = data.location.name
        fahreinheitTemp.innerText = Math.round(data.current.temp_f)
        celsiusTemp.innerText = Math.round(data.current.temp_c)
    })
    fetch(`http://api.weatherapi.com/v1/astronomy.json?key=${API_TOKEN}&q=${cityToSearch.value}&dt=2023-03-30`)
    .then((response) => {
        return response.json ()
    })
    .then(data => {
        sunRiseTime.innerText = data.astronomy.astro.sunrise;
        sunSetTime.innerText = data.astronomy.astro.sunset
    })
})
