   var riddle = {};
   var after = document.getElementById('answerCheck');
   var sumWrong=0;//
   var sumCorrect=0;
   //========== js for the score========
   var wrong = document.getElementById('wrong_js');
   var correct=document.getElementById('correct_js');
   var totalScore = document.getElementById('total_js');
   window.onload = function () {
       //after all the content if is loaded first

       //Function for the random number 
       function randomNumber(min, max) {
           return Math.floor(Math.random() * (max - min + 1) + min);
       }
       //play game function 
       function playGame() {
           var field1 = randomNumber(5, 40);
           var field2 = randomNumber(5, 40);
           var result = field1 + field2; //this is the answer
           // generates the random 3 different number
           var resultArray = generateRandom(result);
           //push the right answer to the resultArray
           resultArray.push(result);
           // sort the resultArray
           resultArray.sort(function (a, b) {
               return 0.5 - Math.random();
           });
           riddle = {
               field1: field1,
               field2: field2,
               resultArray: resultArray,
               answer: result
           };
           document.getElementById('field1').innerHTML = riddle.field1;
           document.getElementById('field2').innerHTML = riddle.field2;
           document.getElementById('option1').innerHTML = riddle.resultArray[0];
           document.getElementById('option2').innerHTML = riddle.resultArray[1];
           document.getElementById('option3').innerHTML = riddle.resultArray[2];
           document.getElementById('option4').innerHTML = riddle.resultArray[3];
           console.log("========================== one ");
           console.log(riddle.resultArray);
           console.log("==========================");
           //wrong answers from the player
           wrong.innerHTML=sumWrong;
           //correct answers from the player
           correct.innerHTML=sumCorrect;
           //Total of game played
           var totalPLay= sumCorrect + sumWrong;
           console.log(totalPLay);
           totalScore.innerHTML = totalPLay;
       }
       // function generateRandom declare
       function generateRandom(sum) {
           let resultArray = [];
           let randomNumberArray = [];
           // while loop for a random number between 1 and 10 
           while (randomNumberArray.length < 3) {
               let random = randomNumber(1, 10);
               //check if if we dont have repeat numbers
               if (randomNumberArray.indexOf(random) > -1)
                   continue;
               //push the random number generated to the Array
               randomNumberArray.push(random);
           }
           console.log("========================== two");
           console.log(randomNumberArray);
           console.log("==========================");
           // for loop 
           for (var i = 0; i < 3; i++) {
               var addSubtract = randomNumber(0, 1);
               var result = sum;
               console.log("========================== tree");
               console.log(addSubtract);
               console.log("==========================");
               if (addSubtract === 1) {
                   // add a random number to the result 
                   result += randomNumberArray[i];
               } else {
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
       var button = document.getElementById('playAgain');
       //click call a function 
       button.addEventListener('click', function () {
           playGame();
           after.classList.remove("wrong");
           after.classList.remove('correct');
       });
    
   }
   // console.log("==========================");
   // console.log(riddle.answer);
   // console.log("==========================");
   // console.log(ElementSelected.innerHTML);
   // console.log("==========================");
   // function to check the answers on click

   function checkAnswer(ElementSelected) {
       if (ElementSelected.innerHTML == riddle.answer) {
           //add one tho the correct score
           sumCorrect++;
           // correct answer
           after.classList.toggle("correct");
           after.innerHTML = "That is the correct answer !!!!<br>Hit the button below to play again";
       } else {
           //wrong answer
           sumWrong++;
           after.classList.toggle('wrong');
           after.innerHTML = "No, you're wrong my friend <br/> Try again!!!! ";
       }
   }
   //Play again function