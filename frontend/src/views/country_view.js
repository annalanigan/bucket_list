const CountryView = function(container){
  this.container = container;
}

CountryView.prototype.render = function(bucketData){
  console.log(bucketData)
  bucketData.forEach(function(country){
    var li = document.createElement("li");
    var name = document.createElement("p");
    var continent = document.createElement("p");
    name.innerText = country.name;
    continent.innerText = country.continent;
    li.appendChild(name);
    li.appendChild(continent);
    console.log("this.container", this.container);
    this.container.appendChild(li); // binding?
  }.bind(this))
}

module.exports = CountryView;
