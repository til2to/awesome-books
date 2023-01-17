export const title = document.getElementById("title");
export const author = document.getElementById("author");
export let newBooks = document.querySelector(".new-books-container");

/* display each book */
export const displayBooks = (storage) => {
  storage.reverse().forEach((book, index) => {
    if (book.title && book.title !== title.value) {
      const displayBook = `
      <div class="book-container">
      <div class="title-author">
      <p class="book-title">"${book.title}"</p>
      <p>by</p>
      <p class="book-author">${book.author}</p>
      <button class="remove" id=${index}>Remove</button>
    `;
      newBooks.innerHTML += displayBook;
    }
  });
};
