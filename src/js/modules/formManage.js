export const formManage = async () => {
  const privacyCheckbox = document.querySelector('.privacy-checkbox');
  const submitButton = document.querySelector('.submit');
  const form = document.querySelector('.modal-form');
  const screen = document.querySelector('main');
  const loader = document.querySelector('.loader');
  form.addEventListener('submit', formSend);

  async function formSend(e) {
    e.preventDefault();

    let formData = new FormData(form);
    
    screen.classList.add('main-sending');
    loader.classList.remove('hidden');
    let response = await fetch('sendmail.php', {
      method: 'POST',
      body: formData
    });

    if (response.ok) {
      let result = await response.json();
      privacyCheckbox.checked = false;
      submitButton.disabled = true;
      form.reset();
      screen.classList.remove('main-sending');
      loader.classList.add('hidden');
    } else {
      alert('Error!');
    }
  }
};

export default formManage;