window.addEventListener('load', function (){
'use strict';
const input = document.getElementById('search-input');
console.log(input);
    input.addEventListener('keydown', function(e){
        if(e.keyCode === 13){
            let inputValue = input.value;
            let removeSpace= inputValue.split(' ').join('+');
            wikiViewer(removeSpace);
            input.value = "";
        }
    });
    function wikiViewer(value) {
        let app = document.getElementById('app');
        let endPoint = `http://cors.io/?https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=${value}`;
       axios.get(endPoint)
       .then(response =>{
        let searchResults = response.data.query.search;
        let display = '<ul>';
        searchResults.forEach(function(element) {
            display+=
            `<li class="wiki_results">
                <h2>${element.title}</h2>
                <a href='https://en.wikipedia.org/?curid=${element.pageid}'target='_blank'>
                <p>${element.snippet}</p>
                </a>
            </li>`;
        });
        display+="</ul>";
        app.innerHTML = display;
       })
       .catch(error => console.log(error));
    }
});