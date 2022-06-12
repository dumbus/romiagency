export const manageModal = async () => {
  const privacyCheckbox = document.querySelector('.privacy-checkbox');
  const submitButton = document.querySelector('.submit');

  privacyCheckbox.addEventListener('click', () => {
    if (privacyCheckbox.checked) {
      submitButton.disabled = false;
    } else {
      submitButton.disabled = true;
    }
  });
};

export default manageModal;