const Request = require('../services/request');

const CountryData = function(url){
  this.url = url;
  this.onLoad = null;
}

CountryData.prototype.getData = function (callback) {
  let countryRequest = new Request(this.url);
  countryRequest.get(callback);
};

module.exports = CountryData;
