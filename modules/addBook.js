import Book from "./bookClass.js";
import { bookExist } from "./compare.js";

export const title = document.getElementById("title");
const storage = JSON.parse(window.localStorage.getItem("allBooks")) || [];

export const addBook = (allBooks) => {
  /* check if book exist */
  let exist = false;
  allBooks.forEach((book) => {
    if (bookExist(book.title, title.value)) {
      exist = true;
    }
  });

  /* add book if it doesn't exist already */
  if (exist === false) {
    const newBook = new Book(title.value, author.value);
    window.localStorage.setItem(
      "allBooks",
      JSON.stringify([
        ...allBooks,
        { title: newBook.title, author: newBook.author },
      ])
    );
    window.location.reload();
  }
};
