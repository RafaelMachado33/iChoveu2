const meuToken = import.meta.env.VITE_TOKEN

//console.log(dados.json())  pq não finciona o consoe.log()?

export const searchCities = (term) => {
    fetch(`api.weatherapi.com/v1/current.json?key=${meuToken}&q=${term}&aqi=no`)
        .then((response) => response.json())
        .then((data) => console.log(data));
};

export const getWeatherByCity = (/* cityURL */) => {
    //   seu código aqui
};
