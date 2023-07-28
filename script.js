const cards = document.querySelector(".cards");

let myLibrary = [];

function Book(title, author, pages, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
};

// const book1 = new Book("All the bright places", "Jennifer", 200, "no");

// const book2 = new Book("Iron Man 3", "Bruce Lee", 200, "no");

// const book3 = new Book("Over the cuckoos nest", "Crazie", 200, "I don't read books");

// myLibrary.push(book1, book2, book3);

function addBookToLibrary(title, author, pages, status) {
  
  myLibrary.push(new Book(title, author, pages, status));
  let myLibraryLength = myLibrary.length-1;
    let newDiv = document.createElement("div");
    newDiv.dataset.index = myLibraryLength;
    let createdTitle = document.createElement("p");  
    let createdAuthor = document.createElement("p");
    let createdPages = document.createElement("p");
    let createdStatus = document.createElement("p");
    let createdButton = document.createElement("button");
    createdTitle.innerText = myLibrary[myLibraryLength].title;
    createdAuthor.innerText = myLibrary[myLibraryLength].author;
    createdPages.innerText = myLibrary[myLibraryLength].pages;
    if (myLibrary[myLibraryLength].status) {
      createdStatus.innerText = "read"
    } else {
      createdStatus.innerText = "not read"
    }
    createdButton.innerText = "Remove Book";
    newDiv.append(createdTitle, createdAuthor, createdPages, createdStatus, createdButton);
    createdButton.addEventListener("click", removeDiv);
    cards.append(newDiv);
    

    // div[data-index=${myLibrary[myLibraryLength]}]
};

// addBookToLibrary();

function removeDiv(e) {
  e.target.parentElement.remove();
};

const button = document.querySelector("#popup-button");
button.addEventListener("click", displayNone);

const popup = document.querySelector(".popup");
function displayNone() {
    popup.style.display = "flex";
    document.addEventListener("click", removePopup)
};

function removePopup(e) {
  if (e.target === popup) {
    popup.style.display = "none";
  }
};

const submit = document.getElementById("submit");

submit.addEventListener("click", addBook);

function addBook(e) {
  const addTitle  = document.querySelector("#title").value;
  const addAuthor  = document.querySelector("#author").value;
  const addPages  = document.querySelector("#pages").value;
  const addStatus = document.querySelector("#status").checked;  

  if (addTitle !== "" && addAuthor !== "" && addPages !== "" && +addPages > 0) {
    addBookToLibrary(addTitle, addAuthor, addPages, addStatus);
    popup.style.display = "none";
    e.preventDefault();
  }
  return
}

