const addBook = document.querySelector(".btn-container button");
const addBookCon = document.querySelector("#addbook");
const booksCon = document.querySelector(".books-container");
const exitbtn = document.querySelector("#exit");
const submitbtn = document.querySelector("form>button");

const form = document.querySelector("form");
const title = document.querySelector("#Title");
const author = document.querySelector("#Author");
const pages = document.querySelector("#Pages");
const isRead = document.querySelector("#Reading");
const myLibrary = [{title: "Ikigai", author: "Hector Garcia", pages: 208, read: "Not Readed"}];

function book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  const stats = isRead.checked == true ? "Readed" : "Not Readed";
  myLibrary.push(new book(title.value, author.value, pages.value, stats));
  populateCard();
}

function populateCard() {
  let card = document.createElement("div");
  let clutter = "";
  myLibrary.forEach((books, idx) => {
    card.classList.add("card");
    card.id = idx;
    clutter = `<div class="card-info">
      <h1>${books.title}</h1>
      <p>by ${books.author}</p>
      <p>${books.pages} Pages</p>
      </div>
      <div id="stats">${books.read}</div>
      <button id="removebtn">Remove</button>`;
    card.innerHTML = clutter;
    booksCon.appendChild(card);
  });
  card.addEventListener("click", (e) => {
    if (e.target.id === "removebtn") {
      card.remove();
    }
    if (e.target.id === "stats") {
      e.target.textContent = e.target.textContent === "Readed" ? "Not Readed" : "Readed"; 
    }
  })
}

function EnableEvents() {
  submitbtn.addEventListener("click", (e) => {
    addBookToLibrary();
    addBookCon.style.scale = 0;
    exitbtn.style.scale = 0;
    e.preventDefault();
    form.reset();
  });

  addBook.addEventListener("click", () => {
    addBookCon.style.scale = 1;
    exitbtn.style.scale = 1;
  });

  exitbtn.addEventListener("click", () => {
    addBookCon.style.scale = 0;
    exitbtn.style.scale = 0;
  });
}

EnableEvents();
populateCard();