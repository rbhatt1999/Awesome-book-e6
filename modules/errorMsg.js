const errorMsg = document.querySelector('.error-msg');
export default () => {
  errorMsg.classList.remove('d-hide');
  errorMsg.innerHTML = 'Please fill the details';
  setTimeout(() => {
    errorMsg.classList.add('d-hide');
    errorMsg.innerHTML = '';
  }, 2000);
};