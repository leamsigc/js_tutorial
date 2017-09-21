// window load 
window.addEventListener('load', function () {
    'use strict';
    //user names
    const userNames = ["ESL_SC2", "OgamingSC2", "freecodecamp", "RobotCaleb", "cretetion", "noobs2ninjas"];
    const $display = document.getElementById('app');
    let input = document.getElementById('search');
    const $buttonAll = document.getElementById('all');
    const $buttonLive = document.getElementById('on');
    const $buttonOff = document.getElementById('off');
    //loop for each user and check if the are live 
    userNames.forEach((item) => {
        checkLive(item, $display);
    })
    //add event listener for the input 
    input.addEventListener('keyup', searchChannel);
    //event listener for the all button ;
    $buttonAll.addEventListener('click', showAll);
    //event listener for the on button ;
    $buttonLive.addEventListener('click', showOn);
    //event listener for the off button ;
    $buttonOff.addEventListener('click', showOff);
}); //function to call api 
function checkLive(Name, app) {
    //ul too  attach  to the ul;
    let ul = "";
    //end point for the api call;
    let endPointChannel = `https://cors.io/?https://wind-bow.gomix.me/twitch-api/channels/${Name}`;
    axios.get(endPointChannel)
        .then(response => {
            ul += `<li  class="user-info">
            <img src="${response.data.profile_banner}">
            <a href="${response.data.url}" target="_blanc">${response.data.name}</a>`;
            //check user live Stream 
            let endPointUser = `https://cors.io/?https://wind-bow.gomix.me/twitch-api/streams/${Name}`;
            axios.get(endPointUser)
                .then(userResponse => {
                    if (userResponse.data.stream === null) {
                        ul += `<i class="fa fa-ban fa-2x" aria-hidden="true"></i>`;
                    } else {
                        ul += `<i class="fa fa-check fa-2x" aria-hidden="true"></i>`;
                    }
                    app.innerHTML += ul;
                }).catch(error => console.log(`SOMEError${error}`));
        })
        .catch(error => console.log(error));
}
//search channel function
function searchChannel(e){
    let inputvalue = document.getElementById('search');
    // console.log(e.keyCode);
    let channelName = document.querySelectorAll(".user-info a ");
        channelName.forEach((item)=>{
           let contact = item.textContent.toUpperCase();
           if(contact.indexOf(inputvalue.value.toUpperCase()) > -1){
            item.parentNode.style.display = '';
           }else{
               item.parentNode.style.display='none';
           }
        })
}
//showAll function 
function showAll() {
    const channels = document.querySelectorAll('.user-info .fa');
    channels.forEach((item)=>{
        item.parentNode.style.display='';
    })
}
function showOn() {
    const channels = document.querySelectorAll('.user-info .fa-ban');
    const channelsOn = document.querySelectorAll('.user-info .fa-check ');
    channels.forEach((item)=>{
        item.parentNode.style.display='none';
    })
    channelsOn.forEach((item)=>{
        item.parentNode.style.display='';
    })
}
function showOff() {
    const channels = document.querySelectorAll('.user-info .fa-check ');
    const channelsOff = document.querySelectorAll('.user-info .fa-ban');
    console.log(channels);
    channels.forEach((item)=>{
        item.parentNode.style.display='none';
    })
    channelsOff.forEach((item)=>{
        item.parentNode.style.display='';
    })
}