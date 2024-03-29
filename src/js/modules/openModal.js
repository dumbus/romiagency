import Swiper, {Autoplay} from 'swiper';
Swiper.use([Autoplay]);
import 'swiper/css';

export const openModal = async () => {
  const modalOpenBtns = document.querySelectorAll('.proposal-open');
  const mainHomeBlock = document.querySelector('.main-home');
  const modalBlock = document.querySelector('.modal');
  const homeBtn = document.querySelector('.header-button');
  const header = document.querySelector('.header');
  const modalStatus = document.querySelector('.modal-status');
  const modalClose = document.querySelector('.modal-close');

  let swiper = new Swiper('.swiper', {
    loop: true,
    allowTouchMove: false,
    autoplay: {
      delay: 1500
    },
    breakpoints: {
      1024: {
        spaceBetween: 80,
        slidesPerView: 3
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 80
      },
      568: {
        slidesPerView: 2,
        spaceBetween: 80
      }
    }
  });

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
    modalStatus.remove('modal-status-visible');

    swiper.destroy();

    swiper = new Swiper('.swiper', {
      loop: true,
      spaceBetween: 80,
      slidesPerView: 3,
      allowTouchMove: false,
      autoplay: {
        delay: 1500
      }
    });
  });

  modalClose.addEventListener('click', () => {
    modalBlock.classList.add('hidden');
    mainHomeBlock.classList.remove('hidden');
    header.classList.remove('header-dark');
    modalStatus.remove('modal-status-visible');

    let swiper = new Swiper('.swiper', {
      loop: true,
      allowTouchMove: false,
      autoplay: {
        delay: 1500
      },
      breakpoints: {
        1024: {
          spaceBetween: 80,
          slidesPerView: 3
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 80
        },
        568: {
          slidesPerView: 2,
          spaceBetween: 80
        }
      }
    });
  });
};

export default openModal;