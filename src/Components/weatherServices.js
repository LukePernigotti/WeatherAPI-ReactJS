const getWeatherState = weather => {
  let weatherState;
  switch (weather.description) {
    case "clear sky":
      weatherState = "Despejado";
      break;
    case "few clouds":
      weatherState = "Nubosidad mínima";
      break;
    case "scattered clouds":
      weatherState = "Nubosidad dispersa";
      break;
    case "broken clouds":
      weatherState = "Mayormente nublado";
      break;
    case "overcast clouds":
      weatherState = "Nublado";
      break;
    case "shower rain":
      weatherState = "Lluvias fuertes";
      break;
    case "rain":
      weatherState = "Lluvioso";
      break;
    case "thunderstorm":
      weatherState = "Tormenta eléctrica";
      break;
    case "snow":
      weatherState = "Nieve";
      break;
    case "mist":
      weatherState = "Niebla";
      break;
    case "haze":
      weatherState = "Neblina";
      break;
    default:
      weatherState = weather.description;
      break;
  }
  return weatherState;
};

const getWeatherData = weatherData => {
  const { humidity, temp } = weatherData.main;
  const { speed } = weatherData.wind;
  const weatherState = getWeatherState(weatherData.weather[0]);
  //  const icon = `http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
  //console.log(icon);
  const data = {
    humidity,
    temperature: Number((temp - 273.15).toFixed(2)),
    weatherState,
    wind: `${speed} m/s`,
    icon: `http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`
  };

  //console.log(data);
  return data;
};
export default getWeatherData;
