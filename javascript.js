const myLibrary = [];

function Book(author, title, numPages, isRead, isShown){
    this.author = author;
    this.title = title;
    this.numPages = numPages;
    this.isRead = isRead;
    this.isShown = isShown;
}

function showBooks(books){
    for (let i = 0; i < books.length; i++)
        if (!books[i].isShown){
            books[i].isShown = true;
            createBookElement(books[i])
        }

}

function createBookElement(book){
    bookElement = document.createElement("div");

    let bookElementAuthor = document.createTextNode(`Author: ${book.author}`);
    let bookElementTitle = document.createTextNode(`Title: ${book.title}`) 
    let bookElementPages = document.createTextNode(`Number of Pages: ${book. numPages}`);
    let bookElementRead = document.createTextNode(`Read: ${book.isRead}`);
    bookElement.appendChild(bookElementAuthor);
    bookElement.appendChild(document.createElement("br"));
    bookElement.appendChild(document.createElement("br"));

    bookElement.appendChild(bookElementTitle);
    bookElement.appendChild(document.createElement("br"));
    bookElement.appendChild(document.createElement("br"));

    bookElement.appendChild(bookElementPages);
    bookElement.appendChild(document.createElement("br"));
    bookElement.appendChild(document.createElement("br"));
    bookElement.appendChild(bookElementRead);
    bookElement.appendChild(document.createElement("br"));
    bookElement.classList.add("card")
    addButtonsToBookElement(bookElement)
    addBookToDOM(bookElement);
}

function addButtonsToBookElement(bookElement){
    bookElement.appendChild(document.createElement("button"))
}

function addBookToDOM(bookElement){
    let contentHolder = document.getElementById("main-content");
    contentHolder.appendChild(bookElement);
}




let book1 = new Book("Douglass Micks", "A Flight to Eiyre", 343, true, false);
let book2 = new Book("Douglass Micks", "A Flight to Eiyre", 343, true, false);



myLibrary.push(book1);
myLibrary.push(book2);


showBooks(myLibrary)