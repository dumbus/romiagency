export const formSend = () => {
  const form = document.querySelector('.modal-form');
  const servicesCheckboxes = document.querySelectorAll('.service-checkbox');
  const goalsCheckboxes = document.querySelectorAll('.goal-checkbox');
  const modalStatus = document.querySelector('.modal-status');
  const submitButton = document.querySelector('.submit');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get data from form
    let textInputsValues = {
      email: document.querySelector('#email').value,
      phone: document.querySelector('#phone').value,
      comment: document.querySelector('#comment').value
    }
    
    let checkedServices = [];
    let checkedGoals = [];

    servicesCheckboxes.forEach(checkbox => {
      if (checkbox.checked) {
        checkedServices.push(checkbox.value);
      }
    });

    goalsCheckboxes.forEach(checkbox => {
      if (checkbox.checked) {
        checkedGoals.push(checkbox.value);
      }
    });

    // Prepare data for sending
    let data = new FormData();

    data.append('email', textInputsValues.email);
    data.append('phone', textInputsValues.phone);

    if (textInputsValues.comment.length === 0) {
      data.append('comment', '-');
    } else {
      data.append('comment', textInputsValues.comment);
    }

    if (checkedServices.length === 0) {
      data.append('services', '-');
    } else {
      data.append('services', checkedServices.join(', '));
    }
    
    if (checkedGoals.length === 0) {
      data.append('goals', '-');
    } else {
      data.append('goals', checkedGoals.join(', '));
    }

    // Mail send
    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'mailer/sendmail.php', true);

    xhr.addEventListener('loadend', () => {
      modalStatus.classList.add('modal-status-visible');
      submitButton.disabled = true;
      e.target.reset();
    });

    xhr.send(data);
  });
};

export default formSend;