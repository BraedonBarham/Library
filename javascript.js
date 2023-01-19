
function Book(author, title, numPages, isRead, isShown){
    this.author = author;
    this.title = title;
    this.numPages = numPages;
    this.isRead = isRead;
    this.isShown = isShown;
    this.bookID = Book.prototype.bookCount;
    Book.prototype.bookCount = Book.prototype.bookCount + 1
}
Book.prototype.myLibrary = []
Book.prototype.bookCount = 0

Book.prototype.showBooks = function(){
    for (let i = 0; i < Book.prototype.myLibrary.length; i++)
        if (!Book.prototype.myLibrary[i].isShown){
            Book.prototype.myLibrary[i].isShown = true;
            Book.prototype.myLibrary[i].createBookElement()
        }

}

Book.prototype.createBookElement = function(){

    bookElement = document.createElement("div");
    bookElement.id = `card${this.bookID}`;

    let isReadSpan = document.createElement("span");
    isReadSpan.id = `bookSpan${this.bookID}`
    isReadSpan.classList.add("span")

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

    bookElement.appendChild(isReadSpan)
    isReadSpan.appendChild(bookElementRead);

    bookElement.appendChild(document.createElement("br"));
    bookElement.classList.add("card")


    this.addButtonsToBookElement()
    this.addBookToDOM();
}

Book.prototype.addButtonsToBookElement = function(){
    let removeButton = document.createElement("button")
    let removeButtonText = document.createTextNode("Remove");
    removeButton.classList.add("remove-button");

    removeButton.addEventListener("click", () => {
        Book.prototype.myLibrary.splice(Book.prototype.myLibrary[this.bookID], 1);
        let cardToDelete = document.getElementById(`card${this.bookID}`);

        cardToDelete.remove();
        Book.prototype.fixId();
    })


    removeButton.appendChild(removeButtonText);
    bookElement.appendChild(removeButton);
    

    bookElement.appendChild(document.createElement("br"));


    let isReadButton = document.createElement("button");
    let isReadButtonText = document.createTextNode("Read?");
    isReadButton.classList.add("read-button");
    isReadButton.addEventListener("click", () =>{
        this.changeReadStatus();
    })
    isReadButton.appendChild(isReadButtonText);
    bookElement.appendChild(isReadButton);
}

Book.prototype.addBookToDOM = function(){
    let contentHolder = document.getElementById("main-content");
    contentHolder.appendChild(bookElement);
}

Book.prototype.fixId = function(){
    for (let i = 0; i < Book.prototype.myLibrary.length; i++){

        let isReadSpan = document.getElementsByClassName("span");

        isReadSpan[i].id = `bookSpan${i}`


        Book.prototype.bookCount = 0
        Book.prototype.myLibrary[i].bookID = Book.prototype.bookCount;
        let card = document.getElementsByClassName('card');
        card[i].id = `card${this.bookCount}`;
        if (Book.prototype.myLibrary.length === 0){
            console.log('hello')
            break
        } else{
            Book.prototype.bookCount = Book.prototype.bookCount + 1;

        }
    }
}


Book.prototype.changeReadStatus = function(){
    let span = document.getElementById(`bookSpan${this.bookID}`)
    if (span.innerHTML === "Read: True"){
        span.innerHTML = "Read: False";
    }
    else {
        span.innerHTML = "Read: True";
    }
    console.log(span);

}



Book.prototype.addBook = function(){
    let modalDiv = document.createElement("div");
    modalDiv.classList.add("modal-div");
    body = document.getElementById("body");
    body.appendChild(modalDiv);






}








let book1 = new Book("Douglass Micks", "A Flight to Eiyre", 343, "True", false);
let book2 = new Book("Douglass Micks", "A Flight to Eiyre", 343, "True", false);



Book.prototype.myLibrary.push(book1);
Book.prototype.showBooks(Book.prototype.myLibrary)
Book.prototype.myLibrary.push(book2);
Book.prototype.showBooks(Book.prototype.myLibrary)

// Book.prototype.addBook()