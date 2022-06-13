import Swiper from 'swiper';
import 'swiper/css';

export const manageSwiper = () => {
  const swiper = new Swiper('.swiper', {
    loop: true,
    spaceBetween: 50,
    slidesPerView: 3
  });
};

export default manageSwiper;