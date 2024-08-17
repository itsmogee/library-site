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
    true,
    "./assets/thehobbit.jpg",
  );
  addBookToLibrary(
    "The Lord of the Rings",
    "J.R.R. Tolkien",
    644,
    true,
    "./assets/lotr.jpg",
  );
  addBookToLibrary(
    "A Song of Fire and Ice",
    "G.R.R. Martin",
    694,
    false,
    "./assets/got.jpg",
  );
  addBookToLibrary(
    "The Art of War",
    "Sun Tzu ",
    350,
    true,
    "./assets/artofwar.jpg",
  );
  addBookToLibrary(
    "Atomic Habits",
    "James Clear",
    320,
    false,
    "./assets/atomic.jpg",
  );
  addBookToLibrary(
    "Generic Book",
    "James Franco",
    390,
    false,
    "./assets/generic.png",
  );
}

// Initialize
initialize();

const bookShelf = document.querySelector("#bookshelf");
bookShelf.style.color = "wheat";

function createCard(Book) {
  const card_container = document.createElement("div");
  const card = document.createElement("div");

  // Image containter and card ribbon for read/unread
  const card_img_container = document.createElement("div");
  const card_img = document.createElement("img");
  card_img.classList.add("book-img");
  const card_img_ribbon = document.createElement("div");
  card_img_ribbon.classList.add("ribbon");
  const card_img_ribbon_span = document.createElement("span");
  card_img_ribbon_span.textContent =
    Book.alreadyRead === true ? "Read" : "Unread";
  card_img_container.appendChild(card_img);
  card_img_container.appendChild(card_img_ribbon);
  card_img_ribbon.appendChild(card_img_ribbon_span);

  // Card Information structure
  const card_title = document.createElement("h1");
  const card_author = document.createElement("h2");
  const card_info = document.createElement("div");
  const info_btns = document.createElement("div");

  // Read Button
  const readBtn = document.createElement("button");
  card_img_ribbon.classList.add(Book.alreadyRead === true ? "read" : "unread");
  card.classList.add(
    Book.alreadyRead === true ? "read-border" : "unread-border",
  );
  readBtn.addEventListener("click", () => {
    Book.alreadyRead = !Book.alreadyRead;
    card_img_ribbon_span.textContent =
      Book.alreadyRead === true ? "Read" : "Unread";
    card_img_ribbon.classList.remove(
      Book.alreadyRead === true ? "unread" : "read",
    );
    card_img_ribbon.classList.add(
      Book.alreadyRead === true ? "read" : "unread",
    );
    card.classList.remove(
      Book.alreadyRead === true ? "unread-border" : "read-border",
    );
    card.classList.add(
      Book.alreadyRead === true ? "read-border" : "unread-border",
    );
  });
  readBtn.textContent = "Read";
  readBtn.classList.add("read-btn");

  // Delete Button
  const deleteBtn = document.createElement("button");
  deleteBtn.type = "button";
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("delete-btn");

  info_btns.classList.add("info-btns");
  info_btns.appendChild(readBtn);
  info_btns.appendChild(deleteBtn);

  card_info.classList.add("info");
  card_container.classList.add("card_container");
  card.classList.add("card");

  const img = new Image();
  img.src = Book.thumbnail;
  img.onerror = function (e) {
    e.stopPropagation();
    img.src = "./assets/generic.png";
    card_img.src = img.src;
  };
  card_img.src = img.src;

  card_title.textContent = Book.title;
  card_author.textContent = Book.author;
  card_info.textContent += `${Book.numPages} pages `;
  card.appendChild(card_img_container);
  card.appendChild(card_title);
  card.appendChild(card_author);
  card.appendChild(card_info);
  card.appendChild(info_btns);
  card_container.appendChild(card);
  bookShelf.appendChild(card_container);

  deleteBtn.addEventListener("click", () => {
    i = 0;
    while (i < library.length) {
      if (Book === library[i]) {
        library.splice(i, 1);
        const newLib = [];
        if (searchQuery !== "") {
          findQuery(newLib);
          updateLibrary(newLib);
        } else {
          updateLibrary(library);
          return;
        }
        break;
      }
      i++;
    }
  });
}

const updateLibrary = function (newLibrary) {
  while (bookShelf.firstChild) {
    bookShelf.removeChild(bookShelf.firstChild);
  }
  newLibrary.forEach((book) => {
    createCard(book);
  });
};

const addBookBtn = document.querySelector(".add-btn");
const dialog = document.querySelector("dialog");
const closeBtn = document.querySelector(".close");
const submit = document.querySelector(".submit");

// Show the dialog
addBookBtn.addEventListener("click", () => {
  dialog.showModal();
});

// Close the dialog
closeBtn.addEventListener("click", () => {
  dialog.close();
});

library.forEach((book) => {
  createCard(book);
});

// Submit Button Functionality
submit.addEventListener("submit", (event) => {
  event.preventDefault();

  const title = document.getElementById("title");
  const author = document.getElementById("author");
  const numPages = document.getElementById("numPages");
  const alreadyRead = document.getElementById("alreadyRead");
  const imgUrl = document.getElementById("imgUrl");

  if (title.value === "" || author.value === "" || numPages.value === "") {
    alert("Ensure you input values to the fields");
  } else {
    addBookToLibrary(
      title.value,
      author.value,
      numPages.value,
      alreadyRead.checked,
      imgUrl.value,
    );
    updateLibrary(library);
    title.value = "";
    author.value = "";
    numPages.value = "";
    alreadyRead.checked = false;
    imgUrl.value = "";
    dialog.close();
  }
});

// Search book functionality
const search = document.getElementById("search");
let searchQuery = "";
search.onkeyup = (event) => {
  searchQuery = event.target.value;
  const newLib = [];
  if (searchQuery !== "") {
    findQuery(newLib);
  } else {
    updateLibrary(library);
    return;
  }
  updateLibrary(newLib);
};

const findQuery = (newLib) => {
  for (let key of library) {
    if (key.title.toLowerCase().includes(searchQuery.toLowerCase())) {
      newLib.push(key);
    }
  }
};
