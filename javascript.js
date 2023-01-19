
function Book(author, title, numPages, isRead, isShown){
    this.author = author;
    this.title = title;
    this.numPages = numPages;
    this.isRead = isRead;
    this.isShown = isShown;
}
Book.prototype.myLibrary = []

Book.prototype.showBooks = function(){
    for (let i = 0; i < Book.prototype.myLibrary.length; i++)
        if (!Book.prototype.myLibrary[i].isShown){
            Book.prototype.myLibrary[i].isShown = true;
            Book.prototype.myLibrary[i].createBookElement()
        }

}

Book.prototype.createBookElement = function(){

    bookElement = document.createElement("div");

    let bookElementAuthor = document.createTextNode(`Author: ${this.author}`);
    let bookElementTitle = document.createTextNode(`Title: ${this.title}`) 
    let bookElementPages = document.createTextNode(`Number of Pages: ${this. numPages}`);
    let bookElementRead = document.createTextNode(`Read: ${this.isRead}`);
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
    
    this.addButtonsToBookElement()
    this.addBookToDOM();




}

Book.prototype.addButtonsToBookElement = function(){
    bookElement.appendChild(document.createElement("button"))
}


Book.prototype.addBookToDOM = function(){
    let contentHolder = document.getElementById("main-content");
    contentHolder.appendChild(bookElement);
}




let book1 = new Book("Douglass Micks", "A Flight to Eiyre", 343, true, false);
let book2 = new Book("Douglass Micks", "A Flight to Eiyre", 343, true, false);



Book.prototype.myLibrary.push(book1);
Book.prototype.myLibrary.push(book2);


book1.showBooks(Book.prototype.myLibrary)