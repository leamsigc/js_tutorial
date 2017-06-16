window.onload = function () {
    var homeBtn = document.getElementById("home"); //home btn
    var close = document.querySelectorAll(".close");
    var modal = document.getElementById('home_modal');
    var header = document.querySelector('header');

    function modalShow(m) {
        m.classList.toggle('active');
        header.classList.toggle('hide');
        return false;
    }

    function closeModal() {
        modal.classList.toggle('active');
        header.classList.toggle('hide');
    }
    homeBtn.addEventListener('click', function () {
        modalShow(modal);
    });

    close[0].addEventListener('click', function () {
        closeModal();
    });
    //click out of the modal modal close ;
    window.onclick = function (e) {
        console.log(e);
        if (e.target == modal) {
            closeModal();
        }
    };
}