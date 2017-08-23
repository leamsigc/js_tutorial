//window load and run the js 
window.addEventListener('load',() => {
    //quote button ;
    const btnQ = document.getElementById("quote-button");
    //add event listener to the btn-quote ;
    btnQ.addEventListener('click', randomQuote);//click and call the random quote  function ;
    // random quote function ;
    function randomQuote () {
        const textQuote = document.getElementById('quote-text');//text quote ;
        //quote author ;
        const quoteAuthor = document.getElementById('quote-author');
        //twitter share button ;
        const twitter = document.getElementById('twitter');
        //facebook share button ;
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
                quoteAuthor.textContent=data["author"];//quote author ;
                //set attribute for share twitter; 
                twitter.setAttribute('href' , `https://twitter.com/home/?status=${data['quote']}(${data.author})`);
            })
            .catch(function(err) {//if any error we can see it in the console ;
                // Error :(
                    console.log(err);
                    textQuote.textContent=err;
        });
    }
});


