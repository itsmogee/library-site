const library = [];

function Book(title, author, numPages, alreadyRead) {
  this.title = title;
  this.author = author;
  this.numPages = numPages;
  this.alreadyRead = alreadyRead;

  this.info = function () {
    return `${this.title} by ${this.author}, ${this.numPages} pages, ${this.alreadyRead ? " not ready yet" : "already read"}`;
  };
}

function addBookToLibrary() {}

library.push(new Book("The Hobbit", "J.R.R. Tolkien", 295, false));
library.push(new Book("The Lord of the Rings", "J.R.R. Tolkien", 644, false));
library.push(new Book("A Song of Fire and Ice", "G.R.R. Martin", 694, false));
library.push(new Book("To kill a Mockingbird", "Harper Lee ", 350, false));
