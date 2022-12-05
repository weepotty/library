let myLibrary = [];
let read;
const main = document.querySelector("main");
const openModalButton = document.getElementById("open-modal");
const addBookButton = document.getElementById("add-book");
const modal = document.getElementById("myModal");
const bookBlock = document.querySelectorAll("div.book > div").textContent;
const bookInfo = document.querySelector(".book-info");
// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

class Book {
  constructor(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
  }
  info() {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.status}`;
  }

  addBookToArray() {
    myLibrary.push(this);
  }

  addBookPic() {
    const newBookDiv = document.createElement("div");
    const newBookImage = document.createElement("img");
    const bookTitle = document.createElement("div");
    newBookDiv.classList.add("book");
    if (this.status === "Read") {
      newBookImage.src = "images/book-blue.png";
    } else {
      newBookImage.src = "images/book-pink.png";
    }
    bookTitle.textContent = this.title;
    newBookDiv.append(newBookImage, bookTitle);
    main.append(newBookDiv);
    newBookDiv.addEventListener("click", displayInfo.bind(new Book(), this));
  }
}

function displayInfo(newBook) {
  bookInfo.textContent = newBook.info();
}
//starter library
const theHobbit = new Book("The Hobbit", "JRR Tolkien", "295", "Not read yet");

const theWitches = new Book("The Witches", "Roald Dahl", "100", "Read");
const wild = new Book("Wild", "Cheryl Strayed", "336", "Read");

theHobbit.addBookToArray();
theWitches.addBookToArray();
wild.addBookToArray();

myLibrary.forEach((book) => {
  book.addBookPic();
});

// When the user clicks on the button, open the modal
openModalButton.addEventListener("click", showModal);

addBookButton.addEventListener("click", (event) => {
  hideModal();
  createBookEntry(event);
});

function showModal() {
  modal.style.display = "block";
}

function hideModal() {
  modal.style.display = "none";
}

function createBook(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read);
  newBook.addBookToArray();
  newBook.addBookPic();
}

function createBookEntry(event) {
  event.preventDefault();
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const readStatus = document.getElementById("read-status").checked;
  console.log("click registered");

  console.log(myLibrary);

  readStatus ? (read = "Read") : (read = "Not read yet");

  createBook(title, author, pages, read);
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

//add book removal button
// invoke info function when you click on a book
