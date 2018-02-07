const Request = require('../services/request');

const CountryData = function(url){
  this.url = url;
  this.onLoad = null;
}

CountryData.prototype.getData = function () {
  let countryRequest = new Request(this.data);
  countryRequest.get(this.onLoad);
};

module.exports = CountryData;
