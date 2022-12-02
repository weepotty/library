let myLibrary = [];
let read;
const main = document.querySelector("main");
const openModalButton = document.getElementById("open-modal");
const addBookButton = document.getElementById("add-book");
const modal = document.getElementById("myModal");

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
    console.log(
      `${this.title} by ${this.author}, ${this.pages} pages, ${this.status}`
    );
  }

  addBookToArray() {
    myLibrary.push(this);
  }
}

const theHobbit = new Book("The Hobbit", "JRR Tolkien", "295", "not read yet");

const theWitches = new Book("The Witches", "Roald Dahl", "100", "read");
const wild = new Book("Wild", "Cheryl Strayed", "336", "read");

theHobbit.addBookToArray();
theWitches.addBookToArray();
wild.addBookToArray();

myLibrary.forEach((book) => {
  const newBookDiv = document.createElement("div");
  const newBookImage = document.createElement("img");
  const bookTitle = document.createElement("div");
  newBookDiv.classList.add("book");
  newBookImage.src = "images/book-blue.png";
  bookTitle.textContent = book.title;
  newBookDiv.append(newBookImage, bookTitle);
  main.append(newBookDiv);
});

// When the user clicks on the button, open the modal
openModalButton.addEventListener("click", changeDisplay);

addBookButton.addEventListener("click", createBookEntry);

function changeDisplay() {
  modal.style.display = "block";
}

function createBookEntry() {
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const readStatus = document.getElementById("read-status").checked;
  console.log("click registered");
  console.log(title);
  if (readStatus === true) {
    read = "Read";
  } else {
    read = "Not read yet";
  }
  modal.style.display = "none";
  const newBook = new Book(title, author, pages, read);
  newBook.addBookToArray();
  console.log(myLibrary);
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
