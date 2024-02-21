
## 1. Implementação da função `searchCities`

A função `searchCities` está presente no arquivo helpers/weatherAPI.js. Esta função ainda não está implementada, mas é essencial para retornar uma lista de cidades correspondentes ao termo de busca fornecido.

Ela requer um parâmetro term, que representa o termo de busca inserido pelo usuário. Por exemplo, se o usuário digitar "São Paulo" na barra de busca, o parâmetro term será "São Paulo".

Você deve utilizar o endpoint de pesquisa de cidades da API do clima para obter os dados das cidades que correspondem ao termo de busca.

Após a chamada da API, a função deve retornar uma lista de objetos. Se a lista estiver vazia, um alerta com a mensagem "Nenhuma cidade encontrada" deve ser exibido, e a lista vazia deve ser retornada.

## 2. Implemente a função `getWeatherByCity`


A função `getWeatherByCity`, encontrada no arquivo `helpers/weatherAPI.js`, requer um parâmetro `cityURL`, que é o URL da cidade obtido na pesquisa de cidades. Por exemplo, se o usuário pesquisar por "São Paulo", o parâmetro cityURL será "sao-paulo-sao-paulo-brazil".

Esta função deve chamar o endpoint de tempo atual da API com o URL da cidade fornecido. Após a chamada da API, ela deve retornar um objeto contendo apenas as informações do tempo atual da cidade, como temperatura, condição climática e ícone.

Além disso, você precisa complementar a função `handleSearch` no arquivo `helpers/pageFunctions.js`. Dentro dessa função, a função `searchCities` é chamada, e seu retorno deve ser utilizado para requisitar o tempo atual de cada cidade encontrada.


## 3. Liste as cidades retornadas pela API

Após a chamada da API, o retorno deve ser renderizado utilizando a função `createCityElement`. Esta função, presente no arquivo `helpers/pageFunctions.js`, cria elementos HTML que representam as cidades retornadas pela API.

Cada elemento criado pela função `createCityElement` deve ser adicionado como filho do elemento <ul id="cities">.

## 4. Adicione um botão para ver a previsão de 7 dias de uma cidade
Para cada cidade retornada pela API, um botão `Ver previsão` deve ser criado dentro do elemento correspondente. Esse botão deve acionar um evento de clique que requisita a previsão do tempo de 7 dias da cidade.

A função `createCityElement` deve ser modificada para criar esse botão, e ao ser clicado, deve realizar a requisição da previsão de 7 dias da cidade utilizando o endpoint da previsão do tempo da API.

A previsão do tempo da cidade deve ser exibida na tela dentro de um modal, utilizando a função showForecast.

