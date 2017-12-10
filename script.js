const locationn = document.getElementById("location");
const temp = document.getElementById("temp");
const weather = document.getElementById("weather");
const icon = document.getElementById("icon");

function geo_success(position) {
    console.log(position.coords.latitude, position.coords.longitude);
    //do_something(position.coords.latitude, position.coords.longitude);
    potato(position.coords.latitude, position.coords.longitude);
    //potato();
  }
  
  function geo_error() {
    console.log("Sorry, no position available.");
  }
  
  var geo_options = {
    enableHighAccuracy: true, 
    maximumAge        : 30000, 
    timeout           : 27000
  };
  
  var wpid = navigator.geolocation.watchPosition(geo_success, geo_error, geo_options);

// //ajax req
function potato(lat, long){
    console.log(typeof(long));

    //let link = `https://fcc-weather-api.glitch.me/api/current?lat=46.5546503&lon=15.6458812`;
    let link = `https://fcc-weather-api.glitch.me/api/current?lon=${long}&lat=${lat}`;
    var xhr = new XMLHttpRequest();
    xhr.open('GET', link);
    xhr.onload = function() {
        if (this.status === 200) {
            var data = JSON.parse(xhr.responseText);

            locationn.innerHTML = data.name;
            let deg = data.main.temp *10;
            temp.innerHTML = Math.round(deg)/10;
            weather.innerHTML = data.weather[0].main;
            icon.src = data.weather[0].icon;

            console.log(data);
            console.log("first part");
        }
        else {
            alert('Request failed.  Returned status of ' + xhr.status);
            console.log("second part");
        }
    };
    xhr.send(null);
}



// ​$("#tempunit").click(function () {
//     var currentTempUnit = $("#tempunit").text();
//     var newTempUnit = currentTempUnit == "C" ? "F" : "C";
//     $("#tempunit").text(newTempUnit);
//     if (newTempUnit == "F") {
//       var fahTemp = Math.round(parseInt($("#temp").text()) * 9 / 5 + 32);
//       $("#temp").text(fahTemp + " " + String.fromCharCode(176));
//     } else {
//       $("#temp").text(currentTempInCelsius + " " + String.fromCharCode(176));
//     }
//   });
  
