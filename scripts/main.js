// Book object constructor
function Book(title, author, numPages, alreadyRead) {
  this.title = title;
  this.author = author;
  this.numPages = numPages;
  this.alreadyRead = alreadyRead;

  this.info = function () {
    return `${this.title} by ${this.author}, ${this.numPages} pages, ${this.alreadyRead ? " not ready yet" : "already read"}`;
  };
}

// Library array
const library = [];

// Method to add Book to library
function addBookToLibrary(title, author, numPages, alreadyRead) {
  library.push(new Book(title, author, numPages, alreadyRead));
}

// Initialzier for javascript
function initialize() {
  addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, false);
  addBookToLibrary("The Lord of the Rings", "J.R.R. Tolkien", 644, false);
  addBookToLibrary("A Song of Fire and Ice", "G.R.R. Martin", 694, false);
  addBookToLibrary("To kill a Mockingbird", "Harper Lee ", 350, false);
}

// Initialize
initialize();

console.log(library[2].info());
