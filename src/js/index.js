import '../sass/style.scss';
import openModal from './modules/openModal';
import manageModal from './modules/manageModal';
import formSend from './modules/formSend';

window.addEventListener('DOMContentLoaded', async () => {
  openModal();
  manageModal();
  formSend();
});