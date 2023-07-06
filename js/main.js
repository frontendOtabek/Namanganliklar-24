const elModalOpenButton = document.querySelector('.button-orange');
const elModal = document.querySelector('.modal');
const elModalCloseButton = document.querySelector('.close-icon')

elModalOpenButton.addEventListener('click', function () {
  elModal.classList.add('modal-block');
});

elModalCloseButton.addEventListener('click', function () {
  elModal.classList.remove('modal-block');
})