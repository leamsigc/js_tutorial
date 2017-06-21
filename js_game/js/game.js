window.onload=function(){
     //after all the content if is loaded first
    var riddle ={};

    //Function for the random number 
        function randomNumber(min, max){
            return Math.floor(Math.random()*(max - min +1)+min);
        }
    //play game function 
    function playGame(){
        var field1 =randomNumber(5,40);
        var field2 =randomNumber(5,40);
        var result= field1+field2;//this is the answer
        // generates the random 3 different number
        var resultArray= generateRandom(result);
        //push the right answer to the resultArray
            resultArray.push(result);
        // sort the resultArray
            resultArray.sort();
        riddle={
            field1:field1,
            field2:field2,
            resultArray:resultArray,
            answer:result
        };
        document.getElementById('field1').innerHTML=riddle.field1;
        document.getElementById('field2').innerHTML=riddle.field2;
        document.getElementById('option1').innerHTML=riddle.resultArray[0];
        document.getElementById('option2').innerHTML=riddle.resultArray[1];
        document.getElementById('option3').innerHTML=riddle.resultArray[2];
        document.getElementById('option4').innerHTML=riddle.resultArray[3];
        console.log("==========================");
        console.log(riddle.resultArray);
        console.log("==========================");
    }
    // function generateRandom declare
    function generateRandom(sum){
        let resultArray=[];
        let randomNumberArray = [];
        // while loop for a random number between 1 and 10 
        while(randomNumberArray.length < 3){
            let random = randomNumber(1,10);
            //check if if we dont have repeat numbers
            if (randomNumberArray.indexOf(randomNumber) > -1)
            continue;
            //push the random number generated to the Array
            randomNumberArray.push(random);
        }
        console.log("==========================");
        console.log(randomNumberArray,addSubtract);
        console.log("==========================");
        // for loop 
        for(var i = 0; i< 3;i++){
            var  addSubtract= randomNumber(0,1);
            var result=sum;
            console.log("==========================");
            console.log(addSubtract);
            console.log("==========================");
            if(addSubtract === 1 ){
            // add a random number to the result 
                result+=randomNumberArray[i];
            }else{
                // subtract  a random number to the result
                result -= randomNumberArray[i]; 
            }
            // push the result to the  resultArray
            resultArray.push(result);
        }
        console.log("==========================");
        console.log(resultArray);
        console.log("==========================");
        // return the main array
        return resultArray;
    }
    // Call the main function play game 
    playGame();
}