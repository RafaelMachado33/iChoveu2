const meuToken = import.meta.env.VITE_TOKEN;

export const searchCities = (term) => {
  return fetch(`http://api.weatherapi.com/v1/search.json?lang=pt&key=${meuToken}&q=${term}`)
    .then((response) => response.json())
    .then((data) => {
      //console.log(data.current.temp_c);
      if (data.length === 0) {
        window.alert('Nenhuma cidade encontrada');
      }
      //console.log(data.current.temp_c);
      return data;
    });
};

export const getWeatherByCity = (cityURL) => {
  return fetch(`http://api.weatherapi.com/v1/current.json?lang=pt&key=${meuToken}&q=${cityURL}`)
    .then((response) => response.json())
    .then((data) => {
      /* console.log(data.current.temp_c)
       console.log(data.current.condition.text)
       console.log(data.current.condition.icon) */
      const objeto = {
        temp: data.current.temp_c,
        condition: data.current.condition.text,
        icon: data.current.condition.icon,
        url: cityURL,
      };
      return objeto;
    });
};
