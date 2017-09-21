// window load 
window.addEventListener('load', function () {
    'use strict';
    const userNames = ["ESL_SC2", "OgamingSC2",  "freecodecamp", "RobotCaleb", "comster404", "brunofin"];
    const $display = document.getElementById('app');
    userNames.forEach(item =>{
        checkLive(item, $display);
    })
});//function to call api 
function checkLive (strimerName,app){
    let ul = "";
    let endPointChannel =`https://cors.io/?https://wind-bow.gomix.me/twitch-api/channels/${strimerName}`;
    console.log(endPointChannel);
    axios.get(endPointChannel)
        .then(response => 
        {
            ul +=`<li  class="user-info">
            <img src="${response.data.profile_banner}">
            <a href="${response.data.url}" target="_blanc">${response.data.name}</a>`;
            console.log(response.data);
            //check user live Stream 
            let endPointUser = `https://cors.io/?https://wind-bow.gomix.me/twitch-api/streams/${strimerName}`;
            console.log(endPointUser);   
            axios.get(endPointUser)
            .then(userResponse => {
                console.log("===========================");
                console.log(userResponse)
                if(userResponse.data.stream === null){
                    ul+=`<i class="fa fa-ban fa-2x" aria-hidden="true"></i>`;
                }else{
                    ul+=`<i class="fa fa-check fa-2x" aria-hidden="true"></i>`;}
                console.log("===========================");
                app.innerHTML+=ul;
            }).catch(error => console.log(error));
        })
        .catch(error => console.log(error));
}