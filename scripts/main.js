// Book object constructor
function Book(title, author, numPages, alreadyRead, thumbnail_Url) {
  this.title = title;
  this.author = author;
  this.numPages = numPages;
  this.alreadyRead = alreadyRead;
  this.thumbnail = thumbnail_Url;

  this.info = function () {
    return `${this.title} by ${this.author}, ${this.numPages} pages, ${this.alreadyRead ? " not ready yet" : "already read"}`;
  };
}

// Library array
const library = [];

// Method to add Book to library
function addBookToLibrary(title, author, numPages, alreadyRead, thumbnail_Url) {
  library.push(new Book(title, author, numPages, alreadyRead, thumbnail_Url));
}

// Initialzier for javascript
function initialize() {
  addBookToLibrary(
    "The Hobbit",
    "J.R.R. Tolkien",
    295,
    false,
    "../assets/thehobbit.jpg",
  );
  addBookToLibrary(
    "The Lord of the Rings",
    "J.R.R. Tolkien",
    644,
    false,
    "../assets/lotr.jpg",
  );
  addBookToLibrary(
    "A Song of Fire and Ice",
    "G.R.R. Martin",
    694,
    false,
    "../assets/got.jpg",
  );
  addBookToLibrary(
    "The Art of War",
    "Sun Tzu ",
    350,
    false,
    "../assets/artofwar.jpg",
  );
  addBookToLibrary(
    "Atomic Habits",
    "James Clear",
    320,
    false,
    "../assets/atomic.jpg",
  );
}

// Initialize
initialize();

const bookShelf = document.querySelector("#bookshelf");
//bookShelf.style.backgroundColor = "black";
bookShelf.style.color = "red";

function createCard(Book) {
  const card_container = document.createElement("div");
  const card = document.createElement("div");
  const card_img = document.createElement("img");
  card_img.classList.add("book-img");
  const card_title = document.createElement("div");
  const card_author = document.createElement("div");
  const card_info = document.createElement("div");
  card_container.classList.add("card_container");
  card.classList.add("card");
  card_img.src = Book.thumbnail;
  card_title.textContent = Book.title;
  card_author.textContent = Book.author;
  card_info.textContent += `${Book.numPages} ${Book.alreadyRead}`;
  card.appendChild(card_img);
  card.appendChild(card_title);
  card.appendChild(card_author);
  card.appendChild(card_info);
  card_container.appendChild(card);
  bookShelf.appendChild(card_container);
}

console.log(library[2].info());

library.forEach((book) => {
  createCard(book);
});
