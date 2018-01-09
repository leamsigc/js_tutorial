/*jslint es6 */
//crate a book class
class Book{
    constructor(title,author,isbn){
        this.author = author;
        this.title = title;
        this.isbn = isbn;
    }
}

//ui constructor
class UI {
    displayMessage(message,uiClass){
        const div = document.createElement('div');
        div.className = uiClass;
        div.appendChild(document.createTextNode(message));

        //get parent element
        const parent  = document.querySelector('.container');
        //get element to attach it before
        const brother = document.querySelector('form');

        parent.insertBefore(div,brother);

        //set time out to clear the error item
        setTimeout(() => {
            document.querySelector(`.${uiClass}`).remove();
        }, 3000);
    }
    //add book to the list
    addBookList(book){
        const row = document.createElement('tr');
        //parent element
        const bookList = document.querySelector('#book-list');

        row.innerHTML = `
        <th>${book.title}</th>
        <th>${book.author}</th>
        <th>${book.isbn}</th>
        <th><a class="delete" href="#">X</a></th>
        `;
        bookList.appendChild(row);
    }
    //reset the field value
    resetFields(){
        document.querySelector('#title').value = '';
        document.querySelector('#author').value = '';
        document.querySelector('#isbn').value = '';
    }
    deleteBooks(target){
        if(target.classList.contains('delete')){
            target.parentElement.parentElement.remove();
            this.displayMessage('you have remove a book successfully...','success');
        }
    }
}


//to local storage
class Store{

    static addBookToLocalStorage(book){
        const allBooks = Store.getAllBooks();
        allBooks.push(book);
        localStorage.setItem('books',JSON.stringify(allBooks));
    }


    static getAllBooks(){
        let books ;
        if(!localStorage.getItem('books')){
            books = [];
        }else{
            books = JSON.parse(localStorage.getItem('books'));
        }
        return books;
    }


    static displayBooks(){
        const ui = new UI();
        Store.getAllBooks().map(book => ui.addBookList(book));
    }


    static removeBookFromLocalStorage(isbn){
        const allBooks = Store.getAllBooks();
        allBooks.map((book, index) => {
            if(book.isbn === isbn ){
                allBooks.splice(index,1);
            }
        })
        // console.log(allBooks);
        localStorage.setItem('books', JSON.stringify(allBooks));
    }
}
//add book
function addBook(e){
    e.preventDefault();
    //get ui values
    const title = document.querySelector('#title').value,
          author = document.querySelector('#author').value,
          isbn = document.querySelector('#isbn').value;
    //create a new ui object
    const ui = new UI();

    //check if input have value
    if(!title || !author || !isbn){
        //display error message and return
        ui.displayMessage('Please check all the fields..','error');
        return false;
    }
    //create anew book object
    const book = new Book(title,author,isbn);
    //display the ui.display book
    ui.addBookList(book);
    //add to local storage
    Store.addBookToLocalStorage(book);
    //display success message
    ui.displayMessage('Good job you just added another book.','success');
    //reset fields
    ui.resetFields();
}

//remove book
function removeBook(e) {
    e.preventDefault();
    //new ui object
    const ui  = new UI();
    if(!e.target.parentElement.previousElementSibling) return
    //delete item
    ui.deleteBooks(e.target);
    // console.log(e.target.parentElement.previousElementSibling.textContent);
    //delete from local storage
        //previus element of the a tag the td #isbn
    Store.removeBookFromLocalStorage(e.target.parentElement.previousElementSibling.textContent);
    //display message success
    // ui.displayMessage('you have remove a book successfully...','success');
}

const bookForm = document.querySelector('#book_form');
bookForm.addEventListener('submit',addBook);

const bookDisplayList = document.querySelector('#book-list');

bookDisplayList.addEventListener('click',removeBook);
window.addEventListener('DOMContentLoaded',function(){
    // const ui = new UI;
    // const allBooks = Store.getAllBooks();
    // allBooks.map(function(book){
    //     return ui.addBookList(book);
    // });
    Store.displayBooks();
});