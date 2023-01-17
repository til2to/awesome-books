export const removeBook = (allBooks, buttonId) => {
  allBooks = allBooks.filter((book, index) => index !== buttonId);
  window.localStorage.setItem('allBooks', JSON.stringify(allBooks));
  window.location.reload();
}