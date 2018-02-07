const CountryData = require('./models/country_data');
const CountryView = require('./views/country_view');

const app = function(){
  // console.log("started....")
  const countryData = new CountryData('https://restcountries.eu/rest/v2');
  const ourBucketList = new CountryData('http://localhost:5000/api/countries');
  var ul = document.querySelector("#bucket-list");
  // console.log("ul", ul);
  const countryView = new CountryView(ul);
  // console.log("country view. containter", countryView.container);
  // ourBucketList.onLoad = countryView.render;
  ourBucketList.getData(countryView.render.bind(countryView));
}


window.addEventListener("load", app);
