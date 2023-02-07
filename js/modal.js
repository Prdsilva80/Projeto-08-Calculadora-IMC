export const Modal = {

  wrapper: document.querySelector('.modal-wrapper'),
  messege: document.querySelector('.modal .title span'),
  btnClose: document.querySelector('.modal button.close'),

  open() {
    Modal.wrapper.classList.add('open')
  },
  close() {
    Modal.wrapper.classList.remove('open')
  }
}

Modal.btnClose.onclick = function() {
  Modal.close()
}

window.addEventListener('keydown', handleKeydown)
function handleKeydown(e) {
  if (e.key === 'Escape') {
    Modal.close()
  }
}