import '../sass/style.scss';
import openModal from './modules/openModal';
import manageModal from './modules/manageModal';
import formManage from './modules/formManage';
import manageSwiper from './modules/manageSwiper'

window.addEventListener('DOMContentLoaded', async () => {
  openModal();
  manageModal();
  await formManage();
  manageSwiper();
});