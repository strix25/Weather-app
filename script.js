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
    console.log("hi");
    let link = `https://fcc-weather-api.glitch.me/api/current?lat=46.5546503&lon=15.6458812`;
    //let link = `https://fcc-weather-api.glitch.me/api/current?lon=:${long}&lat=:${lat}`;
    var xhr = new XMLHttpRequest();
    xhr.open('GET', link);
    xhr.onload = function() {
        if (this.status === 200) {
            console.log(xhr.responseText);
            console.log(xhr.response);
            console.log("first part");
        }
        else {
            alert('Request failed.  Returned status of ' + xhr.status);
            console.log("second part");
        }
    };
    xhr.send(null);
}

// function potato(){
//     let url = `https://fcc-weather-api.glitch.me/api/current?lat=46.5546503&lon=15.6458812`;
//     var xhr = new XMLHttpRequest();
//     xhr.open('GET', url, true);

//     console.log(xhr.readyState);

//     xhr.onload = function (){
//         console.log("READYstate: ", xhr.readyState);
//         if(this.status == 200){
//             console.log("aaaaaaaa");
//         }
//     }
// }