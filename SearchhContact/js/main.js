window.addEventListener('load', function () {
    let input = document.getElementById('input');
    //add event listener to the input 
    input.addEventListener('keyup',searchContact);
    //search contact function 
    function searchContact(){
        //input value
        let inputValue = input.value.toUpperCase();
        console.log("======================");
        console.log(inputValue);
        console.log("======================");
        let ul = document.getElementById('ul');
        console.log("======================");
        console.log(ul);
        console.log("======================");
        let li =ul.querySelectorAll('li.collection-item');
        console.log("======================");
        console.log(li);
        console.log("======================");
        //loop 
        for(let i = 0; i < li.length;i++){
            let a = li[i].getElementsByTagName('a')[0];
            console.log("======================");
            console.log(a);
            console.log("======================");
            let contact = a.innerText.toUpperCase();
            console.log(contact);
            console.log("======================");
            if(contact.indexOf(inputValue) > -1){
                li[i].style.display = '';
            }else{
                li[i].style.display = 'none';
            }
        }
        console.log(inputValue);
    }
})
