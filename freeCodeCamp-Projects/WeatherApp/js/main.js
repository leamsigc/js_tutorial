// window load then call the  content ;
window.addEventListener('load', function(){
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
});
 //declare success call back ;
 function getIt(pos){
    console.log(pos);
    lat = pos.coords.latitude;
    lng = pos.coords.longitude;
    console.log(lat);
    console.log(lng);
}
 //declare error  handler call back ;
 function error(err){
    console.log(err);
}