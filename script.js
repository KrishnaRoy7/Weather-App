const apiKey = "21e104c514c19b5086886a6de580a901";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchbox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherImg=document.querySelector(".weather-icon");
async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if(response.status==404){
    document.querySelector(".error").style.display="block"
    document.querySelector(".weather").style.display="none"
  }else{
    var data = await response.json();


  console.log(data)
  document.querySelector(".city").innerHTML = data.name + ', ' + data.sys.country;
  document.querySelector(".temp").innerHTML = data.main.temp + "°C";
  document.querySelector(".max-temp").innerHTML =
data.main.temp_max + "°C";
  document.querySelector(".min-temp").innerHTML =
    data.main.temp_min+ "°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h";

    if(data.weather[0].main=="Clouds"){
        weatherImg.src="images/clouds.png"
    }else if(data.weather[0].main=="Clear"){
        weatherImg.src="images/clear.png"
    }else if(data.weather[0].main=="Rain"){
        weatherImg.src="images/rain.png"
    }else if(data.weather[0].main=="Drizzle"){
        weatherImg.src="images/drizzle.png"
    }else if(data.weather[0].main=="Mist"){
        weatherImg.src="images/mist.png"
    }
    document.querySelector(".weather").style.display="block"
  }
  
}
searchBtn.addEventListener("click", () => {
  checkWeather(searchbox.value);
});
