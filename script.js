var x = document.getElementById("demo");

function getLocation() {
    if (navigator.geolocation) {
        console.log(navigator.geolocation.getCurrentPosition(showPosition));
    } else { 
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}