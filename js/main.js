const elModal = document.querySelector('.modal');
const elModalCloseButton = document.querySelector('.js-modal-close')


if (elModalCloseButton) {
  elModalCloseButton.addEventListener('click', function () {
    elModal.classList.remove('modal-block');
  })
}

setTimeout(function () {
  elModal.classList.add('modal-block')
}, 30000);