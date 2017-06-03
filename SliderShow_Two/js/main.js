var count = 0;//slides displays now [0]
var prev = document.getElementById('prev');//get the previous button 
var next = document.getElementById('next');//get the next button 
// function to show the slides 
 function showSlide(n){
     var slides = document.getElementsByClassName('slides_item');//get all the slides in the slide_show container
     slides[count].className = "slides_item";// we make sure the have the slides_item class to display none
     count= (n + slides.length)%slides.length;//redefine the count count =1 well we redefine  to (1+slides.length"4")= 5 then we %slides.length this gonna be = to 1 because 5%4 = will remains 1
     slides[count].className="slides_item active";//then we add the class active to it that displays to flex 
 }
 // Define the plus function the parameter n is gonna be 1 or -1 
 function plusSlide(n){
     showSlide(count+n)//we add the number to our count : 2 + 1 = 3 ; or 2 -1 = 1
 }
 showSlide(count);// we call the function to show the slides 
 //Add the event listener to our button every time the event happen our anonymous function will call plusSlides() function 
  prev.addEventListener("click", function(){
    plusSlide(-1);
    clearInterval(slideInterval);
  });
  var mas =  function mas (){
    plusSlide(1);
  };
  next.addEventListener('click',function(){
      mas();
      clearInterval(slideInterval);// clear interval to stop the function recall 
  });
//to make our slides automatic we do the next
var slideInterval = setInterval(mas,3000);