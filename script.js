function geo_success(position) {
    console.log(position.coords.latitude, position.coords.longitude);
    //do_something(position.coords.latitude, position.coords.longitude);
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

