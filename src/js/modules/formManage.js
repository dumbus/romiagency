export const formManage = async () => {
  const form = document.querySelector('.modal-form');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    console.log('Data is sent');
    e.target.reset();
  });
};

export default formManage;