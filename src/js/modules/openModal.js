export const openModal = async () => {
  const modalOpenBtns = document.querySelectorAll('.proposal-open');
  const mainHomeBlock = document.querySelector('.main-home');
  const modalBlock = document.querySelector('.modal');
  const homeBtn = document.querySelector('.header-button');
  const header = document.querySelector('.header');

  modalOpenBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      modalBlock.classList.remove('hidden');
      mainHomeBlock.classList.add('hidden');
      header.classList.add('header-dark');
    });
  });

  homeBtn.addEventListener('click', () => {
    modalBlock.classList.add('hidden');
    mainHomeBlock.classList.remove('hidden');
    header.classList.remove('header-dark');
  });
};

export default openModal;