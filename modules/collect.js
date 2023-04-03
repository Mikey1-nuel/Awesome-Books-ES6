export default class Collection {
  static getData() {
    const bookCollection = JSON.parse(localStorage.getItem('bookCollection')) || [];
    return bookCollection;
  }

  static add(newBook) {
    const bookCollection = Collection.getData();
    bookCollection.push(newBook);
    localStorage.setItem('bookCollection', JSON.stringify(bookCollection));
  }

  static remove(index) {
    let bookCollection = Collection.getData();
    bookCollection = bookCollection.filter((book, bookIndex) => bookIndex !== +index);
    localStorage.setItem('bookCollection', JSON.stringify(bookCollection));
  }
}
