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
//add book function
function addBook(e) {
    e.preventDefault();
    //get form values
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const isbn = document.querySelector('#isbn').value;
    
    //instantiated ui
    const UI = new Ui();
    
    if (!title || !author || !isbn) {
        UI.showAlert('Please fill in all the fields','error');
        return;
    }
    //instantiated a book
    const book = new Book(title, author, isbn);
    console.log(book);

    
    //add book 
    UI.addBookList(book);
    
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
    
    //create a new ui object
    const UI = new Ui();

    //delete item 
    UI.deleteItem(e.target)

    //show a alert
    UI.showAlert('Book removed!!','success');
}
//event listener for delete books
document.getElementById('book-list').addEventListener('click', removeBooks);
