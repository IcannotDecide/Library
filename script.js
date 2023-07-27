let myLibrary = [];

function Book(title, author, pages, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
};

const book1 = new Book("All the bright places", "Jennifer", 200, "no");

const book2 = new Book("Iron Man 3", "Bruce Lee", 200, "no");

const book3 = new Book("Over the cuckoos nest", "Crazie", 200, "I don't read books");

function addBookToLibrary(title, author, pages, status) {
  
};

const cards = document.querySelector(".cards");

myLibrary.push(book1, book2, book3);

for (let i = 0; i < myLibrary.length; i++) {
  cards.innerHTML = `<p>${myLibrary[i].title}`
}