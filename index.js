import { addBook } from "./modules/addBook.js";
import { displayBooks, title, author } from "./modules/displayBook.js";
import { removeBook } from "./modules/removeBook.js";
import { setTime } from "./modules/clock.js";

const listBtn = document.querySelector(".list-btn");
const addNewBtn = document.querySelector(".add-new-btn");
const aboutBtn = document.querySelector(".contact-btn");
const clock = document.querySelector("#clock");
//Navigation links
const listContainer = document.getElementById("list-container");
const addNewContainer = document.getElementById("add-new-container");
const contactContainer = document.getElementById("contact-container");

listBtn.addEventListener("click", () => {
  listContainer.style.display = "block";
  contactContainer.style.display = "none";
  addNewContainer.style.display = "none";
});

addNewBtn.addEventListener("click", () => {
  listContainer.style.display = "none";
  contactContainer.style.display = "none";
  addNewContainer.style.display = "block";
});
aboutBtn.addEventListener("click", () => {
  listContainer.style.display = "none";
  addNewContainer.style.display = "none";
  contactContainer.style.display = "block";
});

setInterval(() => {
  setTime();
}, 1000);

class BookList {
  constructor() {
    this.form = document.querySelector(".form");
    // this.newBooks = document.querySelector('.new-books-container');
    this.storage = JSON.parse(window.localStorage.getItem("allBooks")) || [];
    this.allBooks = this.storage;

    this.form.addEventListener("submit", (e) => {
      e.preventDefault();
      addBook(this.storage);
      title.value = "";
      author.value = "";
    });

    /* Display books */
    displayBooks(this.storage);

    /* compare and remove */
    const bookBtns = document.querySelectorAll(".remove");
    bookBtns.forEach((bookBtn) => {
      bookBtn.addEventListener("click", (e) => {
        const buttonId = parseInt(e.target.getAttribute("id"), 10);
        removeBook(this.allBooks, buttonId);
      });
    });
  }
}

/* eslint-disable */
const freshBook = new BookList();
