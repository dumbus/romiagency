import '../sass/style.scss';
import openModal from './modules/openModal';
import manageModal from './modules/manageModal';

window.addEventListener('DOMContentLoaded', () => {
  openModal();
  manageModal();
});