//Oop
//book constructor
function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

//ui constructor
function Ui() {}

//crate the prototype for the ui to add a book to the list
Ui.prototype.addBookList = function (book) {
    // console.log(book);
    //ui table component
    const bookList = document.querySelector('#book-list');

    //create tr element
    const row = document.createElement('tr');

    //insert cols
    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href='#' class='delete'>X</a></td>
    `;

    //append to the book list
    bookList.appendChild(row);
};

//Ui clear fields
Ui.prototype.clearFields = function(){
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
}

//ui show Alert
Ui.prototype.showAlert = function(message,uiClass){
    const h1 = document.querySelector('h1');
    const parent = document.querySelector('.container');

    //create p
    const p = document.createElement('p');
    p.className = `alert ${uiClass}`;
    p.appendChild(document.createTextNode(message));
    // console.log(p);
    parent.insertBefore(p,h1);

    //remove after 3s
    setTimeout(() => {
        document.querySelector('.alert').remove();
    }, 3000);
}

//Ui delete item
Ui.prototype.deleteItem = function (target){
    if(target.classList.contains('delete')){
        target.parentElement.parentElement.remove();
    }
}

function Storage(){

}


Storage.prototype.getAllBooks = function (){
    let books;
    if(!localStorage.getItem('books')){
        books = [];
    }else{
        books = JSON.parse(localStorage.getItem('books'));
    }
    return books;
};

Storage.prototype.addBookToLocalStorage = function(book){
    const allBooks = this.getAllBooks();
    allBooks.push(book);
    localStorage.setItem('books',JSON.stringify(allBooks));
};

Storage.prototype.displayAllBooks = function(){
    const ui = new Ui();
        this.getAllBooks().map(book => ui.addBookList(book));
}

Storage.prototype.deleteBook = function(isbn){
    const allBooks = this.getAllBooks();
    allBooks.map((book, index) => {
        if(book.isbn === isbn ){
            allBooks.splice(index,1);
        }
    })
    // console.log(allBooks);
    localStorage.setItem('books', JSON.stringify(allBooks));

}
// console.log(Storage);
//add book function
function addBook(e) {
    e.preventDefault();
    //get form values
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const isbn = document.querySelector('#isbn').value;
    
    //instantiated ui
    const UI = new Ui();
    const store = new Storage();
    
    if (!title || !author || !isbn) {
        UI.showAlert('Please fill in all the fields','error');
        return;
    }
    //instantiated a book
    const book = new Book(title, author, isbn);
    console.log(book);

    
    //add book 
    UI.addBookList(book);
    store.addBookToLocalStorage(book);
    // store.getAllBooks();
    //success alert
    UI.showAlert('Good job You have successfully added a new book.','success');


    //clear fields
    UI.clearFields();
}

//event listener add books
document.getElementById('book_form').addEventListener('submit', addBook);


//add books function
function removeBooks(e) {
    e.preventDefault();
    if(!e.target.parentElement.previousElementSibling) return
    //create a new ui object
    const UI = new Ui();
    const store = new Storage();

    //delete item 
    UI.deleteItem(e.target)
    store.deleteBook(e.target.parentElement.previousElementSibling.textContent);
    //show a alert
    UI.showAlert('Book removed!!','success');
}
//event listener for delete books
document.getElementById('book-list').addEventListener('click', removeBooks);
window.addEventListener('DOMContentLoaded', function(){
    const store = new Storage();
    console.log(store)
    store.displayAllBooks();
});
// Storage.getAllBooks();