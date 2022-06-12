export const openModal = async () => {
  const modalOpenBtns = document.querySelectorAll('.proposal-open');
  const mainHomeBlock = document.querySelector('.main-home');
  const modalBlock = document.querySelector('.modal');
  const homeBtn = document.querySelector('.header-button');

  modalOpenBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      modalBlock.classList.remove('hidden');
      mainHomeBlock.classList.add('hidden');
      console.log('opened');
    });
  });

  homeBtn.addEventListener('click', () => {
    modalBlock.classList.add('hidden');
    mainHomeBlock.classList.remove('hidden');
  });
};

export default openModal;