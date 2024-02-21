const meuToken = import.meta.env.VITE_TOKEN;

export const searchCities = (term) => {
  return fetch(`http://api.weatherapi.com/v1/search.json?lang=pt&key=${meuToken}&q=${term}`)
    .then((response) => response.json())
    .then((data) => {
      if (data.length === 0) {
        window.alert('Nenhuma cidade encontrada');
      }
      return data;
    });
};

export const getWeatherByCity = (cityURL) => {
  return fetch(`http://api.weatherapi.com/v1/forecast.json?lang=pt&key=${meuToken}&q=${cityURL}&days=7`)
    .then((response) => response.json())
    .then((data) => {
      const objeto = {
        name: data.location.name,
        country: data.location.country,
        temp: data.current.temp_c,
        condition: data.current.condition.text,
        icon: data.current.condition.icon,
        url: cityURL,
        forecast: data.forecast.forecastday,
      };
      return objeto;
    });
};
