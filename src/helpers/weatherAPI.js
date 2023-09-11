const meuToken = import.meta.env.VITE_TOKEN;

export const searchCities = (term) => {
  fetch(`http://api.weatherapi.com/v1/search.json?lang=pt&key=${meuToken}&q=${term}`)
    .then((response) => response.json())
    .then((data) => {
      if (data.length === 0) {
        window.alert('Nenhuma cidade encontrada');
      }
    });
};

export const getWeatherByCity = (/* cityURL */) => {
  //   seu código aqui
};
