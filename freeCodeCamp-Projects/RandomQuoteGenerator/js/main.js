//window load and run the js 
window.addEventListener('load',() => {
    //quote button ;
    const btnQ = document.getElementById("quote-button");
    //add event listener to the btn-quote ;
    btnQ.addEventListener('click', randomQuote);//click and call the random quote  function ;
    // random quote function ;
    function randomQuote () {
        let textQuote = document.getElementById('quote-text');//text quote ;
        // textQuote.textContent = text;
        //quote autor ;
        let quoteAutor = document.getElementById('quote-author');
        //get quote api ;
        let url="https://talaikis.com/api/quotes/random/";//url api;
        //https://talaikis.com/random_quotes_api/ quote api ..;
        fetch(url)
            .then( response => {
                return response.json();//convert the response to json data ;
            })
            .then(data => {
                console.log(data);//console log the data ;
                textQuote.textContent=data["quote"];//data quote to text quote ;
                quoteAutor.textContent=data["author"];//quote author ;
            })
            .catch(function(err) {//if any error we can see it in the console ;
                // Error :(
                    console.log(err);
        });
    }
});


