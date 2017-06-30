"use strict";

window.onload = function () {
    var homeBtn = document.getElementById("home"); //home btn
    var modal = document.getElementById('home_modal');
    //close modal 
    var close = document.querySelectorAll(".close");
    //about modal 
    var modalAbout = document.getElementById('about_modal');
    var aboutBtn = document.getElementById('about');
    //contact modal 
    var modalContact = document.getElementById('contact_modal');
    var contactBtn = document.getElementById('contact');
    //header variable 
    var header = document.querySelector('header');
    //show modal function
    function modalShow(m) {
        m.classList.toggle('active');
        header.classList.toggle('hide');
        return false;
    }
    // close modal function 
    function closeModal(m) {
        m.classList.toggle('active');
        header.classList.toggle('hide');
    }
    //add event listener to all the btn 
    homeBtn.addEventListener('click', function () {
        modalShow(modal);
    });
    aboutBtn.addEventListener('click', function () {
        modalShow(modalAbout);
    });
    contactBtn.addEventListener('click', function () {
        modalShow(modalContact);
    });
    // add event listener to the close btn
    close[0].addEventListener('click', function () {
        closeModal(modal);
    });
    close[1].addEventListener('click', function () {
        closeModal(modalAbout);
    });
    close[2].addEventListener('click', function () {
        closeModal(modalContact);
    }
    //click out of the modal modal close ;
    );window.onclick = function (e) {
        if (e.target == modal) {
            closeModal(modal);
        } else if (e.target == modalAbout) {
            closeModal(modalAbout);
        } else if (e.target == modalContact) {
            closeModal(modalContact);
        }
    };
};