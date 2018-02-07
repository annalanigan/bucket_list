const Request = function(url){
  this.url = url;
}

Request.prototype.get = function (callback) {
  console.log("this.url", this.url)
  const getRequest = new XMLHttpRequest();
  getRequest.open('GET', this.url);
  getRequest.addEventListener('load', function() {
    if(this.status !== 200){
      return;
    }
    let text = JSON.parse(this.responseText);
    callback(text);
  })
  getRequest.send();
};

module.exports = Request;
