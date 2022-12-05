import BooksList from './modules/bookList.js';
import errorMsgFuction from './modules/errorMsg.js';
import titleCase from './modules/titleCase.js';
import dateTime from './modules/dateTime.js';

const submit = document.querySelector('#submit');
const formInput = document.querySelectorAll('form input');
const navigation = document.querySelectorAll('.navigation-bar a');
const section = document.querySelectorAll('section');

const books = new BooksList();
submit.addEventListener('click', (event) => {
  event.preventDefault();
  const title = formInput[0].value;
  const author = formInput[1].value;
  formInput[0].value = '';
  formInput[1].value = '';
  const id = Date.now();
  if (title === '' || author === '') {
    errorMsgFuction();
  } else {
    books.addBook(titleCase(title), titleCase(author), id);
  }
});

if (localStorage.getItem('books')) {
  JSON.parse(localStorage.getItem('books')).forEach((item) => {
    books.display(item.title, item.author, item.id);
  });
}

dateTime();
setInterval(dateTime, 1000);

navigation[0].addEventListener('click', () => {
  section[1].classList.remove('d-hide');
  section[2].classList.add('d-hide');
  section[3].classList.add('d-hide');
  navigation[0].classList.add('blue');
  navigation[1].classList.remove('blue');
  navigation[2].classList.remove('blue');
});
navigation[1].addEventListener('click', () => {
  section[2].classList.remove('d-hide');
  section[1].classList.add('d-hide');
  section[3].classList.add('d-hide');
  navigation[1].classList.add('blue');
  navigation[0].classList.remove('blue');
  navigation[2].classList.remove('blue');
});
navigation[2].addEventListener('click', () => {
  section[3].classList.remove('d-hide');
  section[2].classList.add('d-hide');
  section[1].classList.add('d-hide');
  navigation[2].classList.add('blue');
  navigation[1].classList.remove('blue');
  navigation[0].classList.remove('blue');
});
