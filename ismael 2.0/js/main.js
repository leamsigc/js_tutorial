//   for the nav mobile 
var menu= document.getElementById("toggle_js");
menu.addEventListener('click',function () {
    var ul= document.getElementById('menu_ul');
    ul.classList.toggle('open');
});