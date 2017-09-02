// window load then call the  content ;
 //Global variables;
 let lat;
 let lng;
 let check = true;
 let c;
 //get element ;
 const $demo = document.querySelector('#demo');
 //declare success call back ;
 function getIt(pos){
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
    const url ="https://api.openweathermap.org/data/2.5/find?";
    const units ="metric"
    let endPoint = `${url}lat=${lat}&lon=${lng}&appid=${key}&units=${units}`;
    //fetch api weather 
    fetch(endPoint)
        .then(data => data.json())
        .then(response => {
            const city = response.list[0].name;
            const coordLat = response.list[0].coord.lat;
            const coordLon = response.list[0].coord.lon;
            const temp = response.list[0].main.temp;
            const humidity =response.list[0].main.humidity;
            const icon = response.list[0].weather[0].icon;
            $demo.innerHTML=` <div class="weather_city">${city}</div>
                                <div class="weather_temp" id="celsius">${temp} &deg;C</div>
                                <div class="weather_icon">
                                <img src="http://openweathermap.org/img/w/${icon}.png" >
                                </div>
                                <div class="weather_time">Latitude: ${coordLat}<br>Longitude:${coordLon}</div>
                                <div class="weather_time">Humidity:${humidity}</div>`;
       c = temp;
        }).catch();
}

window.addEventListener('load', function(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(getIt,error);
    }else{
        error("Sorry your navigator don't support geolocations services.")
    }
//get the element to change
let dgre = document.getElementById('change');
//add event listener to element
dgre.addEventListener('click',function(){
  let displayTempeture = document.getElementById("celsius");
  let displayC = document.getElementById('c');
  let displayF = document.getElementById('f');
  displayC.classList.toggle('active');
  displayF.classList.toggle('active');
	if(check === true){
		displayTempeture.innerHTML = changeG(c);
		check = false;
		}else{ displayTempeture.innerHTML = `${c} &deg; C`;
		check = true;
    }
});
//function that change the tempeture
function changeG(celsus){ 
    let f = celsus*1.8+32; 
    return `${f} &deg; F`;
}
  });