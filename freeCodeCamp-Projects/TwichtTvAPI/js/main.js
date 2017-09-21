// window load 
window.addEventListener('load', function () {
    'use strict';
    //user names
    const userNames = ["ESL_SC2", "OgamingSC2",  "freecodecamp", "RobotCaleb", "cretetion", "noobs2ninjas"];
    const $display = document.getElementById('app');
    //loop for each user and check if the are live 
    userNames.forEach(item =>{
        checkLive(item, $display);
    })
});//function to call api 
function checkLive (strimerName,app){
    //ul too  attach  to the ul;
    let ul = "";
    //end point for the api call;
    let endPointChannel =`https://cors.io/?https://wind-bow.gomix.me/twitch-api/channels/${strimerName}`;
    axios.get(endPointChannel)
        .then(response => 
        {
            ul +=`<li  class="user-info">
            <img src="${response.data.profile_banner}">
            <a href="${response.data.url}" target="_blanc">${response.data.name}</a>`;
            console.log(response.data);
            //check user live Stream 
            let endPointUser = `https://cors.io/?https://wind-bow.gomix.me/twitch-api/streams/${strimerName}`; 
            axios.get(endPointUser)
            .then(userResponse => {
                if(userResponse.data.stream === null){
                    ul+=`<i class="fa fa-ban fa-2x" aria-hidden="true"></i>`;
                }else{
                    ul+=`<i class="fa fa-check fa-2x" aria-hidden="true"></i>`;}
                app.innerHTML+=ul;
            }).catch(error => console.log(error));
        })
        .catch(error => console.log(error));
}