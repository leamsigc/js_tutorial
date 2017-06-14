window.onload = function () {
    var count = 0;
    var prev = document.getElementById('prev');
    var next = document.getElementById('next');
    var slideInterval = setInterval(mas, 3000);
    //show slide function
    function slideShow(n) {
        var slides = document.getElementsByClassName('slide_item');
        var dots = document.getElementsByClassName('dot');
        slides[count].className = 'slide_item';
        dots[count].className = " dot ";
        count = (n + slides.length) % slides.length;
        slides[count].className = 'slide_item active';
        dots[count].className = ' dot active_dot';
    }
    //funtion to add to the counter
    function plusSlide(n) {
        slideShow(count + n)
    }
    //mas function for easy interval 
    function mas() {
        plusSlide(1);
    }
    //call slide show function 
    slideShow(count);
    // event listener for the  next and prev button 
    prev.addEventListener('click', function () {
        plusSlide(-1);
        clearInterval(slideInterval); // to clear the interval 
    })
    next.addEventListener('click', function () {
        mas();
        clearInterval(slideInterval); // clear interval 
    });
}
