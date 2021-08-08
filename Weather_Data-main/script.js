//1. create a request variable
var req = new XMLHttpRequest();
//2. create a new connection
req.open("GET", "https://restcountries.eu/rest/v2/all", true); //true flag to handle the errors during the access of of URL
//3.Send the request
req.send();
//4. Load response
req.onload = function () {
  var data = JSON.parse(this.response); //String to JSON
  for (var i in data) {
    getWeatherData(data[i].latlng[0], data[i].latlng[1]);
  }
}; //onload will trigger the function when the data is ready

function getWeatherData(lat, long) {
  var key = "1234f59e5798e86cc9241a1ff070cd36";
  var req1 = new XMLHttpRequest();
  req1.open(
    "GET",
    `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${key}`,
    true
  );
  req1.send();
  req1.onload = function () {
    var result = JSON.parse(this.response);
    console.log(result);
  };
}
