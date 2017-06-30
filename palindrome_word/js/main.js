window.addEventListener("load",function(){
  //input value;
  let  input = document.getElementById('input');
  //button 
  let button = document.getElementById('button');
  
  console.log(input);
  //function to get value display
  function change(){
    let inputValue = input.value;
    palindrome(inputValue);
    document.getElementById('demo').innerHTML= inputValue;
  }
  //add event listener to the button 
    button.addEventListener('click', function(){
      change();
    });
  // function check if the word is palindrome 
  function palindrome(arr){
    let answer = document.getElementById('answer');
    // Remove all the non word in the parameter
    let newArr = arr.replace(/[\W_]/g,"");
    //lowercase the result 
    let lowerCaseArr = newArr.toLowerCase();
    //split , reverse and join the lowercase parameter
    let reverseLowerCaseArr = lowerCaseArr.split("").reverse().join("");
    //check if the lowercase parameter is equal  to the reverse parameter 
    if(lowerCaseArr === reverseLowerCaseArr){
      return answer.innerHTML="This is a palindrome word";
    }
    //else return false
    else{
      return answer.innerHTML="This is not a palindrome word";
    }
  }
  
  
  
});