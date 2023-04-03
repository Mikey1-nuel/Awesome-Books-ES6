import Collection from './modules/collect.js';
import Bookdetails from './modules/Bookdetail.js';
import './modules/doc.js';
import './modules/DateTime.js';

class Display {
  static renderBooks() {
    const bookCollectionList = document.querySelector('.book-list');
    const bookCollection = Collection.getData();
    bookCollectionList.innerHTML = bookCollection
      .map((book, bookIndex) => (bookIndex % 2 === 0 ? `
  <div class="container show">
  <ul class="sub-container">
  <li>
  "${book.title}" by
  </li>
  <li>
  ${book.author}
  </li>
  </ul>
  <button class='removebtn' 
  id="remove-btn"
  data-index='${bookIndex}'>Remove
  </button>        
  </div>
  ` : `
  <div class="container">
  <ul class="sub-container">
  <li>
  "${book.title}" by
  </li>
  <li>
  ${book.author}
  </li>
  </ul>
  <button class='removebtn' 
  id="remove-btn"
  data-index='${bookIndex}'>Remove
  </button>        
  </div>
  `)).join('');
  }
}

document.addEventListener('DOMContentLoaded', Display.renderBooks);

const addBtn = document.getElementById('add-form');
const bookCollectionList = document.querySelector('.book-list');
const bookTitle = document.querySelector('.titleinput');
const bookAuthor = document.querySelector('.authorinput');
addBtn.addEventListener('submit', (e) => {
  e.preventDefault();
  const title = bookTitle.value;
  const author = bookAuthor.value;
  const newBook = new Bookdetails(title, author);
  if (title && author) {
    // Add book and refresh book collection.
    Collection.add(newBook);
    Display.renderBooks();
    addBtn.reset();
  }
});

bookCollectionList.addEventListener('click', (e) => {
  if (e.target.matches('.removebtn')) {
    const indexNo = e.target.dataset.index;
    // A function to remove book
    Collection.remove(indexNo);
    Display.renderBooks();
  }
});
