const CountryData = require('/models/country_data');

const app = function(){
  const countryData = new CountryData('https://restcountries.eu/rest/v2');
}


window.addEventListener("load", app);
