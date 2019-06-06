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
    case "light rain":
      weatherState = "Lluvias ligeras";
      break;
    case "moderate rain":
      weatherState = "Lluvias moderadas";
      break;
    case "heavy intensity rain":
      weatherState = "Lluvias intensas";
      break;
    case "very heavy rain":
      weatherState = "Lluvias fuertes";
      break;
    case "extreme rain":
      weatherState = "Lluvias extremas";
      break;
    case "light intensity shower rain":
      weatherState = "Lluvias ligeras";
      break;
    case "heavy intensity shower rain":
      weatherState = "Lluvias intensas";
      break;
    case "ragged shower rain":
      weatherState = "Lluvias irregulares";
      break;
    case "light intensity drizzle":
      weatherState = "Llovizna intensa";
      break;
    case "drizzle":
      weatherState = "Llovizna";
      break;
    case "heavy intensity drizzle":
      weatherState = "Llovizna fuerte";
      break;
    case "light intensity drizzle rain":
      weatherState = "Llovizna";
      break;
    case "shower rain and drizzle":
      weatherState = "Lluvia";
      break;
    case "heavy shower rain and drizzle":
      weatherState = "Lluvia";
      break;
    case "shower drizzle":
      weatherState = "Lluvioso";
      break;
    case "thunderstorm":
      weatherState = "Tormenta eléctrica";
      break;
    case "thunderstorm with light rain":
      weatherState = "Tormenta eléctrica ligera";
      break;
    case "thunderstorm with rain":
      weatherState = "Tormenta eléctrica";
      break;
    case "thunderstorm with heavy rain":
      weatherState = "Tormenta eléctrica fuerte";
      break;
    case "light thunderstorm":
      weatherState = "Tormenta eléctrica ligera";
      break;
    case "heavy thunderstorm":
      weatherState = "Tormenta eléctrica fuerte";
      break;
    case "ragged thunderstorm":
      weatherState = "Tormenta eléctrica irregular";
      break;
    case "thunderstorm with light drizzle	":
      weatherState = "Tormenta eléctrica muy ligera";
      break;
    case "thunderstorm with drizzle":
      weatherState = "Tormenta eléctrica";
      break;
    case "thunderstorm with heavy drizzle":
      weatherState = "Tormenta eléctrica fuerte";
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
    case "fog":
      weatherState = "Niebla";
      break;
    case "smoke":
      weatherState = "Humo";
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
  const data = {
    humidity,
    temperature: Number((temp - 273.15).toFixed(2)),
    weatherState,
    wind: `${speed} m/s`,
    icon: `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`
  };

  return data;
};
export default getWeatherData;
