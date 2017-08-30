// window load then call the  content ;
 //Global variables;
 let lat;
 let lng;
 //get element ;
 const $demo = document.querySelector('#demo');
 //check if geolocation supported;
 if(navigator.geolocation){
     navigator.geolocation.getCurrentPosition(getIt,error);
 }else{
     error("Sorry your navigator don't support geolocations services.")
 }
 //declare success call back ;
 function getIt(pos){
    console.log(pos);
    lat = pos.coords.latitude;
    lng = pos.coords.longitude;
    getWeather();
}
 //declare error  handler call back ;
 function error(err){
    console.log(err);
}
//get weather function 
function getWeather(){
    const key = "768f10c39b6e09ced044affa134a08c6";
    const url ="http://api.openweathermap.org/data/2.5/find?";
    const units ="metric"
    let endPoint = `${url}lat=${lat}&lon=${lng}&appid=${key}&units=${units}`;
    //fetch api weather 
    fetch(endPoint)
        .then(data => data.json())
        .then(response => {
            console.log(response);
            const city = response.list[0].name;
            const coordLat = response.list[0].coord.lat;
            const coordLon = response.list[0].coord.lon;
            const temp = response.list[0].main.temp;
            const humidity =response.list[0].main.humidity;
            $demo.innerHTML=`<div class="weather_container">
                                <div class="weather_city">${city}</div>
                                <div class="weather_temp">${temp} &deg;C</div>
                                <div class="weather_icon"><i class="icon-rain"></i></div>
                                <div class="weather_time">Latitude: ${coordLat}<br>Longitude:${coordLon}</div>
                                <div class="weather_time">Humidity:${humidity}</div>
                            </div>`;
        }).catch();
}

window.addEventListener('load', function(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(getIt,error);
    }else{
        error("Sorry your navigator don't support geolocations services.")
    }
    // Get weather
});