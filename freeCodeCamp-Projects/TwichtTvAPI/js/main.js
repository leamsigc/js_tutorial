// window load 
window.addEventListener('load', function () {
    'use strict';
    checkLive(userNames[0]);
});
const userNames = ["ESL_SC2", "OgamingSC2",  "freecodecamp", "RobotCaleb", "comster404", "brunofin"];
//function to call api 
function checkLive (strimerName){
    let endPointChannel =`https://cors.io/?https://wind-bow.gomix.me/twitch-api/channels/${strimerName}`;
    console.log(endPointChannel);
    axios.get(endPointChannel)
        .then(response => 
        {
            console.log(response.data);
        })
        .catch(error => console.log(error));
    //check user live Stream 
    let endPointUser = `https://cors.io/?https://wind-bow.gomix.me/twitch-api/streams/${strimerName}`;
    console.log(endPointUser);   
    axios.get(endPointUser)
    .then(response => console.log(response))
    .catch(error => console.log(error));
}