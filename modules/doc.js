const bookTitle = document.querySelector('.titleinput');
const bookAuthor = document.querySelector('.authorinput');
const list = document.querySelector('.list-link');
const addNew = document.querySelector('.add-link');
const contact = document.querySelector('.contact-link');
const date = document.getElementById('date-time');

const addBtn = document.getElementById('add-form');
const bookCollectionList = document.querySelector('.book-list');
const listSection = document.querySelector('.container1');
const addSection = document.querySelector('.form');
const contactSection = document.querySelector('.contact');
const hr = document.querySelector('.hr');

list.addEventListener('click', () => {
  listSection.style.display = 'flex';
  addSection.style.display = 'none';
  contactSection.style.display = 'none';
  hr.style.display = 'none';
  document.querySelector('.list-link').style.color = 'blue';
  document.querySelector('.add-link').style.color = 'black';
  document.querySelector('.contact-link').style.color = 'black';
});
addNew.addEventListener('click', () => {
  listSection.style.display = 'none';
  addSection.style.display = 'flex';
  contactSection.style.display = 'none';
  document.querySelector('.list-link').style.color = 'black';
  document.querySelector('.add-link').style.color = 'blue';
  document.querySelector('.contact-link').style.color = 'black';
});
contact.addEventListener('click', () => {
  listSection.style.display = 'none';
  addSection.style.display = 'none';
  contactSection.style.display = 'flex';
  document.querySelector('.list-link').style.color = 'black';
  document.querySelector('.add-link').style.color = 'black';
  document.querySelector('.contact-link').style.color = 'blue';
});

export {
  addBtn, bookTitle, bookAuthor, bookCollectionList, list, addNew, contact, date,
  listSection, addSection, contactSection, hr,
};
